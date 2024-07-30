type Flight = {
    id: number
    modal: string
    airline: string
    flightId: string
}

export const FlightData: Flight[] = [
    {
        id: 1,
        modal: 'Boeing 737',
        airline: 'Indigo',
        flightId: '6E123',
    },
    {
        id: 2,
        modal: 'Airbus A320',
        airline: 'Indigo',
        flightId: '6E456',
    },
    {
        id: 3,
        modal: 'Boeing 737',
        airline: 'Indigo',
        flightId: '6E124',
    },
    {
        id: 4,
        modal: 'Airbus A320',
        airline: 'Indigo',
        flightId: '6E466',
    },
    {
        id: 5,
        modal: 'Boeing 737',
        airline: 'Indigo',
        flightId: '6E323',
    },
    {
        id: 6,
        modal: 'Airbus A320',
        airline: 'Indigo',
        flightId: '6E286',
    },
    {
        id: 7,
        modal: 'Boeing 737',
        airline: 'Indigo',
        flightId: '6E130',
    },
    {
        id: 8,
        modal: 'Airbus A320',
        airline: 'Indigo',
        flightId: '6E696',
    },
    {
        id: 9,
        modal: 'Boeing 737',
        airline: 'Indigo',
        flightId: '6E008',
    },
    {
        id: 10,
        modal: 'Airbus A320',
        airline: 'Indigo',
        flightId: '6E478',
    },
]

type FlightStatus = {
    arrivalPlace: string
    departurePlace: string
    arrivalGate: string
    departureGate: string
    status: string
    arrivalTime: Date
    departureTime: Date
    scheduledDepartureTime: Date
    scheduledArrivalTime: Date
    fId: number
}

export const FlightStatusData: FlightStatus[] = [
    {
        arrivalPlace: 'New York',
        departurePlace: 'Los Angeles',
        arrivalGate: 'A1',
        departureGate: 'B3',
        status: 'On time',
        arrivalTime: new Date('2024-07-30T14:30:00Z'),
        departureTime: new Date('2024-07-30T10:00:00Z'),
        scheduledDepartureTime: new Date('2024-07-30T09:45:00Z'),
        scheduledArrivalTime: new Date('2024-07-30T13:45:00Z'),
        fId: 1,
    },
    {
        arrivalPlace: 'Chicago',
        departurePlace: 'Miami',
        arrivalGate: 'C2',
        departureGate: 'D5',
        status: 'Delayed',
        arrivalTime: new Date('2024-07-30T18:15:00Z'),
        departureTime: new Date('2024-07-30T12:30:00Z'),
        scheduledDepartureTime: new Date('2024-07-30T12:00:00Z'),
        scheduledArrivalTime: new Date('2024-07-30T17:45:00Z'),
        fId: 2,
    },
    {
        arrivalPlace: 'Mumbai',
        departurePlace: 'Delhi',
        arrivalGate: 'A1',
        departureGate: 'B3',
        status: 'On time',
        arrivalTime: new Date('2024-07-30T14:30:00Z'),
        departureTime: new Date('2024-07-30T10:00:00Z'),
        scheduledDepartureTime: new Date('2024-07-30T09:45:00Z'),
        scheduledArrivalTime: new Date('2024-07-30T13:45:00Z'),
        fId: 3,
    },
    {
        arrivalPlace: 'Bangalore',
        departurePlace: 'Chennai',
        arrivalGate: 'C2',
        departureGate: 'D5',
        status: 'Delayed',
        arrivalTime: new Date('2024-07-30T18:15:00Z'),
        departureTime: new Date('2024-07-30T12:30:00Z'),
        scheduledDepartureTime: new Date('2024-07-30T12:00:00Z'),
        scheduledArrivalTime: new Date('2024-07-30T17:45:00Z'),
        fId: 4,
    },
    {
        arrivalPlace: 'New York',
        departurePlace: 'Los Angeles',
        arrivalGate: 'A1',
        departureGate: 'B3',
        status: 'On time',
        arrivalTime: new Date('2024-07-30T14:30:00Z'),
        departureTime: new Date('2024-07-30T10:00:00Z'),
        scheduledDepartureTime: new Date('2024-07-30T09:45:00Z'),
        scheduledArrivalTime: new Date('2024-07-30T13:45:00Z'),
        fId: 5,
    },
    {
        arrivalPlace: 'Chicago',
        departurePlace: 'Miami',
        arrivalGate: 'C2',
        departureGate: 'D5',
        status: 'Delayed',
        arrivalTime: new Date('2024-07-30T18:15:00Z'),
        departureTime: new Date('2024-07-30T12:30:00Z'),
        scheduledDepartureTime: new Date('2024-07-30T12:00:00Z'),
        scheduledArrivalTime: new Date('2024-07-30T17:45:00Z'),
        fId: 6,
    },
]
