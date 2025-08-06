import { Car } from './Car';
import { CarModel } from './CarModel';
import { ITank } from './Interfaces/ITank';

export class FuelCar extends Car implements ITank {
    private fuelAvailable: number = 0;

    constructor(public modelInfo: CarModel) {
        super(modelInfo);
    }

    public tank(liters: number): void {
        this.fuelAvailable += liters;
        if (this.fuelAvailable > this.capacity) {
            this.fuelAvailable = this.capacity;
        }
    }

    public travel(distance: number) {
        const tripFuelConsumption = this.calculateTripFuelConsumption(distance);
        this.fuelAvailable -= tripFuelConsumption;

        super.travel(distance);
    }

    public mileage(): number {
        return this.totalMileage;
    }

    public fuelAmount(): number {
        return this.fuelAvailable;
    }

    public data(): string {
        return `${this.name()}\nTotal Mileage: ${this.mileage()} Km\nFuel Available: ${this.fuelAmount()} l`;
    }

    private calculateTripFuelConsumption(distance: number) {
        // consumption unit is l/100 km
        return (this.consumption * distance) / 100;
    }
}
