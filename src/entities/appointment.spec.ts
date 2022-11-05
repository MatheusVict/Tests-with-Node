import {expect, test} from 'vitest'
import { Appointment } from './appointment'

test('Create appointement', () => {
    const startsAT = new Date();
    const endsAt = new Date();

    endsAt.setDate(endsAt.getDate() + 1)

    const appointement = new Appointment({
        consumer: 'Matheus',
        endsAt,
        startsAT
    });

    expect(appointement).toBeInstanceOf(Appointment);
    expect(appointement.comsumer).toEqual('Matheus');
})

test('Cannot create an appointment with end date before start date', () => {
    const startsAT = new Date();
    const endsAt = new Date();

    endsAt.setDate(endsAt.getDate() - 1)

    expect(() => {
        return  new Appointment({
            consumer: 'Matheus',
            startsAT,
            endsAt
        });
    }).toThrow()
    

})