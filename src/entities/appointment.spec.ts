import {expect, test} from 'vitest'
import { getFutureDate } from '../tests/utils/get-future-date'
import { Appointment } from './appointment'

test('Create appointement', () => {
    const startsAT = getFutureDate('2022-08-01')
    const endsAt = getFutureDate('2022-08-02')

    const appointement = new Appointment({
        consumer: 'Matheus',
        endsAt,
        startsAT
    });

    expect(appointement).toBeInstanceOf(Appointment);
    expect(appointement.comsumer).toEqual('Matheus');
})

test('Cannot create an appointment with end date before start date', () => {
    const startsAT = getFutureDate('2022-08-01')
    const endsAt = getFutureDate('2022-07-31')

    expect(() => {
        return  new Appointment({
            consumer: 'Matheus',
            startsAT,
            endsAt
        });
    }).toThrow();
})

test('Cannot create an appointment with end date before now', () => {
    const startsAT = new Date();
    const endsAt = new Date();

    startsAT.setDate(startsAT.getDate() - 1)
    endsAt.setDate(endsAt.getDate() - 1)


    expect(() => {
        return  new Appointment({
            consumer: 'Matheus',
            startsAT,
            endsAt
        });
    }).toThrow();
})