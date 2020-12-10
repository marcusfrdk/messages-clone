import { useTheme } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import getInitials from '../../functions/getInitials';

const ProfileImage = ({ id, gender, image, name }: Props) => {
    const uri = `https://randomuser.me/api/portraits/${gender == "male" ? "men" : "women"}/${id}.jpg`;
    const initials = getInitials(name);
    const theme:any = useTheme();

    return (
        <View style={styles.container}>
            {
                image ? <Image source={{ uri }} style={styles.image}/> : <View style={[styles.noImage, { backgroundColor: theme.colors.text2 }]}><Text style={{ color: '#FFF' }}>{initials}</Text></View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 128,
        width: 128,
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: "center",
    },
    image: {
        height: "100%",
        width: "100%",
        borderRadius: 128,
        backgroundColor: 'green'
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
    image: boolean,
    gender: string,
    name: string
}

export default ProfileImage;