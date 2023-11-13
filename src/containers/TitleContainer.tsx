import React from 'react';
import { Button, Image, Text, View, StyleSheet } from 'react-native';

export default function TitleContainer() {

    const onPressLearnMore = () => {
        console.log('holaaa')
    }

    return (
        <View style={styles.titleContainer}>
            <Text style={styles.containerText}>MESH: Tarea Computación Movil</Text>
        </View>


    )
}

const styles = StyleSheet.create({
    titleContainer: {
        flex: 1,
        backgroundColor: '#FF2400',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    containerText: {
        color: '#fff',
        fontSize: 20,
        margin: 50,
        padding: 50,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
