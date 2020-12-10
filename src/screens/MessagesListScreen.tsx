import React, { useLayoutEffect, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { useGlobal } from 'reactn';
import styled from 'styled-components/native';

// Components
import SearchSmall from '../components/search/SearchSmall';
import RecentMessage from '../components/list/RecentMessage';

// Data
import dbRecentMessages from '../data/recentMessages';
import { useTheme } from '@react-navigation/native';

const MessagesListScreen = ({ navigation }:Props) => {
    const [ isEditing, setIsEditing ] = useState(false);
    const [ searchValue, setSearchValue ] = useState('');
    const [ recentMessages, setRecentMessages ] = useState(dbRecentMessages);
    let selected:any = [];
    const theme:any = useTheme();

    useEffect(() => {
        if(!isEditing){
            selected = []
        }
    }, [isEditing])

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
            <SearchSmall value={searchValue} setValue={setSearchValue}/>

            {
                recentMessages.map((data:any) => {
                    return (
                        <RecentMessage
                            key={data.id}
                            data={data}
                            editing={isEditing}
                            selected={selected}
                        ></RecentMessage>)
                })
            }

            <Text style={{ padding: 16, textAlign: "center", fontSize: 16, color: theme.colors.text2 }}>{recentMessages ? `${recentMessages.length} messages` : `0 messages`}</Text>
        </ScrollView>
    )
}

interface Props {
    navigation: any
}


export default MessagesListScreen;