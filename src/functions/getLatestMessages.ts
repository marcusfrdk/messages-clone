import contacts from '../data/contacts.json';
import Message from '../types/Message';

export default ():Message[] => {
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

    return messages;
}