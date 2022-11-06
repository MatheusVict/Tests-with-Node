import {describe, expect, it} from 'vitest';
import { Appointment } from '../entities/appointment';
import { InMemoryAppointments } from '../repositories/in-memory/in-memory-appointments-repository';
import { getFutureDate } from '../tests/utils/get-future-date';
import { CreateAppointment } from './create-appointment';

describe('Create Appointments', () => {
    it('should be able to create an appointment', () => {
        const appointementRepository = new InMemoryAppointments()
        const createAppp = new CreateAppointment(appointementRepository);

        const startsAT = getFutureDate('2022-08-01')
        const endsAt = getFutureDate('2022-08-02')

        
        
        expect(createAppp.execute({
            consumer: 'Matheus',
            startsAT,
            endsAt,
        })).resolves.toBeInstanceOf(Appointment)
    })

    it('should not be able to create an appointment with overlaping date', async () => {
        const appointementRepository = new InMemoryAppointments()
        const createAppp = new CreateAppointment(appointementRepository);

        const startsAT = getFutureDate('2022-08-10')
        const endsAt = getFutureDate('2022-08-15')

        await createAppp.execute({
            consumer: 'Matheus',
            startsAT,
            endsAt,
        })
        
        // Começa no meio
        expect(createAppp.execute({
            consumer: 'Matheus',
            startsAT: getFutureDate('2022-08-14'),
            endsAt: getFutureDate('2022-08-18')
        })).rejects.toBeInstanceOf(Error)

        // Inicia antes e termina no meio
        expect(createAppp.execute({
            consumer: 'Matheus',
            startsAT: getFutureDate('2022-08-08'),
            endsAt: getFutureDate('2022-08-12')
        })).rejects.toBeInstanceOf(Error)

        // Inicia antes e termina dps
        expect(createAppp.execute({
            consumer: 'Matheus',
            startsAT: getFutureDate('2022-08-05'),
            endsAt: getFutureDate('2022-08-20')
        })).rejects.toBeInstanceOf(Error)

        // Começa e termina no meio
        expect(createAppp.execute({
            consumer: 'Matheus',
            startsAT: getFutureDate('2022-08-11'),
            endsAt: getFutureDate('2022-08-12')
        })).rejects.toBeInstanceOf(Error)
    })
})