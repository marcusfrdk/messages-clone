import { useTheme } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import getInitials from '../../functions/getInitials';

const ContactImage = ({ image, id, gender, name }:Props) => {
    const theme:any = useTheme();
    const url = `https://randomuser.me/api/portraits/${gender === "male" ? "men" : "women"}/${id}.jpg`;

    if(!image){
        return (
            <View style={[styles.container, styles.dimensions, { backgroundColor: theme.colors.text2 }]}>
                <Text style={{ fontSize: 20, color: "#FFF" }}>{getInitials(name)}</Text>
            </View>
        )
    } else{
        return (
            <View style={styles.container}>
                <Image style={styles.dimensions} source={{ uri: url }}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    dimensions: {
        height: 45,
        width: 45,
        borderRadius: 45
    },
    container: {
        justifyContent: "center",
        alignItems: "center"
    },
});

interface Props {
    image: boolean,
    id: number,
    gender: string,
    name: string
}

export default ContactImage;