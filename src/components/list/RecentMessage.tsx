import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import timestampToDate from '../../functions/timestampToDate';
import { useTheme } from '@react-navigation/native';
import ContactImage from './ContactImage';
import Texts from './recentMessages/Texts';
import { GestureHandler } from 'expo';
//const { Swipeable } = GestureHandler;

const RecentMessage = ({ data, editing, selected }:Props) => {
    let { id, name, message, time, image, gender, read } = data;
    const [ hasRead, setHasRead ] = useState<boolean>(read);
    const [ isSelected, setIsSelected ] = useState(false);
    const theme:any = useTheme();

    useEffect(() => {
        !editing ? setIsSelected(false) : '';
    }, [editing])
    
    const select = () => {
        setHasRead(true);

        if(editing){
            setIsSelected(!isSelected);
            const index = selected.indexOf(id);
            selected.includes(id) ? selected.splice(index, 1) : selected.push(id);
        }
    }

    return (
        <TouchableOpacity onPress={select}>
            <View style={{ flexDirection: "row", paddingTop: 2, paddingBottom: 2 }}>
                {/* Not Read Icon */}
                {
                    !hasRead && !editing ? <View style={{ position: "absolute", height: "100%", width: 10, left: -9, justifyContent: "center", alignItems: "center" }}>
                                <View style={{ height: 10, width: 10, borderRadius: 10, backgroundColor: theme.colors.primary }}>

                                </View>
                            </View> : null
                }

                {/* Editing */}
                <View style={[styles.selectWrapper, { display: editing ? 'flex' : 'none' }]}>
                    <View style={[{ backgroundColor: isSelected ? theme.colors.primary : theme.colors.border }, styles.selectButton ]}>
                        {
                            isSelected ? <Icon name="ios-checkmark" size={22} color="#FFF"/> : null
                        }
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.imageWrapper}>
                        <ContactImage image={image} id={id} gender={gender} name={name}/>
                    </View>
                    <Texts editing={editing} data={data} />
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    selectWrapper: {
        paddingRight: 15,
        justifyContent: "center",
    },
    selectButton: {
        height: 20,
        width: 20,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    imageWrapper: {
        height: 70,
        width: 60,
        alignItems: "center",
        justifyContent: "center",
    },
    
});

interface Props {
    data: any
    editing: boolean
    selected: any
}

export default RecentMessage;