import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import { getFakestore } from '../services/fakestore.service';
import { Data } from '../interfaces/fakestore.interface';
import Products from '../components/products';
import Button from '../components/button';

export default function BodyContainer() {
    const [showProducts, setShowProducts] = useState(false);

    const handlePress = () => {
        setShowProducts(!showProducts);
    };

    return (
        <View style={styles.paraphContainer}>
            <Button onPress={ handlePress } title={showProducts ? "Ocultar Productos" : "Mostrar Productos"}/>
            {showProducts && <Products />}
        </View >
    )
}

const styles = StyleSheet.create({
    paraphContainer: {
        flex: 3,
        width: '92.3%',
        backgroundColor: '#fff',
        padding:30,
    },
    paraph: {
        fontSize: 20,
    }
});
