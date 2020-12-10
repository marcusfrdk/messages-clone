import { useTheme } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign'

const GoBackTotalMessages = ({ total, navigation }:Props) => {
    const theme = useTheme();

    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate('RecentMessagesListScreen')}>
            <View style={styles.container}>
                <Icon name="left" size={24} color={theme.colors.primary} />
                <View style={[styles.totalWrapper, { backgroundColor: theme.colors.primary }]}>
                    <Text style={styles.total}>{total}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8
    },
    total: {
        fontSize: 12,
        fontWeight: "500",
        color: "#FFF",
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 4,
        paddingRight: 4
    },
    totalWrapper: {
        borderRadius: 24
    }
});

interface Props {
    total: number,
    navigation: any
}

export default GoBackTotalMessages;