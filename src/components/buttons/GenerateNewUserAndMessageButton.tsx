import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import axios from 'axios';
import { useGlobal, setGlobal } from 'reactn';

// Type
import Contact from '../../types/Contact';
import Message from '../../types/Message';

// Function
import generateNewID from '../../functions/generateNewID';
import generateRandomSentence from '../../functions/generateRandomSentance';

const GenerateNewUserAndMessageButton = ({ setFirstModalActive, setMessages, messages }:Props) => {
    const [ contacts ] = useGlobal<any>('contacts');

    const generateNewMessage = (id:number, name:string):Message => {
        let message:Message = {}

        message.id = id;
        message.message = generateRandomSentence();
        message.name = name
        message.sender = Math.random() > .5 ? id : 0;
        message.receiver = message.sender == id ? 0 : id;
        message.time = +new Date();
        message.read = message.sender == 0 ? true : false
        
        return message;
    }
    
    const generate = () => {
        const uri = "https://randomuser.me/api"
        let newUser:Contact = {};
        setGlobal({
            newUserIsCreating: true
        })
        
        // Fetch data for new user
        axios
        .get(uri)
        .then(res => {
            let data = res.data.results[0]

            newUser.id = generateNewID(contacts);
            newUser.name = `${data.name.first} ${data.name.last}`;
            newUser.phone = data.phone;
            newUser.email = data.email;
            newUser.gender = data.gender;
            newUser.image = newUser.id < 100 ? Math.random() > .5 ? true : false : false;

            let newMessage = generateNewMessage(newUser.id, newUser.name);
            newUser.messages = [newMessage]; 

            let newContacts = [...contacts, newUser];
            setGlobal({ contacts: newContacts });

            // Append to messages

            let newList = [...messages, newMessage];
            newList.sort((a, b) => {
                return (a.time > b.time) ? -1 : 1;
            })
            
            setMessages(newList)
        })
        .catch(err => console.log(err));


        setFirstModalActive(false);

        setGlobal({
            newUserIsCreating: false
        })
    }

    return (
        <View style={{ padding: 16 }}>
            <Button title="Generate new message" onPress={generate}/>
        </View>
    )
}

interface Props {
    setFirstModalActive: any,
    messages: any,
    setMessages: any
}

export default GenerateNewUserAndMessageButton;