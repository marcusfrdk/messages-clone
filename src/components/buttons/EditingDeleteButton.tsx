import { useTheme } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

const EditingDeleteButton = ({ selectedItems, setSelectedItems, messages, setMessages }:Props) => {
    const theme = useTheme();

    const deleteSelected = () => {
        if(selectedItems.length !== 0){
            let newList = messages;
            for(let i = 0; i < selectedItems.length; i++){
                newList = newList.filter((item:any) => item.id !== selectedItems[i]);
            }
            setMessages(newList);
        } else {
            Alert.alert("You must select at least one item.")
        }

    }

    return (
        <Button title="Delete" onPress={deleteSelected} color={theme.colors.notification}/>
    )
}

const styles = StyleSheet.create({
    container: {
        
    }
});

interface Props {
    selectedItems: any,
    setSelectedItems: any,
    messages: any,
    setMessages: any
}

export default EditingDeleteButton;