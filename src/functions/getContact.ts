import Contact from '../types/Contact';

export default (id:number, contacts:any):Contact => { 
    let result:Contact;

    for (let i = 0; i < contacts.length; i++){
        if(contacts[i].id === id){
            result = contacts[i];
            break
        }
    }

    return result;
}