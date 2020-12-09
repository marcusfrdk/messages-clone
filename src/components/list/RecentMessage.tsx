import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign';
import timestampToDate from '../../functions/timestampToDate';

const RecentMessage = ({ time, message, id, name, image }:Props) => {
    return (
        <Body>
            <ImageWrapper>
                <Image/>
            </ImageWrapper>
            <Texts>
                <Info>
                    <Name>{name}</Name>
                    <MoreInfo>
                        <Date>{timestampToDate(time)}</Date>
                        <Icon name="right" size={16} color="#000" style={{ marginLeft: 4 }}/>
                    </MoreInfo>
                </Info>
                <Message>{message}</Message>
            </Texts>
        </Body>
    )
}

const Body = styled.View`
    flex-direction: row;
    background-color: red;
`;

const Image = styled.View`
    height: 50px;
    width: 50px;
    border-radius: 50px;
    background-color: blue;
`;

const ImageWrapper = styled.View`
    background-color: green;
    height: 60px;
    width: 60px;
    align-items: center;
    justify-content: center;
`;

const Texts = styled.View`
    width: ${Dimensions.get('screen').width - 60 - 32 + "px"};
`;

const Info = styled.View`
    flex-direction: row;
    background-color: yellow;
    height: 20px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

const Message = styled.Text`
    background-color: orange;
    height: 40px;
    width: 100%;
    line-height: 20px;
    max-height: 40px;
    overflow: hidden;
`;

const Name = styled.Text`
    font-weight: 500;
`;

const Date = styled.Text``;

const MoreInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

interface Props {
    time: number,
    message: string,
    id: number,
    name: string,
    image: boolean
}

export default RecentMessage;