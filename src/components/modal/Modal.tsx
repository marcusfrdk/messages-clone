import React from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';

import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';

const ModalComponent = ({ title, visibility, children, setVisibility, modalLevel }:Props) => {
    const level = modalLevel || 0;

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visibility}
        >
            <ModalHeader title={title} close={setVisibility} modalLevel={level}/>
            <ModalBody>
                {children}
            </ModalBody>

        </Modal>
    )
}

interface Props {
    children: any,
    visibility: boolean,
    title: string,
    setVisibility: any,
    modalLevel?:number
}

export default ModalComponent;