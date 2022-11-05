import {setYear, parseISO} from 'date-fns';

// Função que adiciona um ano
export function getFutureDate(date: string): Date {
    return setYear(parseISO(date), new Date().getFullYear() + 1)
}