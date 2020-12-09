import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const SearchSmall = ({ value, setValue }:Props) => {    
    return (
        <Wrapper>
            <Input
                onChangeText={text => setValue(text)}
                value={value}
                placeholder="Search"
            />
        </Wrapper>
    )
}

const Wrapper = styled.View`
    padding: 8px 0;
`;

const Input = styled.TextInput`
    padding: 8px;
    background-color: #fff;
    border-radius: 4px;
`;

interface Props {
    value: string,
    setValue: any
}

export default SearchSmall;