import { Request, Response } from 'express';

import { getRepository } from 'typeorm';
import Orphanage from '../models/Orphanage';

export default {
    async create(req: Request, res: Response) {
        const { 
            name,
            latitude,
            longitude,
            about, 
            instructions,
            opening_hours,
            open_on_weekends
         } = req.body;
    
        const orphanagesRepo = getRepository(Orphanage); 
    
        const orphanage = orphanagesRepo.create({
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends
        });
    
        await orphanagesRepo.save(orphanage);
    
        return res.status(201).json(orphanage); 
    },

    async index(req: Request, res: Response){
        const orphanagesRepo = getRepository(Orphanage); 

        const orphanages = await orphanagesRepo.find();

        return res.json(orphanages);
    },

    async show(req: Request, res: Response) {
        const { id } = req.params;

        const orphanagesRepo = getRepository(Orphanage);

        const orphanage = await orphanagesRepo.findOneOrFail(id);

        return res.json(orphanage);
    }
}