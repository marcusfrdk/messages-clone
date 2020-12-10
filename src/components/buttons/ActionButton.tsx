import { useTheme } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

const ActionButton = ({ iconName, disabled, onPress }: Props) => {
    const theme:any = useTheme();

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
                <Icon name={iconName} size={24} color={disabled ? theme.colors.text2 : theme.colors.primary} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 54,
        width: 72,
        backgroundColor: 'red',
        marginRight: 8,
        marginLeft: 8,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center"
    }
});

interface Props {
    iconName: string,
    disabled: boolean,
    onPress: any
}

export default ActionButton;