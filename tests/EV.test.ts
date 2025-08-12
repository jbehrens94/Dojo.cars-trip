import { EV } from '../src/Domain/EV';
import { AvailableVehicles } from '../src/Domain/Primitives/AvailableVehicles';

describe('EV', () => {
    it('should be instantiated with zero mileage', () => {
        const car = new EV(AvailableVehicles.Tesla.Model3);
        const mileage = car.mileage();

        expect(mileage).toBe(0);
        expect(car.name()).toContain('Tesla');
        expect(car.name()).toContain('Model 3');
        expect(car.data()).toContain('Total Mileage: 0 Km');
        expect(car.data()).toContain('Charge Available: 0 kWh');
    });

    it('should be charged', () => {
        const car = new EV(AvailableVehicles.Tesla.Model3);
        car.charge(60);
        const availableCharge = car.chargeAmount();
        expect(availableCharge).toBe(60);
    });

    it('should be charged not more than battery capacity', () => {
        const car = new EV(AvailableVehicles.Tesla.Model3);
        car.charge(100);
        const availableCharge = car.chargeAmount();
        expect(availableCharge).toBe(75);
    });

    it('should be able to travel using the charge', () => {
        const car = new EV(AvailableVehicles.Tesla.Model3);
        car.charge(50);
        car.travel(100);
        const availableCharge = car.chargeAmount();
        expect(availableCharge).toBe(31.5);
    });

    it('should add up mileage after every trip', () => {
        const car = new EV(AvailableVehicles.Tesla.Model3);
        car.charge(50);
        car.travel(100);
        expect(car.mileage()).toBe(100);
    });

    it('should be able to travel using the fuel', () => {
        const car = new EV(AvailableVehicles.Tesla.Model3);
        car.charge(10);
        car.travel(25);
        const availableCharge = car.chargeAmount();
        expect(availableCharge).toBe(5.375);
        expect(car.data()).toContain('Charge Available: 5.375 kWh');
    });
});
