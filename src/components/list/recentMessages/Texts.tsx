import { useTheme } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import timestampToDate from '../../../functions/timestampToDate';
import Icon from 'react-native-vector-icons/AntDesign';

const Texts = ({ isEditing, time, message, name }:Props) => {
    const theme:any = useTheme();

    return (
        <View style={{
            width: Dimensions.get('screen').width - (isEditing ? 105 : 70) - 30,
            justifyContent: 'center',
            borderBottomWidth: 1,
            borderBottomColor: theme.colors.border
        }}>
            <View style={[styles.info, { width: Dimensions.get('screen').width - (isEditing ? 105 : 60) - (isEditing ? 22 : 32) }]}>
                <Text 
                    numberOfLines={1}
                    style={{
                        fontSize: 16,
                        fontWeight: '500'
                }}>{name}</Text>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text numberOfLines={1} style={{ color: theme.colors.text2 }} >{timestampToDate(time)}</Text>
                    <Icon
                        name="right"
                        size={16}
                        color={theme.colors.text2}
                        style={{ marginLeft: 4 }}
                    />
                </View>
            </View>
            <Text numberOfLines={2} style={[styles.message, { color: theme.colors.text2, width: Dimensions.get('screen').width - (isEditing ? 105 : 60) - (isEditing ? 24 : 32) }]}>{message}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    info: {
        flexDirection: "row",
        height: 20,
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center"
    },
    message: {
        height: 42,
        paddingTop: 2,
        lineHeight: 20,
        maxHeight: 50,
    }
});

interface Props {
    time: number,
    name: string,
    message: string
    isEditing: boolean
}

export default Texts;