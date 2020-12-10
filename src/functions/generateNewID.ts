export default (contacts:any):number => {
    let newID = 1;

    for(let i = 0; i < contacts.length; i++){
        if(newID == contacts[i].id){
            newID = newID + 1
        }
    }
    
    return newID;
}