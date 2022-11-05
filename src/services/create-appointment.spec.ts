import {describe, expect, it} from 'vitest';
import { Appointment } from '../entities/appointment';
import { getFutureDate } from '../tests/utils/get-future-date';
import { CreateAppointment } from './create-appointment';

describe('Create Appointments', () => {
    it('should be able to create an appointment', () => {
        const createAppp = new CreateAppointment();

        const startsAT = getFutureDate('2022-08-01')
        const endsAt = getFutureDate('2022-08-02')

        
        
        expect(createAppp.execute({
            consumer: 'Matheus',
            startsAT,
            endsAt,
        })).resolves.toBeInstanceOf(Appointment)
    })
})