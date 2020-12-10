import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, SafeAreaView, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ModalHeader from '../modal/ModalHeader';
import ModalBody from '../modal/ModalBody';
import Modal from '../modal/Modal';
import { useTheme } from '@react-navigation/native';
import GenerateNewMessageButton from './GenerateNewMessageButton';

const NewMessage:any = ({ setMessages, messages }:Props) => {
    const [ firstModalActive, setFirstModalActive ] = useState(false);
    const [ secondModalActive, setSecondModalActive ] = useState(false);
    const theme:any = useTheme();

    return (
        <TouchableOpacity>
            <Icon name="pencil-square-o" size={24} color={theme.colors.primary} onPress={() => setFirstModalActive(true)} style={{ paddingRight: 16 }}/>
            <Modal
                title="New Message"
                visibility={firstModalActive}
                setVisibility={setFirstModalActive}
            >   
                <GenerateNewMessageButton setFirstModalActive={setFirstModalActive} messages={messages} setMessages={setMessages} />
                <Button title="Open another text" onPress={() => setSecondModalActive(true)}/>

                <Modal
                    title="Add Contact"
                    visibility={secondModalActive}
                    setVisibility={setSecondModalActive}
                    modalLevel={1}
                >
                    
                </Modal>
            </Modal>
        </TouchableOpacity>
    )
}

interface Props {
    messages: any,
    setMessages: any
}

const styles = StyleSheet.create({
    modal: {
        backgroundColor: 'red',
        width: "100%",
        height: "100%"
    },
    modalHeader: {
        padding: 16,
        width: "100%",
        backgroundColor: 'blue',
        marginTop: 16,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    modalTitle: {
        position: "absolute",
        left: "50%",
        transform: [{translateX: -50}],
        fontSize: 20
    }
});

export default NewMessage;