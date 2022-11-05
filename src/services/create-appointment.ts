import { Appointment } from "../entities/appointment";

interface CreateAppointmentRequest {
    consumer: string;
    startsAT: Date;
    endsAt: Date;
}

type CreateAppointmentResponse = Appointment; // o retorno é um agendamento 

export class CreateAppointment { // Todo service tem uma entrada e uma saida
    async execute({
        consumer,
        endsAt,
        startsAT
    }: CreateAppointmentRequest): Promise<CreateAppointmentResponse> { // Recebe uma requisição e retorna a promessa de uma resposta
        const appointement = new Appointment({
            consumer,
            endsAt, 
            startsAT
        });

        return appointement;
    }
}