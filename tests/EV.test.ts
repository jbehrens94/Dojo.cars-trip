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
});
