import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { getFakestore } from '../services/fakestore.service';
import { Data } from '../interfaces/fakestore.interface';
import Products from '../components/products';

export default function BodyContainer() {
    
    return (
        <ScrollView style={styles.paraphContainer}>
            <Products/>
        </ScrollView >
    )
}

const styles = StyleSheet.create({
    paraphContainer: {
        flex: 1,
        backgroundColor: '#000',
        padding:30,
    },
    paraph: {
        fontSize: 20,
    }
});
