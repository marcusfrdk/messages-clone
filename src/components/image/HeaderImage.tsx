import { useTheme } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import getInitials from '../../functions/getInitials';

const HeaderImage = ({ id, gender, name, image }:Props) => {
    const uri = `https://randomuser.me/api/portraits/${gender == "male" ? "men" : "women"}/${id}.jpg`;
    const initials = getInitials(name);
    const theme:any = useTheme();

    return (
        <View style={styles.container}>
            {
                image ? <Image source={{ uri }} style={styles.image}/> : <View style={[styles.noImage, { backgroundColor: theme.colors.text2 }]}><Text style={{ color: '#FFF' }}>{initials}</Text></View>
            }
            <Text style={styles.text}>{name.includes(" ") ? name.split(" ")[0] : name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 45,
        width: 45,
        flexDirection: "column",
        justifyContent: 'flex-start',
        alignItems: "center"
    },
    image: {
        height: 32,
        width: 32,
        borderRadius: 32,
        backgroundColor: 'green'
    },
    text: {
        fontSize: 10
    },
    noImage: {
        height: 32,
        width: 32,
        borderRadius: 32,
        justifyContent: "center",
        alignItems: "center"
    }
});

interface Props {
    id: number,
    gender: string,
    name: string,
    image: boolean
}

export default HeaderImage;