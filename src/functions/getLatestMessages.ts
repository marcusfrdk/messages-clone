import Message from '../types/Message';

export default (contacts:any):Message[] => {
    let messages:Message[] = [];
    
    for(let i = 0; i < contacts.length; i++){
        let lastMessage = contacts[i].messages[0]

        if(lastMessage){
            messages.push({
                id: contacts[i].id,
                name: contacts[i].name,
                phone: contacts[i].phone ? contacts[i].phone : "",
                sender: lastMessage.sender,
                receiver: lastMessage.receiver,
                time: lastMessage.time,
                read: lastMessage.read,
                message: lastMessage.message
            })
        }
    }

    // Sorting based on age
    messages.sort((a, b) => {
        return (a.time > b.time) ? -1 : 1;
    })

    return messages;
}