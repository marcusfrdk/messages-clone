import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ContactImage from '../ContactImage';
import Texts from './Texts';
import getContact from '../../../functions/getContact';

const ContactInfo = ({ data, isEditing }:Props) => {
    let { time, message, id } = data;
    let { image, gender, name } = getContact(data.id);

    return (
        <View style={{ flexDirection: 'row' }}>
            <View style={styles.imageWrapper}>
                <ContactImage image={image} id={id} gender={gender} name={name}/>
            </View>
            <Texts isEditing={isEditing} time={time} message={message} name={name} />
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

interface Props {
    data: any,
    isEditing: boolean
}

export default ContactInfo;