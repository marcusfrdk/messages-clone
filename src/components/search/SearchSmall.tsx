import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const SearchSmall = ({ value, setValue }:Props) => {    
    const theme = useTheme();

    return (
        <View style={{ paddingLeft: 16, paddingRight: 16 }}>
            <TextInput
                onChangeText={text => setValue(text)}
                value={value}
                placeholder="Search"
                style={{ padding: 8, borderRadius: 8, backgroundColor: theme.colors.background, marginBottom: 16, marginTop: 8, fontSize: 16 }}
                />
        </View>
    )
}

interface Props {
    value: string,
    setValue: any
}

export default SearchSmall;