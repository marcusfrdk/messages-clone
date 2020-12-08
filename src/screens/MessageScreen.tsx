import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MessageScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Message Screen</Text>
            <Icon name="plus" size={30} color="#000" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
    }
})
export default MessageScreen;