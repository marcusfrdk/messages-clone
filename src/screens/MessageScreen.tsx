import { useTheme } from '@react-navigation/native';
import React, { useLayoutEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Linking, Alert } from 'react-native';
import GoBackTotalMessages from '../components/buttons/GoBackTotalMessages';
import HeaderImage from '../components/image/HeaderImage';
import Contact from '../types/Contact';
import SendingMessage from '../components/list/messages/SendingMessage';
import ReceivingMessage from '../components/list/messages/ReceivingMessage';
import Modal from '../components/modal/Modal';
import ProfileImage from '../components/image/ProfileImage';
import Icon from 'react-native-vector-icons/FontAwesome';
import ActionButton from '../components/buttons/ActionButton';

const MessageScreen = ({ navigation, route }:Props) => {
    const contact = route.params.contact;
    const totalMessages = route.params.totalMessages;
    const messages = contact.messages
    const scrollViewRef = useRef();
    const [ modalOpen, setModalOpen ] = useState(false);
    const theme = useTheme();
    
    useLayoutEffect(() => {
        navigation.setOptions({
            title: contact.name,
            headerLeft: () => <GoBackTotalMessages total={totalMessages} navigation={navigation} />,
            headerTitle: () => <HeaderImage
                                    id={contact.id}
                                    gender={contact.gender}
                                    name={contact.name}
                                    image={contact.image}
                                    modalOpen={modalOpen}
                                    setModalOpen={setModalOpen}
                                />
        });
    }, []);

    return (
        <ScrollView
            ref={scrollViewRef}
            onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
            style={[styles.container, { backgroundColor: theme.colors.card }]}
        >
            {
                messages.slice(0).reverse().map((data:any, index:number) => {
                    if(data.sender == 0){
                        return (
                            <SendingMessage key={index} message={data.message} time={data.time}/>
                        )
                    } else {
                        return (
                            <ReceivingMessage key={index} message={data.message} time={data.time}/>
                        )
                    }
                })
            }

            <Modal title="" visibility={modalOpen} setVisibility={setModalOpen}>

                <ProfileImage id={contact.id} image={contact.image} gender={contact.gender} name={contact.name}/>

                <Text numberOfLines={2} style={{ fontSize: 32, maxWidth: "75%", marginTop: 8 }}>{contact.name}</Text>

                <View style={{ flexDirection: "row", marginTop: 16 }}>
                    <ActionButton iconName="phone" disabled={!contact.phone ? true : false} onPress={() => Alert.alert(`Could not call ${contact.phone}.`)}/>
                    <ActionButton iconName="video-camera" disabled={true} onPress={null}/>
                    <ActionButton iconName="envelope" disabled={!contact.email ? true : false} onPress={() => Alert.alert(`Could not send an email to ${contact.email}.`)}/>
                    <ActionButton iconName="globe" disabled={false} onPress={() => Linking.canOpenURL("https://marcusfredriksson.com").then(supported => supported ? Linking.openURL("https://marcusfredriksson.com") : null)}/>
                </View>
            </Modal>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 16,
        paddingLeft: 8,
        paddingRight: 8
    }
});

interface Props {
    navigation: any,
    route: any,
    contact: Contact
}

export default MessageScreen;