import { Car } from './Car';
import { CarModel } from './CarModel';
import { ICharge } from './Interfaces/ICharge';

export class EV extends Car implements ICharge {
    private currentCharge: number = 0;

    constructor(public modelInfo: CarModel) {
        super(modelInfo);
    }

    charge(kWh: number) {
        this.currentCharge += kWh;
        if (this.currentCharge > this.capacity) {
            this.currentCharge = this.capacity;
        }
    }

    chargeAmount(): number {
        return this.currentCharge;
    }

    data(): string {
        return `${this.name()}\nTotal Mileage: ${this.mileage()} Km`;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    travel(distance: number): void {}
}
