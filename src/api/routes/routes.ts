import { Router } from 'express';
import { createMetods } from '../controller/userController'; 

const route = Router();


route.post('/', createMetods);

export default route;