import { Car } from './Car';
import { CarModel } from './CarModel';

export class EV extends Car {
    constructor(public modelInfo: CarModel) {
        super(modelInfo);
    }

    data(): string {
        return `${this.name()}\nTotal Mileage: ${this.mileage()} Km`;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    travel(distance: number): void {}
}
