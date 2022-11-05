import {describe, expect, it} from 'vitest';
import { Appointment } from '../entities/appointment';
import { CreateAppointment } from './create-appointment';

describe('Create Appointments', () => {
    it('should be able to create an appointment', () => {
        const createAppp = new CreateAppointment();

        const startsAT = new Date();
        const endsAt = new Date();
    
        endsAt.setDate(endsAt.getDate() + 1)

        
        
        expect(createAppp.execute({
            consumer: 'Matheus',
            startsAT,
            endsAt,
        })).resolves.toBeInstanceOf(Appointment)
    })
})