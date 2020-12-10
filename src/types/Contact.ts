import Message from './Message';

export default interface Contact {
    id: number,
    name: string,
    phone: string,
    email: string,
    gender?: string,
    image: boolean,
    messages: Message[]
}