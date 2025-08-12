import { Request, Response } from 'express';

import { IVehicleRepository } from '../Interfaces/IVehiclesRepository';

export class VehiclesController {
    private readonly repository: IVehicleRepository;

    constructor(repository: IVehicleRepository) {
        this.repository = repository;
    }

    allVehicles = async (req: Request, res: Response) => {
        return res.json(this.repository.allVehicles().map((vehicle) => vehicle.asResponse()));
    };
}
