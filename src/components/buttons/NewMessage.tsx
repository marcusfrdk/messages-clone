import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, SafeAreaView, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from '../modal/Modal';

const NewMessage:any = ({ navigator }:Props) => {
    const [ modalVisible, setModalVisible ] = useState(false);

    return (
        <>
            <Icon name="plus" size={30} color="#000" onPress={() => setModalVisible(true)}/>
            <Modal title="New Message" visible={modalVisible} setVisible={setModalVisible}>

            </Modal>
            
        </>
    )
}

interface Props {
    navigator: any
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