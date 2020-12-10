import React, { useLayoutEffect, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';

// Components
import SearchBarSmall from '../components/search/SearchBarSmall';
import RecentMessagesList from '../components/list/RecentMessagesList';

// Data

// Data
import contacts from '../data/contacts.json';

// Types
import Contact from '../types/Contact';

const MessagesListScreen = ({ navigation }:any) => {
    const [ isEditing, setIsEditing ] = useState(false);
    const [ selectedItems, setSelectedItems ] = useState([]);
    const theme:any = useTheme();
    
    // Allow edit button in header to change state
    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <View style={{ marginLeft: 8 }}>
                    <Button title={isEditing ? "Cancel" : "Edit"} onPress={() => setIsEditing(isEditing ? false : true)}/>
                </View>
            )
        });
    }, [navigation, isEditing]);

    return (
        <ScrollView style={{ backgroundColor: theme.colors.card }}>
            <SearchBarSmall value={""} setValue={""}/>

            <RecentMessagesList
                isEditing={isEditing}
                selectedItems={selectedItems}
                setSelectedItems={setSelectedItems}
            />
        </ScrollView>
    )
}

export default MessagesListScreen;