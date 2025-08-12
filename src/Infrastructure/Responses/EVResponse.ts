import { UUID } from 'node:crypto';

import { EV } from '../../Domain/EV';
import { Vocabulary } from '../../Domain/Vocabulary';

export class EVResponse {
    private readonly id: UUID;
    private readonly brand: string;
    private readonly model: string;
    private readonly engineType: string;
    private readonly totalMileage: number;
    private readonly energyConsumption: number;
    private readonly batteryCapacity: number;
    private readonly currentCharge: number;

    constructor(ev: EV) {
        this.id = ev._id;
        this.brand = ev.brand;
        this.model = ev.model;
        this.engineType = Vocabulary.ELECTRIC;
        this.totalMileage = ev.mileage();
        this.energyConsumption = ev.consumption;
        this.batteryCapacity = ev.capacity;
        this.currentCharge = ev.chargeAmount();
    }
}
