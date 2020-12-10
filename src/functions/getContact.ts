import contacts from '../data/contacts.json';
import Contact from '../types/Contact';

export default (id:number):Contact => { 
    let result:Contact;

    for (let i = 0; i < contacts.length; i++){
        if(contacts[i].id === id){
            result = contacts[i];
            break
        }
    }

    return result;
}