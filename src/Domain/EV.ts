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
        return `${this.name()}\nTotal Mileage: ${this.mileage()} Km\nCharge Available: ${this.chargeAmount()} kWh`;
    }

    travel(distance: number): void {
        const consumption = this.chargeConsumption(distance);
        this.currentCharge -= consumption;

        super.travel(distance);
    }

    private chargeConsumption(distance: number) {
        // consumption unit is kWh/100 km.
        return (this.consumption * distance) / 100;
    }
}
