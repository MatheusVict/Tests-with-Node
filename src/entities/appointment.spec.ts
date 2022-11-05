import {expect, test} from 'vitest'
import { Appointment } from './appointment'

test('Create appointement', () => {
    const appointement = new Appointment({
        consumer: 'Matheus',
        endsAt: new Date(),
        startsAT: new Date()
    });

    expect(appointement).toBeInstanceOf(Appointment);
    expect(appointement.comsumer).toEqual('Matheus');
})