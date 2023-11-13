import React from 'react';
import { Button, Image, Text, View, StyleSheet } from 'react-native';

export default function TitleContainer() {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.containerText}>
                MESH: Tarea Computación Movil
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        flex: 1,
        width: '92.5%',
        backgroundColor: '#FF2400',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    containerText: {
        backgroundColor: '#000',
        fontStyle: 'italic',
        color: '#fff',
        fontSize: 15,
        marginTop: 70,
        padding: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
