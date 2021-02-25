import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../repositories/repositories';


export class UserController {    
    // POST
    async postUserController (request: Request, response: Response) {
        const { name, email } = request.body;      
        const userRepository = getCustomRepository(UserRepository);
        const userAlreadyExists = await userRepository.findOne({ email });
    
        if (userAlreadyExists) { 
            return response.status(400).json({ message:"User already exists" });
        }
    
        const user = userRepository.create({ name, email });
    
        await userRepository.save(user);
        return response.send();
    }

    // GET
    async getUserController (request: Request, response: Response) {
        const userRepositoryVariable = getCustomRepository(UserRepository);
        const all = await userRepositoryVariable.find();
        
        return response.json(all);
    }
    
    // PUT
    async putUserController (request: Request, response: Response) {
        const { id } = request.params;
        const putUser = await getCustomRepository(UserRepository).update(id, request.body);
     
        if(putUser.affected === 1) {
            const putUpdateUser = await getCustomRepository(UserRepository).findOne(id);
            return response.json(putUpdateUser);
        } 
    
        return response.status(404).json({ message: 'Tasks not found'});
    }
    
    // PATCH
    async patchUserController (request: Request, response: Response) {
        const { id } = request.params;
        const patchUser = await getCustomRepository(UserRepository).update(id, { });

        if(patchUser.affected === 1) { 
           await getCustomRepository(UserRepository).findOne(id, { });
           return response.json({ message: 'Finished'});
        }

        return response.status(404).json({ message: 'NOT FOUND'});
    }
    
    // DELETE
    async deleteUserController (request: Request, response: Response) {
        const { id } = request.params;
        const removeUser = await getCustomRepository(UserRepository).delete(id);
 
        if(removeUser.affected === 1) {
           await getCustomRepository(UserRepository).findOne(id);
           return response.json({ message: ' Task removed'});
        }
  
        return response.status(404).json({ message: 'NOT FOUND'});
    }
}