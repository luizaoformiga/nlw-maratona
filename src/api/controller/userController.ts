import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../repositories/userRepositories';


export class UserController {    
    async postUserController (request: Request, response: Response) {
        const { name, email } = request.body;      
        const userRepository = getCustomRepository(UserRepository);
        const userAlreadyExists = await userRepository.findOne({ email });
    
        if (userAlreadyExists) { 
            return response.status(400).json({ message:"User already exists" });
        }
    
        const user = userRepository.create({ name, email });
    
        await userRepository.save(user);
        return response.status(201).json();
    }

    async getUserController (request: Request, response: Response) {
        const userRepositoryVariable = getCustomRepository(UserRepository);
        const all = await userRepositoryVariable.find();
        
        return response.status(200).json(all);
    }

    async getUserControllerEspecific (request: Request, response: Response) {
        const { name, email } = request.params;
        const userId = await getCustomRepository(UserRepository).find({ name, email });     
        
        if (!userId) {
            return response.status(404).json(userId);
        }

        return response.status(200).json(userId);
    }
    
    async putUserController (request: Request, response: Response) {
        const { name, email } = request.params;
        const putUser = await getCustomRepository(UserRepository).update({ name, email }, request.body);
     
        if(putUser.affected === 1) {
            const putUpdateUser = await getCustomRepository(UserRepository).findOne({ name, email });
            return response.status(200).json(putUpdateUser);
        } 
    
        return response.status(404).json({ message: 'Tasks not found'});
    }
    
    async patchUserController (request: Request, response: Response) {
        const { name, email } = request.params;
        const patchUser = await getCustomRepository(UserRepository).update({ name, email }, request.body);

        if(patchUser.affected === 1) { 
           await getCustomRepository(UserRepository).findOne({ name, email });
           return response.status(200).json({ message: 'Finished'});
        }

        return response.status(404).json({ message: 'NOT FOUND' });
    }
    
    async deleteUserController (request: Request, response: Response) {
        const { name, email } = request.params;
        const removeUser = await getCustomRepository(UserRepository).delete({ name, email });
 
        if(removeUser.affected === 1) {
           await getCustomRepository(UserRepository).findOne({ name, email });
           return response.status(200).json({ message: ' User removed' });
        }
  
        return response.status(404).json({ message: 'NOT FOUND' });
    }
}