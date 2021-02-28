import { badRequest } from '@hapi/boom';
import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import path from 'path';

import SurveyRepository from '../repositories/surveyRepositories';
import SurveysUsersRepository from '../repositories/SurveysUsersRepository';
import UserRepository from '../repositories/userRepositories';
import SendMailService from '../services/SendMailService';

export default class SendMailController {
  async postSendEmialController(request: Request, response: Response): Promise<Response> {
    const { email, survey_id } = request.body;

    const usersRepository = getCustomRepository(UserRepository);
    const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);
    const surveysRepository = getCustomRepository(SurveyRepository);

    const user = await usersRepository.findOne({ email });

    if (!user) {
      throw badRequest('User does not exists', { code: 240 });
    }

    const survey = await surveysRepository.findOne({
      id: survey_id,
    });

    if (!survey) {
      throw badRequest('Survey does not exists', { code: 241 });
    }

    const surveyUserAlreadyExists = await surveysUsersRepository.findOne({
      where: { 
        user_id: user.id, 
        value: null 
      },
    });

    const variables = {
      name: user.name,
      title: survey.title,
      id: null,
      description: survey.description,
      link: `${process.env.URL_MAIL}`,
    };

    const npsPath = path.resolve(__dirname, '..', 'views', 'emails', 'nps.hbs');

    const sendMail = new SendMailService();

    if (surveyUserAlreadyExists) {
      variables.id = surveyUserAlreadyExists.id;
      await sendMail.execute(email, survey.title, variables, npsPath);

      return response.json({
        id: surveyUserAlreadyExists.id,
      });
    }

    const surveyUser = surveysUsersRepository.create({
      user_id: user.id,
      survey_id,
    });

    await surveysUsersRepository.save(surveyUser);

    variables.id = surveyUser.id;

    await sendMail.execute(email, survey.title, variables, npsPath);

    return response.status(201).json({
      id: surveyUser.id,
    });
  }
}

