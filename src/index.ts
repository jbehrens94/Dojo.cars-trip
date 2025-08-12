import express, { Express, Request, Response } from 'express';

import { router as vehicleRoutes } from './Infrastructure/vehicle.routes';

const app: Express = express();
const port = 3000;

app.use(express.json()); // to parse JSON bodies

// Routes
app.use('/api/v1/vehicles', vehicleRoutes);

// GET /health
app.get('/health', (_req: Request, res: Response) => {
    res.status(200).json({
        status: 'active',
    });
});

// Start server
export const server = app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
