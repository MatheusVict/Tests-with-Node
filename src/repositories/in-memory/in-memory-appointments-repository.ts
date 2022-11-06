import {areIntervalsOverlapping} from 'date-fns'
import { Appointment } from "../../entities/appointment";
import { AppointmentsRepository } from "../appointment-repository";

export class InMemoryAppointments implements AppointmentsRepository { // Quando vc implementa oa chamar os metodos da interface el já completa

    private items: Appointment[] = [];

    async create(appointment: Appointment): Promise<void> {
        this.items.push(appointment)
    }

    async findOverlapAppointment(startsAt: Date, endsAt: Date): Promise<Appointment | null> {
        const overLapAppointment = this.items.find(appoit => {
            return areIntervalsOverlapping( // Compara as notas
            {
                // Primeiro intervalo
                // Q eu tô passando
                start: startsAt,
                end: endsAt,
            },
            {
                // Horario existente no array
                start: appoit.startsAT,
                end: appoit.endsAT
            },
            {
                inclusive: true
            }
            )
        })

        if (!overLapAppointment) {
            return null;
        }

        return overLapAppointment;
    }
}