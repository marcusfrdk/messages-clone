import { useTheme } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, Alert } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import getInitials from '../../functions/getInitials';

const HeaderImage = ({ id, gender, name, image, modalOpen, setModalOpen }:Props) => {
    const uri = `https://randomuser.me/api/portraits/${gender == "male" ? "men" : "women"}/${id}.jpg`;
    const initials = getInitials(name);
    const theme:any = useTheme();

    return (
        <TouchableWithoutFeedback onPress={() => setModalOpen(true)}>
            <View style={styles.container}>
                        {
                            image ? <Image source={{ uri }} style={styles.image}/> : <View style={[styles.noImage, { backgroundColor: theme.colors.text2 }]}><Text style={{ color: '#FFF' }}>{initials}</Text></View>
                        }
                    <Text style={styles.text} numberOfLines={1}>{name.includes(" ") ? name.split(" ")[0] : name}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 45,
        width: 100,
        flexDirection: "column",
        justifyContent: 'flex-start',
        alignItems: "center",
    },
    image: {
        height: 32,
        width: 32,
        borderRadius: 32,
        backgroundColor: 'green'
    },
    text: {
        fontSize: 10,
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
    image: boolean,
    modalOpen: boolean,
    setModalOpen: any
}

export default HeaderImage;