import { useTheme } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HasRead = ({ hasRead, editing }:Props) => {
    const theme = useTheme();

    if(!hasRead && !editing){
        return (
            <View style={styles.wrapper}>
                <View style={[{ backgroundColor: theme.colors.primary }, styles.icon ]}></View>
            </View>
        )
    } else { return null; }
}

const styles = StyleSheet.create({
    wrapper: {
        position: "absolute",
        height: "100%",
        width: 10,
        left: 6,
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        height: 10,
        width: 10,
        borderRadius: 10
    }
});

interface Props {
    hasRead: boolean,
    editing: boolean
}

export default HasRead;