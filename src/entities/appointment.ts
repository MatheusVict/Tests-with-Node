export interface IappoitnrmentProps {
    consumer: string;
    startsAT: Date;
    endsAt: Date;
}

export class Appointment {
   private props: IappoitnrmentProps; // tipando um atributo invés de passar direto para não dar problema nos seters e gets

   get comsumer() {
    return this.props.consumer;
   }

   get startsAT() {
    return this.props.startsAT;
   }
   get endsAT() {
    return this.props.endsAt;
   }

   constructor(props: IappoitnrmentProps) {
    const { startsAT, endsAt } = props;

    if (endsAt <= startsAT) {
        throw new Error('Invalid date')
    }

    this.props = props;
   }
}
