import { Router } from 'express';
import { UserController } from '../controller/userController'; 
import { SurveyController } from '../controller/surveysControllers';

const route = Router();

// ROUTES OF USERCONTROLLER
const userControllerVariable = new UserController();

route.post("/users", userControllerVariable.postUserController);
route.get("/users", userControllerVariable.getUserController);
route.put("/users", userControllerVariable.putUserController);
route.patch("/users", userControllerVariable.putUserController);
route.delete("/users", userControllerVariable.deleteUserController);


// ROUTES OF SURVEYSCONTROLLER
const userSurveyControllerVariable = new SurveyController();

route.post("/surveys", userSurveyControllerVariable.postSurveyController);
route.get("/surveys", userSurveyControllerVariable.getSurveyController);
route.get("/surveys/:id", userSurveyControllerVariable.getSurveyControllerId);
route.put("/surveys", userSurveyControllerVariable.putSurveyController);
route.patch("/surveys/:id", userSurveyControllerVariable.patchSurveyController);
route.delete("/surveys/:id", userSurveyControllerVariable.deleteSurveyController);

export default route;