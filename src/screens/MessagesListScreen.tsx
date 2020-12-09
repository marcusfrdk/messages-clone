import React, { useLayoutEffect, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { useGlobal } from 'reactn';
import styled from 'styled-components/native';

// Components
import SearchSmall from '../components/search/SearchSmall';
import RecentMessage from '../components/list/RecentMessage';

// Data
import dbRecentMessages from '../data/recentMessages';

const MessagesListScreen = ({ navigation }:Props) => {
    const [ isEditing, setIsEditing ] = useState(false);
    const [ searchValue, setSearchValue ] = useState('');
    const [ recentMessages, setRecentMessages ] = useState(dbRecentMessages);

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
        <ScrollView style={{ paddingRight: 16, paddingLeft: 16 }}>
            <SearchSmall value={searchValue} setValue={setSearchValue}/>

            {
                recentMessages.map((data:any) => {
                    return <RecentMessage key={data.id} time={data.time} id={data.id} message={data.message} name={data.name} image={data.image}></RecentMessage>
                })
            }

            <TotalMessages>{recentMessages ? `${recentMessages.length} messages` : `0 messages`}</TotalMessages>
        </ScrollView>
    )
}

// {
//     recentMessages.map((data:any) => {
//         return (
//             <RecentMessage key={data.id} id={data.id} time={data.time} message={data.lastMessage}/>
//         )
//     })
// }
const TotalMessages = styled.Text`
    padding: 16px 16px;
    text-align: center;
    font-size: 16px;
`;

interface Props {
    navigation: any
}


export default MessagesListScreen;