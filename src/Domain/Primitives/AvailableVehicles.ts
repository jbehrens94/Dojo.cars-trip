export const AvailableVehicles = {
    Toyota: {
        Corolla: { brand: 'Toyota', model: 'Corolla', consumption: 5, capacity: 30 },
        Camry: { brand: 'Toyota', model: 'Camry', consumption: 7.5, capacity: 60 },
    },
    Ford: {
        Mustang: { brand: 'Ford', model: 'Mustang', consumption: 8, capacity: 50 },
    },
    Tesla: {
        Model3: { brand: 'Tesla', model: 'Model 3', consumption: 18.5, capacity: 75 },
    },
} as const;
