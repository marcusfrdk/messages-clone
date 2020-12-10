// Modules
import React, { useEffect, useState } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, Text, Alert, Button } from 'react-native';

// Data
import RecentMessagesListItem from './RecentMessagesListItem';

// Types
import EditingDeleteButton from '../buttons/EditingDeleteButton';

const RecentMessagesList = ({ isEditing, selectedItems, setSelectedItems, messages, setMessages }:Props) => {
    const theme:any = useTheme();

    // Reset selectedItems if edit is closed
    useEffect(() => {
        !isEditing ? setSelectedItems([]) : null;
    }, [isEditing]);
    
    return (
        <View>
            {
                messages.map((data:any, index:any) => {
                    return (
                        <RecentMessagesListItem
                            key={data.id}
                            isEditing={isEditing}
                            selectedItems={selectedItems}
                            data={data}
                            messages={messages}
                            setMessages={setMessages}
                        />
                    )
                })
            }

            {
                isEditing ? <EditingDeleteButton selectedItems={selectedItems} setSelectedItems={setSelectedItems} messages={messages} setMessages={setMessages}/> : null
            }

            <Text style={{ padding: 16, textAlign: "center", fontSize: 16, color: theme.colors.text2 }}>{messages.length === 1 ? `${messages.length} message` : `${messages.length} messages`}</Text>
        </View>
    )
}

interface Props {
    isEditing: boolean,
    selectedItems: any,
    setSelectedItems: any,
    messages: any,
    setMessages: any
}

export default RecentMessagesList;