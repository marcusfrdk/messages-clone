import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import GoBackTotalMessages from '../components/buttons/GoBackTotalMessages';
import HeaderImage from '../components/image/HeaderImage';
import Contact from '../types/Contact';

const MessageScreen = ({ navigation, route }:Props) => {
    const contact = route.params.contact
    const totalMessages = route.params.totalMessages
    
    useLayoutEffect(() => {
        navigation.setOptions({
            title: contact.name,
            headerLeft: () => <GoBackTotalMessages total={totalMessages} navigation={navigation} />,
            headerTitle: () => <HeaderImage id={contact.id} gender={contact.gender} name={contact.name} image={contact.image}/>
        });
    }, []);

    return (
        <ScrollView>
            <Text>Message Screen</Text>
        </ScrollView>
    )
}

interface Props {
    navigation: any,
    route: any,
    contact: Contact
}

export default MessageScreen;