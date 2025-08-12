import { randomUUID, UUID } from 'node:crypto';

import { CarModel } from './CarModel';
import { IDrive } from './Interfaces/IDrive';

export abstract class Car implements IDrive {
    private readonly _id: UUID = randomUUID();
    private readonly brand: string;
    private readonly model: string;

    protected readonly consumption: number;
    protected readonly capacity: number;
    protected totalMileage: number = 0;

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

    public mileage(): number {
        return this.totalMileage;
    }

    public travel(distance: number) {
        this.totalMileage += distance;
    }

    abstract data(): string;
}
