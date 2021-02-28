import { Router } from 'express';

import SurveyController from '../controller/surveysControllers';
import UserController from '../controller/userController';
import SendMailController from '../controller/SendMailController';
import AnswersController from '../controller/AnswersController';
import NpsController from '../controller/NpsController';

import userValidator from '../validators/userValidator';
import surveyValidator from '../validators/surveyValidator';
import sendEmailValidator from '../validators/sendEmailValidator';
import npsValidator from '../validators/npsValidator';
import answerValidator from '../validators/answerValidator';

const route = Router();

// users 
const userControllerVariable = new UserController();
route.post("/users", userControllerVariable.postUserController);
route.get("/users", userValidator, userControllerVariable.getUserController);
route.get("/users/:id", userValidator, userControllerVariable.getUserControllerEspecific);
route.put("/users", userControllerVariable.putUserController);
route.patch("/users/:id", userValidator, userControllerVariable.putUserController);
route.delete("/users/:id", userControllerVariable.deleteUserController);


// surveys
const userSurveyControllerVariable = new SurveyController();
route.post("/surveys", userSurveyControllerVariable.postSurveyController);
route.get("/surveys", surveyValidator, userSurveyControllerVariable.getSurveyController);
route.get("/surveys/:id", surveyValidator, userSurveyControllerVariable.getSurveyControllerEspecific);
route.put("/surveys", userSurveyControllerVariable.putSurveyController);
route.patch("/surveys/:id", surveyValidator, userSurveyControllerVariable.patchSurveyController);
route.delete("/surveys/:id", userSurveyControllerVariable.deleteSurveyController);


// emailController
const sendEmailController = new SendMailController();
route.post('/send_mail', sendEmailValidator, sendEmailController.postSendEmialController);


// answersController
const answersControllerVariable = new AnswersController();
route.get('/answers', answersControllerVariable.index);
route.get('/answers/:value', answerValidator, answersControllerVariable.store);


// npsController
const npscontrollerrvariable = new NpsController();
route.get('/nps/:survey_id', npsValidator, npscontrollerrvariable.postNpsController);

export default route;

