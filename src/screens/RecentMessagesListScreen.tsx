import React, { useLayoutEffect, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';

// Components
import SearchBarSmall from '../components/search/SearchBarSmall';
import RecentMessagesList from '../components/list/RecentMessagesList';
import NewMessage from '../components/buttons/NewMessage';

// Functions
import getLatestMessages from '../functions/getLatestMessages';

// Types
import Message from '../types/Message';

const MessagesListScreen = ({ navigation }:any) => {
    const [ isEditing, setIsEditing ] = useState(false);
    const [ selectedItems, setSelectedItems ] = useState([]);
    const [ messages, setMessages ] = useState<Message[]>(getLatestMessages); 
    const theme:any = useTheme();
    
    // Allow edit button in header to change state
    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => ( // EDIT BUTTON
                messages.length > 0 ? <View style={{ marginLeft: 8 }}><Button title={isEditing ? "Cancel" : "Edit"} onPress={() => setIsEditing(isEditing ? false : true)}/></View> : null
            ), // NEW MESSAGE BUTTON
            headerRight: () => <NewMessage messages={messages} setMessages={setMessages} />
        });
    }, [navigation, isEditing, messages]);

    return (
        <ScrollView style={{ backgroundColor: theme.colors.card }}>
            <SearchBarSmall value={""} setValue={""}/>

            <RecentMessagesList
                isEditing={isEditing}
                selectedItems={selectedItems}
                setSelectedItems={setSelectedItems}
                messages={messages}
                setMessages={setMessages}
            />
        </ScrollView>
    )
}

export default MessagesListScreen;