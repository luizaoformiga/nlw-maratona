import { Router } from 'express';
import { UserController } from '../controller/userController'; 
import { SurveyController } from '../controller/surveysControllers';

const route = Router();

const userControllerVariable = new UserController();

route.post("/users",       userControllerVariable.postUserController);
route.get("/users",        userControllerVariable.getUserController);
route.get("/users/:id",    userControllerVariable.getUserControllerEspecific);
route.put("/users",        userControllerVariable.putUserController);
route.patch("/users/:id",  userControllerVariable.putUserController);
route.delete("/users/:id", userControllerVariable.deleteUserController);


const userSurveyControllerVariable = new SurveyController();

route.post("/surveys",       userSurveyControllerVariable.postSurveyController);
route.get("/surveys",        userSurveyControllerVariable.getSurveyController);
route.get("/surveys/:id",    userSurveyControllerVariable.getSurveyControllerEspecific);
route.put("/surveys",        userSurveyControllerVariable.putSurveyController);
route.patch("/surveys/:id",  userSurveyControllerVariable.patchSurveyController);
route.delete("/surveys/:id", userSurveyControllerVariable.deleteSurveyController);

export default route;