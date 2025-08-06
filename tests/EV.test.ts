import { AvailableVehicles } from '../src/Domain/Primitives/AvailableVehicles';
import { EV } from '../src/Domain/EV';

describe('EV', () => {
    it('should be instantiated with zero mileage', () => {
        const car = new EV(AvailableVehicles.Tesla.Model3);
        const mileage = car.mileage();

        expect(mileage).toBe(0);
        expect(car.name()).toContain('Tesla');
        expect(car.name()).toContain('Model 3');
        expect(car.data()).toContain('Total Mileage: 0 Km');
    });

    it('should be charged', () => {
        const car = new EV(AvailableVehicles.Tesla.Model3);
        car.charge(150);
        const amountOfFuelAvailable = car.chargeAmount();
        expect(amountOfFuelAvailable).toBe(150);
    });

    it('should be charged not more than battery capacity', () => {
        const car = new EV(AvailableVehicles.Tesla.Model3);
        car.charge(250);
        const amountOfFuelAvailable = car.chargeAmount();
        expect(amountOfFuelAvailable).toBe(200);
    });
});
