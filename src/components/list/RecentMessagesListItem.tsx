import React, { useEffect, useState } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import DeleteButton from './recentMessages/DeleteButton';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { useTheme } from '@react-navigation/native';
import SelectIcon from './recentMessages/SelectIcon';
import ContactInfo from './recentMessages/ContactInfo';
import ReadIcon from './recentMessages/ReadIcon';

const RecentMessagesListItem = ({ data, isEditing, selectedItems, messages, setMessages }:Props) => {
    const { id, read } = data;
    const [ hasRead, setHasRead ] = useState<boolean>(read);
    const [ isSelected, setIsSelected ] = useState(false);
    const theme = useTheme();

    useEffect(() => {
        !isEditing ? setIsSelected(false) : '';
    }, [isEditing])
    
    const handlePress = () => {
        setHasRead(true);
        if(isEditing){
            setIsSelected(!isSelected);
            const index = selectedItems.indexOf(id);
            selectedItems.includes(id) ? selectedItems.splice(index, 1) : selectedItems.push(id);
        }
    }

    return (
        <Swipeable
            renderRightActions={() => DeleteButton(theme.colors.notification, id, messages, setMessages)}
            overshootRight={false}
            overshootFriction={8}
        >
            <TouchableWithoutFeedback onPress={handlePress}>
                <View style={{ flexDirection: "row", paddingLeft: 16, paddingRight: 16, backgroundColor: theme.colors.card, zIndex: 2 }}>
                    <ReadIcon isEditing={isEditing} hasRead={hasRead}/>
                    <SelectIcon isEditing={isEditing} isSelected={isSelected}/>
                    <ContactInfo isEditing={isEditing} data={data}/>
                </View>
            </TouchableWithoutFeedback>
        </Swipeable>
    )
}

interface Props {
    data:any,
    isEditing: boolean,
    selectedItems: any,
    messages:any,
    setMessages:any
}

export default RecentMessagesListItem;