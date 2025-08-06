import { Car } from './Car';
import { CarModel } from './CarModel';

export class EV extends Car {
    constructor(public modelInfo: CarModel) {
        super(modelInfo);
    }

    data(): string {
        return `${this.name()}`;
    }

    mileage(): number {
        return 0;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    travel(distance: number): void {}
}
