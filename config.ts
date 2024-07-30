import { Kafka } from 'kafkajs'

export class kafkaConfig {
    kafka: Kafka
    producer: any
    consumer: any
    constructor() {
        this.kafka = new Kafka({
            clientId: 'hth24-client',
            brokers: ['localhost:9092'],
        })
        this.producer = this.kafka.producer()
        this.consumer = this.kafka.consumer({
            groupId: 'hth24-group',
        })
    }

    async produce(topic: string, message: { value: string }) {
        try {
            await this.producer.connect()
            await this.producer.send({
                topic,
                messages: message,
            })
        } catch (error) {
            console.log(error)
        } finally {
            await this.producer.disconnect()
        }
    }

    async consume(topic: string, callback: (value: string) => {}) {
        try {
            await this.consumer.connect()
            await this.consumer.subscribe({ topic: topic, fromBeginning: true })
            await this.consumer.run({
                eachMessage: async ({ topic, partition, message }) => {
                    const value = message.value.toString()
                    callback(value)
                },
            })
        } catch (error) {
            console.log(error)
        } finally {
            await this.consumer.disconnect()
        }
    }
}
