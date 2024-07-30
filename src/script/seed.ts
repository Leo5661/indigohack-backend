import { prisma } from '../lib/db'
import { FlightData, FlightStatusData } from './seedData'

async function SeedFlightModel() {
    try {
        await prisma.flight.createMany({
            data: FlightData,
            skipDuplicates: true,
        })

        await prisma.flightStatus.createMany({
            data: FlightStatusData,
        })

        console.log('Database seeded successfully ✅')
        console.log('You can start Dev server now 👌')
    } catch (error) {
        console.error('Error seeding database: ⚠️', error)
    } finally {
        await prisma.$disconnect()
    }
}

SeedFlightModel()
