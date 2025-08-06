import { CarModel } from './CarModel';
import { IDrive } from './Interfaces/IDrive';
import { randomUUID, UUID } from 'node:crypto';

export abstract class Car implements IDrive {
    private readonly _id: UUID = randomUUID();
    private readonly brand: string;
    private readonly model: string;
    protected readonly consumption: number; // unit is l/100 km
    protected readonly capacity: number;

    protected constructor(carModel: CarModel) {
        this.brand = carModel.brand;
        this.model = carModel.model;
        this.consumption = carModel.consumption;
        this.capacity = carModel.capacity;
    }

    public id(): UUID {
        return this._id;
    }

    public name(): string {
        return `${this.brand} ${this.model} ${this.id()}`;
    }

    abstract data(): string;
    abstract mileage(): number;
    abstract travel(distance: number): void;
}
