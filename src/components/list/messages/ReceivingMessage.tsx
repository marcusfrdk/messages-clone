import { useTheme } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import timestampToDate from '../../../functions/timestampToDate';

const SendingMessage = ({ message, time }: Props) => {
    const theme = useTheme();

    return (
        <View style={styles.container}>
            <View style={[styles.bubble, { backgroundColor: theme.colors.border }]}>
                <Text style={{ color: theme.colors.text, fontSize: 16 }}>{message}</Text>
            </View>
            <Text style={[styles.timeSent, { color: theme.colors.text2 }]}>{timestampToDate(time)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 8,
        flex: 1,
        alignItems: "flex-start",
        paddingRight: 16
    },
    bubble: {
        padding: 8,
        maxWidth: "75%",
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 16,
    },
    timeSent: {
        fontSize: 12,
        marginTop: 4
    }
});

interface Props {
    message: string,
    time: number
}

export default SendingMessage;