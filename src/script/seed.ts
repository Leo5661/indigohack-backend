import { prisma } from '../lib/db'
import { FlightData } from './seedData'

async function SeedFlightModel() {
    try {
        await prisma.flight.createMany({
            data: FlightData,
        })
        console.log('Database seeded successfully!')
    } catch (error) {
        console.error('Error seeding database:', error)
    } finally {
        await prisma.$disconnect()
    }
}

SeedFlightModel()
