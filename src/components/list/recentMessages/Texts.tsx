import { useTheme } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import timestampToDate from '../../../functions/timestampToDate';
import Icon from 'react-native-vector-icons/AntDesign';

const Texts = ({ editing, data }:Props) => {
    const theme:any = useTheme();
    const { time, message, name } = data;

    return (
        <View style={{
            width: Dimensions.get('screen').width - (editing ? 105 : 70) - 30,
            justifyContent: 'center',
            borderBottomWidth: 1,
            borderBottomColor: theme.colors.border
        }}>
            <View style={[styles.info, { width: Dimensions.get('screen').width - (editing ? 105 : 60) - (editing ? 22 : 32) }]}>
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
            <Text numberOfLines={2} style={[styles.message, { color: theme.colors.text2, width: Dimensions.get('screen').width - (editing ? 105 : 60) - (editing ? 24 : 32) }]}>{message}</Text>
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

interface Data {
    time: number,
    name: string,
    message: string
}

interface Props {
    data:Data,
    editing:boolean
}

export default Texts;