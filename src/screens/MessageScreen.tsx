import { useTheme } from '@react-navigation/native';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Linking, Alert, Dimensions, TextInput, Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, FlatList, Image } from 'react-native';
import GoBackTotalMessages from '../components/buttons/GoBackTotalMessages';
import HeaderImage from '../components/image/HeaderImage';
import Contact from '../types/Contact';
import SendingMessage from '../components/list/messages/SendingMessage';
import ReceivingMessage from '../components/list/messages/ReceivingMessage';
import Modal from '../components/modal/Modal';
import ProfileImage from '../components/image/ProfileImage';
import Icon from 'react-native-vector-icons/FontAwesome';
import ActionButton from '../components/buttons/ActionButton';
import { color } from 'react-native-reanimated';
import { useGlobal } from 'reactn';
import getContact from '../functions/getContact';
import Message from '../types/Message';

const playButtons = [
    {
        id: "Photos",
        color: "#FFF",
        src: require("../../assets/apple-photos.png")
    },
    {
        id: "App Store",
        color: "#01a5eb",
        src: require("../../assets/app-store.png")
    },
    {
        id: "Apple Health",
        color: "#000",
        src: require("../../assets/health-rings.png")
    },
    {
        id: "Stickers",
        color: "#FFF",
        src: require("../../assets/stickers.png")
    },
    {
        id: "Memoji",
        color: "#333",
        src: require("../../assets/memoji.png")
    },
    {
        id: "Wikipedia",
        color: "#FFF",
        src: require("../../assets/wikipedia.png")
    },
    {
        id: "Pinterest",
        color: "#FFF",
        src: require("../../assets/pinterest.png")
    },
    {
        id: "Trello",
        color: "#0089d9",
        src: require("../../assets/trello.png")
    },
]

const PlayButton = ({ color, src }:any) => {
    return (
        <View
            style={{
                height: 40,
                width: 60,
                borderRadius: 80,
                backgroundColor: color,
                justifyContent: "center",
                alignItems: "center",
                marginRight: 16
            }}
        >
            <Image source={src} style={{ height: 30, width: 30 }} />
        </View>
    )
}

const MessageScreen = ({ navigation, route }:Props) => {
    const [ contact, setContacat] = useState(route.params.contact);
    const totalMessages = route.params.totalMessages;
    const messages = contact.messages
    const scrollViewRef = useRef();
    const [ modalOpen, setModalOpen ] = useState(false);
    const theme = useTheme();
    const [ value, setValue ] = useState("");
    const [ kbOpen, setKbOpen ] = useState(false);
    const [ contacts ] = useGlobal<any>('contacts');
     
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

    useEffect(() => {
        Keyboard.addListener('keyboardWillShow', () => setKbOpen(true));
        Keyboard.addListener('keyboardWillHide', () => setKbOpen(false));
        
        return (() => {
            Keyboard.removeListener('keyboardWillShow', () => setKbOpen(true));
            Keyboard.removeListener('keyboardWillHide', () => setKbOpen(false));
            setKbOpen(false);
        });
    }, [])

    const handleSubmit = () => {
        const localMessages = contact.messages
        const globalMessages = getContact(contact.id, contacts)

        const newMessage:Message = {
            time: +new Date(),
            id: contact.id,
            sender: 0,
            receiver: contact.id,
            message: value,
            name: contact.name,
            read: true
        }

        let newMessages = [...localMessages, newMessage]

        newMessages.sort((a, b) => {
            return (a.time > b.time) ? -1 : 1;
        })

        const newContact = {...contact, messages: newMessages}
        setContacat(newContact)
        
        
        console.log(newContact)
        setValue("");
    }

    return (
        <KeyboardAvoidingView
            style={[styles.wrapper, { backgroundColor: theme.colors.card }]}
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            keyboardVerticalOffset={60}
        >
            <View style={styles.messageBox}>
                <ScrollView
                    ref={scrollViewRef}
                    onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
                    style={{ backgroundColor: theme.colors.card }}
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
                </ScrollView>
            </View>

            <View style={[styles.inputWrapper, { backgroundColor: theme.colors.card }]}>
                <View style={{ padding: 16 }}>
                    <TextInput
                        placeholder="Type something..."
                        value={value}
                        onChangeText={(value:string) => setValue(value)}
                        style={[styles.input, { backgroundColor: theme.colors.background, color: theme.colors.text }]}
                        autoCapitalize={"sentences"}
                        autoFocus={true}
                        numberOfLines={1}
                        onSubmitEditing={handleSubmit}
                    />
                </View>
                {
                    !kbOpen ? <FlatList 
                                    style={[styles.playWrapper, { backgroundColor: theme.colors.border }]}
                                    horizontal={true}
                                    data={playButtons}
                                    renderItem={({ item }:any) => <PlayButton key={item.key} color={item.color} src={item.src} kbOpen={kbOpen} />}
                                /> : null
                }
            </View>

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
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    messageBox: {
        paddingTop: 16,
        paddingLeft: 8,
        paddingRight: 8,
        flex: 4
    },
    inputWrapper: {
        flex: 1.5
    },
    inputWrapperInner: {
        flex: 1,
        justifyContent: 'flex-start',
        padding: 16
    },
    input: {
        backgroundColor: 'green',
        padding: 16,
        borderRadius: 8,
    },
    playWrapper: {
        backgroundColor: 'red',
        padding: 16
    }
});

interface Props {
    navigation: any,
    route: any,
    contact: Contact
}

export default MessageScreen;