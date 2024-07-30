import { prisma } from '../lib/db'

export async function Streamer() {
    const stream = await prisma.flightStatus.stream({ name: 'flight-status-stream' })

    for await (const event of stream) {
        console.log('New event:', event)
    }
}
