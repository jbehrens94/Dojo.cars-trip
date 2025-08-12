import { Router } from 'express';

import { VehiclesController } from './Controllers/vehicles.controller';
import { VehicleRepository } from './Repositories/VehicleRepository';

export const router = Router();

const vehicleRepository = new VehicleRepository();
const vehicleController = new VehiclesController(vehicleRepository);

router.get('/', vehicleController.allVehicles);
