import { UUID } from 'node:crypto';

export interface IDrive {
    id(): UUID;
    name(): string;
    data(): string;
    travel(distance: number): void;
    mileage(): number;
}
