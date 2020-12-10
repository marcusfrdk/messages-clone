import { useTheme } from '@react-navigation/native';
import React, { useLayoutEffect, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import GoBackTotalMessages from '../components/buttons/GoBackTotalMessages';
import HeaderImage from '../components/image/HeaderImage';
import Contact from '../types/Contact';
import SendingMessage from '../components/list/messages/SendingMessage';
import ReceivingMessage from '../components/list/messages/ReceivingMessage';

const MessageScreen = ({ navigation, route }:Props) => {
    const contact = route.params.contact;
    const totalMessages = route.params.totalMessages;
    const messages = contact.messages
    const scrollViewRef = useRef();
    const theme = useTheme();
    
    useLayoutEffect(() => {
        navigation.setOptions({
            title: contact.name,
            headerLeft: () => <GoBackTotalMessages total={totalMessages} navigation={navigation} />,
            headerTitle: () => <HeaderImage id={contact.id} gender={contact.gender} name={contact.name} image={contact.image}/>
        });
    }, []);

    return (
        <ScrollView
            ref={scrollViewRef}
            onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
            style={{ backgroundColor: theme.colors.card, paddingTop: 16 }}
        >
            {
                messages.slice(0).reverse().map((data:any) => {
                    if(data.sender == 0){
                        return (
                            <SendingMessage message={data.message} time={data.time}/>
                        )
                    } else {
                        return (
                            <ReceivingMessage message={data.message} time={data.time}/>
                        )
                    }
                })
            }
        </ScrollView>
    )
}

interface Props {
    navigation: any,
    route: any,
    contact: Contact
}

export default MessageScreen;