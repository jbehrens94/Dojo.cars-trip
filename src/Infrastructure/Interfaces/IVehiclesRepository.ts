import { EV } from '../../Domain/EV';
import { FuelCar } from '../../Domain/FuelCar';

export interface IVehicleRepository {
    allVehicles(): (FuelCar | EV)[];
}
