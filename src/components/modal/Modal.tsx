import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Modal, SafeAreaView, Button } from 'react-native';

const ModalComponent = ({ children, title, visible, setVisible }:Props) => {    
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
        >
            <SafeAreaView>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>{title}</Text>
                    <View style={{ position: "absolute", alignSelf: "center", right: 8 }}>
                        <Button title="Close" onPress={() => setVisible(false)}/>
                    </View>
                </View>
                <View style={styles.body}>

                </View>

            </SafeAreaView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        
    },
    header: {
        paddingTop: 16,
        paddingBottom: 16,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        backgroundColor: 'blue',
        justifyContent: "center",
        flexDirection: "row"
    },
    headerTitle: {
        fontSize: 20
    },
    body: {
        backgroundColor: 'red',
        height: "100%"
    }
})

interface Props {
    children: any,
    title: string,
    visible: boolean,
    setVisible: any
}

export default ModalComponent;