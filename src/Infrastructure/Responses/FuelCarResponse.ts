import { UUID } from 'node:crypto';

import { FuelCar } from '../../Domain/FuelCar';
import { Vocabulary } from '../../Domain/Vocabulary';

export class FuelCarResponse {
    private readonly id: UUID;
    private readonly brand: string;
    private readonly model: string;
    private readonly engineType: string;
    private readonly totalMileage: number;
    private readonly fuelConsumption: number;
    private readonly tankCapacity: number;
    private readonly currentFuelLevel: number;

    constructor(fuelCar: FuelCar) {
        this.id = fuelCar._id;
        this.brand = fuelCar.brand;
        this.model = fuelCar.model;
        this.engineType = Vocabulary.GASOLINE;
        this.totalMileage = fuelCar.mileage();
        this.fuelConsumption = fuelCar.consumption;
        this.tankCapacity = fuelCar.capacity;
        this.currentFuelLevel = fuelCar.fuelAmount();
    }
}
