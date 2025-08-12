import { EV } from '../../Domain/EV';
import { FuelCar } from '../../Domain/FuelCar';
import { AvailableVehicles } from '../../Domain/Primitives/AvailableVehicles';
import { IVehicleRepository } from '../Interfaces/IVehiclesRepository';

export class VehicleRepository implements IVehicleRepository {
    private readonly vehicles: (FuelCar | EV)[] = [
        new FuelCar(AvailableVehicles.Toyota.Camry, 15000.5, 45),
        new EV(AvailableVehicles.Tesla.Model3, 8500, 0),
    ];

    allVehicles(): (FuelCar | EV)[] {
        return this.vehicles;
    }
}
