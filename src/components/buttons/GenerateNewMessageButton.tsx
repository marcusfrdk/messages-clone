import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import axios from 'axios';

// Type
import Contact from '../../types/Contact';

// Function
import generateNewID from '../../functions/generateNewID';

const GenerateNewMessageButton = ({ setFirstModalActive, setMessages, messages }:Props) => {
    const generate = () => {
        const uri = "https://randomuser.me/api"
        let newUser:Contact = {};
        
        // Fetch data for new user
        axios
        .get(uri)
        .then(res => {
            newUser.id = generateNewID();
        })
        .catch(err => console.log(err));


        setFirstModalActive(false);
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

export default GenerateNewMessageButton;