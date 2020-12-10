export default interface Message {
    id: number,
    name: string,
    phone?: string,
    message: string,
    sender: number,
    receiver: number,
    time: number,
    read: boolean
}