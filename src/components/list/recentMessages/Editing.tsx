import { useTheme } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Editing = ({ isSelected, editing }:Props) => {
    const theme = useTheme();

    return (
        <View style={[styles.selectWrapper, { display: editing ? 'flex' : 'none' }]}>
            <View style={[{ backgroundColor: isSelected ? theme.colors.primary : theme.colors.border }, styles.selectButton ]}>
                {
                    isSelected ? <Icon name="ios-checkmark" size={22} color="#FFF"/> : null
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    selectWrapper: {
        paddingRight: 15,
        justifyContent: "center",
    },
    selectButton: {
        height: 20,
        width: 20,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center"
    },
});

interface Props {
    isSelected: boolean,
    editing: boolean
}

export default Editing;