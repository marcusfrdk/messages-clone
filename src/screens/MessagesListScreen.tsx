import React, { useLayoutEffect, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const MessagesListScreen = ({ navigation }:Props) => {
    const [ isEditing, setIsEditing ] = useState(false);

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
        <View style={styles.container}>
            <Text>Messages List Screen</Text>
            <Text>{isEditing.toString()}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
    }
});

interface Props {
    navigation: any
}


export default MessagesListScreen;