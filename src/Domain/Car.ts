import { randomUUID, UUID } from 'node:crypto';

import { CarModel } from './CarModel';
import { IDrive } from './Interfaces/IDrive';
import { IResponse } from './Interfaces/IResponse';

export abstract class Car<ResponseType> implements IDrive, IResponse<ResponseType> {
    readonly _id: UUID = randomUUID();
    readonly brand: string;
    readonly model: string;

    readonly consumption: number;
    readonly capacity: number;
    protected totalMileage: number = 0;

    protected constructor(carModel: CarModel, totalMileage: number = 0) {
        this.brand = carModel.brand;
        this.model = carModel.model;
        this.consumption = carModel.consumption;
        this.capacity = carModel.capacity;
        this.totalMileage = totalMileage;
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
    abstract asResponse(): ResponseType;
}
