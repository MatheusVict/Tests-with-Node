import { Appointment } from "../entities/appointment";
import { AppointmentsRepository } from "../repositories/appointment-repository";

interface CreateAppointmentRequest {
    consumer: string;
    startsAT: Date;
    endsAt: Date;
}

type CreateAppointmentResponse = Appointment; // o retorno é um agendamento 

export class CreateAppointment { // Todo service tem uma entrada e uma saida
    constructor(
        private appointRepository: AppointmentsRepository
    ) {}

    async execute({
        consumer,
        endsAt,
        startsAT
    }: CreateAppointmentRequest): Promise<CreateAppointmentResponse> { // Recebe uma requisição e retorna a promessa de uma resposta

        const overlapingApp = await this.appointRepository.findOverlapAppointment(
            startsAT,
            endsAt
        );

        if(overlapingApp) {
            throw new Error('Appointment existente')
        }

        const appointement = new Appointment({
            consumer,
            endsAt, 
            startsAT
        });

        await this.appointRepository.create(appointement)

        return appointement;
    }
}