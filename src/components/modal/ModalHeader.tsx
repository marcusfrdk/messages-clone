import { useTheme } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

const ModalHeader = ({ title, close, modalLevel }:Props) => {
    const level = modalLevel ? modalLevel * 25 : 0;
    const theme = useTheme();

    return (
        <>
            <SafeAreaView>
                <View style={[styles.container, { backgroundColor: theme.colors.card, marginTop: level }]}>
                    <Text style={{ fontSize: 18 }}>{title}</Text>
                    <View style={{ right: 16, position: "absolute" }}>
                        <Button title="Close" onPress={close}/>
                    </View>
                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    }
});

interface Props {
    title: string,
    close: any,
    modalLevel?: number
}

export default ModalHeader;