import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { SurveysRepository } from '../repositories/surveyRepositories';

export class SurveyController {
    // POST
    async postSurveyController (request: Request, response: Response) {
        const { title, description } = request.body;
        const surveyRepository = getCustomRepository(SurveysRepository);
        const survey = surveyRepository.create({ title, description });

        await surveyRepository.save(survey);
        return response.status(201).json(survey);
    }

    // GET
    async getSurveyController (request: Request, response: Response) {
        const surveyRepositoryVariable = getCustomRepository(SurveysRepository);
        const all = await surveyRepositoryVariable.find();

        return response.json(all);
    }
    
    // GET ID ESPECÍFICO
    async getSurveyControllerId (request: Request, response: Response) {
        const { id } = request.params;
        const surveyId = await getCustomRepository(SurveysRepository).findOne(id);

        return response.json(surveyId);
    }

    // PUT
    async putSurveyController (request: Request, response: Response) {
    const { id } = request.params;
    const task = await getCustomRepository(SurveysRepository).update(id, request.body);
 
        if(task.affected === 1) {
           const tasksUpdate = await getCustomRepository(SurveysRepository).findOne(id);
           return response.json(tasksUpdate);
        } 

        return response.status(404).json({ message: 'Tasks not found'});
    }

    // PATCH
    async patchSurveyController (request: Request, response: Response) {
    const { id } = request.params;
    const surveyPatch = await getCustomRepository(SurveysRepository).update(id, { });

        if(surveyPatch.affected === 1) {
           await getCustomRepository(SurveysRepository).findOne(id, { });
           return response.json({ message: ' Task Finished'});
        }

        return response.status(404).json({ message: 'NOT FOUND'});
    }

    // DELETE
    async deleteSurveyController (request: Request, response: Response) {
       const { id } = request.params;
       const removeSurvey = await getCustomRepository(SurveysRepository).delete(id);

        if(removeSurvey.affected === 1) {
          await getCustomRepository(SurveysRepository).findOne(id);
          return response.json({ message: ' Task removed'});
        }
 
       return response.status(404).json({ message: 'NOT FOUND'});
    }
}