// Modules
import React, { useEffect, useState } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, Text, Alert, Button } from 'react-native';

// Data
import contacts from '../../data/contacts.json';
import RecentMessagesListItem from './RecentMessagesListItem';

// Functions
import getLatestMessages from '../../functions/getLatestMessages';

// Types
import Message from '../../types/Message';

const RecentMessagesList = ({ isEditing, selectedItems, setSelectedItems }:Props) => {
    const theme:any = useTheme();
    const [ messages, setMessages ] = useState<Message[]>(getLatestMessages); 

    // Reset selectedItems if edit is closed
    useEffect(() => {
        !isEditing ? setSelectedItems([]) : null;

        console.log(typeof(messages))

    }, [isEditing, messages]);
    
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

            <Text style={{ padding: 16, textAlign: "center", fontSize: 16, color: theme.colors.text2 }}>{messages.length === 1 ? `${messages.length} message` : `${messages.length} messages`}</Text>
        </View>
    )
}

// return (
//     <RecentMessagesListItem
//         key={data.id}
//         isEditing={isEditing}
//         selectedItems={selectedItems}
//         data={data}
//         messages={messages}
//         setMessages={setMessages}
//     />
// )

interface Props {
    isEditing: boolean,
    selectedItems: any,
    setSelectedItems: any
}

export default RecentMessagesList;