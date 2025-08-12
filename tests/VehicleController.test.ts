import request from 'supertest';

import { server } from '../src';

describe('GET /vehicles', () => {
    afterAll(() => {
        server.close();
    });

    it('should respond with status 200 and valid JSON', async () => {
        const response = await request(server).get('/api/v1/vehicles');

        expect(response.status).toBe(200);
        expect(response.body).toHaveLength(2);

        expect(typeof response.body[0].id).toEqual('string');
        expect(response.body[0].brand).toEqual('Toyota');
        expect(response.body[0].model).toEqual('Camry');
        expect(response.body[0].engineType).toEqual('gasoline');
        expect(response.body[0].totalMileage).toEqual(15000.5);
        expect(response.body[0].fuelConsumption).toEqual(7.5);
        expect(response.body[0].tankCapacity).toEqual(60);
        expect(response.body[0].currentFuelLevel).toEqual(45);

        expect(typeof response.body[1].id).toEqual('string');
        expect(response.body[1].brand).toEqual('Tesla');
        expect(response.body[1].model).toEqual('Model 3');
        expect(response.body[1].engineType).toEqual('electric');
        expect(response.body[1].totalMileage).toEqual(8500);
        expect(response.body[1].energyConsumption).toEqual(18.5);
        expect(response.body[1].batteryCapacity).toEqual(75);
        expect(response.body[1].currentCharge).toEqual(0);
    });
});
