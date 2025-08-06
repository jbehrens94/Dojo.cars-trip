import { UUID } from 'node:crypto';
import { ITank } from './ITank';

export interface ICarEntity extends ITank {
    id(): UUID;
    name(): string;
    data(): string;
    travel(distance: number): void;
    mileage(): number;
}
