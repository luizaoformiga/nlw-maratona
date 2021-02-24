import { getRepository } from 'typeorm';
import { Tasks } from '../entity/tasks';
import { Request, Response } from 'express';


// GET
export const getMetods = async (request: Request, response: Response) => {

}

// POST
export const createMetods = async (request: Request, response: Response) => {
    const { name, email } = request.body;
    
    const useRepository = getRepository(Tasks);
    
    const userAlreadyExists = await useRepository.findOne({ email });

    if (userAlreadyExists) {
        return response.status(400).json({ message:"User already exists" });
    }

    const user = useRepository.create({ name, email });

    await useRepository.save(user);
    return response.send();
}

// PUT


// PATCH

// DELETE