import { Appointment } from "../entities/appointment";

export interface AppointmentsRepository {
    create(appointment: Appointment): Promise<void>;
    findOverlapAppointment(startsAt: Date, endsAt: Date): Promise<Appointment | null> // Caso tenha encontrado q conflite ele devolve ele

}