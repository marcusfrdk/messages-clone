import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ContactImage from '../ContactImage';
import Texts from './Texts';

const Info = ({ data, editing }:Props) => {
    const { image, id, gender, name } = data;

    return (
        <View style={{ flexDirection: 'row' }}>
            <View style={styles.imageWrapper}>
                <ContactImage image={image} id={id} gender={gender} name={name}/>
            </View>
            <Texts editing={editing} data={data} />
        </View>
    )
}

const styles = StyleSheet.create({
    imageWrapper: {
        height: 80,
        width: 60,
        alignItems: "center",
        justifyContent: "center",
    },
});

interface Data {
    image: boolean,
    id: number,
    gender: string,
    name: string,
    time: number,
    message: string
}

interface Props {
    data: Data,
    editing: boolean
}

export default Info;