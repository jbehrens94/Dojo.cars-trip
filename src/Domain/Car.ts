import { randomUUID, UUID } from 'node:crypto';
import { CarModel } from './CarModel';
import { ICarEntity } from './ICarEntity';

export class Car implements ICarEntity {
    private readonly _id: UUID = randomUUID();
    private readonly brand: string;
    private readonly model: string;
    private readonly consumption: number; // unit is l/100 km
    private readonly capacity: number;
    private totalMileage: number = 0;
    private fuelAvailable: number;

    constructor(public modelInfo: CarModel) {
        this.brand = modelInfo.brand;
        this.model = modelInfo.model;
        this.consumption = modelInfo.consumption;
        this.capacity = modelInfo.capacity;
        this.fuelAvailable = 0;
    }

    public refillGasoline(liters: number): void {
        this.fuelAvailable += liters;
        if (this.fuelAvailable > this.capacity) {
            this.fuelAvailable = this.capacity;
        }
    }

    public travel(distance: number) {
        const tripFuelConsumption = this.calculateTripFuelConsumption(distance);
        this.fuelAvailable -= tripFuelConsumption;
        this.totalMileage += distance;
    }

    public id(): UUID {
        return this._id;
    }

    public mileage(): number {
        return this.totalMileage;
    }

    public fuelAmount(): number {
        return this.fuelAvailable;
    }

    public name(): string {
        return `${this.brand} ${this.model} ${this.id()}`;
    }

    public data(): string {
        return `${this.name()}\nTotal Mileage: ${this.mileage()} Km\nFuel Available: ${this.fuelAmount()} l`;
    }

    private calculateTripFuelConsumption(distance: number) {
        //consumption unit is l/100 km
        return (this.consumption * distance) / 100;
    }
}
