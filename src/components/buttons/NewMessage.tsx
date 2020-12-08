import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, Alert, SafeAreaView, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const NewMessage:any = ({ navigator }:Props) => {
    const [ modalVisible, setModalVisible ] = useState(false);

    return (
        <>
            <Icon name="plus" size={30} color="#000" onPress={() => setModalVisible(true)} />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => Alert.alert("Modal has been closed!")}
            >
                <SafeAreaView>
                    <View style={styles.modalHeader}>
                        <Text>New Message</Text>
                        <Button title="Close" onPress={() => setModalVisible(false)} />
                    </View>
                    <View style={styles.modal}>
                        <Text>Hello Modal!</Text>
                    </View>
                </SafeAreaView>
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
        borderTopRightRadius: 16
    }
});

export default NewMessage;