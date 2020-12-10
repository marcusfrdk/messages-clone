import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const RightSwipe = (red:string) => {
    return (
        <TouchableWithoutFeedback onPress={() => Alert.alert("You are deleting this bruv")}>
            <View style={[styles.container, { backgroundColor: red }]}>
                <Icon name="ios-trash" size={36} color="#FFF"/>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "25%",
        height: 80,
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1
    }
});

interface Props {
    
}

export default RightSwipe;