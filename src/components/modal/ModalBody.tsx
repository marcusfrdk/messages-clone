import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ModalBody = ({ children }:Props) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "#FFF",
        alignItems: "center",
        paddingRight: 16,
        paddingLeft: 16
    }
});

interface Props {
    children: any
}

export default ModalBody;