import React from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

const ModalHeader = ({ title, close, modalLevel }:Props) => {
    const level = modalLevel ? modalLevel * 25 : 0;

    return (
        <>
            <SafeAreaView>
                <Container level={level}>
                    <Title>{title}</Title>
                    <Close>
                        <Button title="Close" onPress={close}/>
                    </Close>
                </Container>
            </SafeAreaView>
        </>
    )
}

const Container = styled.View<any>`
    background-color: red;
    padding: 16px;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: ${props => props.level + `px`};
`;

const Title = styled.Text`
    font-size: 18px;
`;

const Close = styled.View<any>`
    right: 16px;
    position: absolute;
`;

interface Props {
    title: string,
    close: any,
    modalLevel?: number
}

export default ModalHeader;