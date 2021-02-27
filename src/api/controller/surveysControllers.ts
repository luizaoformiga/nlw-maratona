import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { SurveysRepository } from '../repositories/surveyRepositories';

export class SurveyController {
    async postSurveyController (request: Request, response: Response) {
        const { title, description } = request.body;
        const surveyRepository = getCustomRepository(SurveysRepository);
        const survey = surveyRepository.create({ title, description });

        await surveyRepository.save(survey);
        return response.status(201).json(survey);
    }

    async getSurveyController (request: Request, response: Response) {
        const surveyRepositoryVariable = getCustomRepository(SurveysRepository);
        const all = await surveyRepositoryVariable.find();

        return response.status(200).json(all);
    }
    
    async getSurveyControllerEspecific (request: Request, response: Response) {
        const { title, description } = request.params;
        const surveyId = await getCustomRepository(SurveysRepository).findOne({ title, description });

        if (!surveyId) {
           response.status(404).json(surveyId);
        }

        return response.json(surveyId);
    }

    async putSurveyController (request: Request, response: Response) {
        const { title, description } = request.params;
        const putSurvey = await getCustomRepository(SurveysRepository).update({ title, description }, request.body);
 
        if(putSurvey.affected === 1) {
           const tasksUpdate = await getCustomRepository(SurveysRepository).findOne({ title, description });
           return response.status(200).json(tasksUpdate);
        } 

        return response.status(404).json({ message: 'Survey not found' });
    }

    async patchSurveyController (request: Request, response: Response) {
        const { title, description } = request.params;
        const surveyPatch = await getCustomRepository(SurveysRepository).update({ title, description }, request.body);

        if(surveyPatch.affected === 1) {
           await getCustomRepository(SurveysRepository).findOne({ title, description });
           return response.status(200).json({ message: ' Surveys Finished' });
        }

        return response.status(404).json({ message: 'NOT FOUND' });
    }

    async deleteSurveyController (request: Request, response: Response) {
        const { title, description } = request.params;
        const removeSurvey = await getCustomRepository(SurveysRepository).delete({ title, description });

        if(removeSurvey.affected === 1) {
          await getCustomRepository(SurveysRepository).findOne({ title, description });
          return response.status(200).json({ message: ' Surveys removed' });
        }
 
       return response.status(404).json({ message: 'NOT FOUND' });
    }
}