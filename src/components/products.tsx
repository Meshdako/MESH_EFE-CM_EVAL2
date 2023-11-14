import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { FlatList, View, Text } from 'react-native';
import { ProductsProps } from '../interfaces/products.interface';


const Products: React.FC<ProductsProps> = ({ data }) => {
    return (
        <View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        
                            <Text style={styles.textContainer}> {item.title}</Text>
                            <Text style={styles.priceContainer}> {item.price}</Text>
                        
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',

        margin: 5,
        padding: 5,

        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 5,
    },
    textContainer: {
        width: '80%',
        paddingEnd: 20,
        fontSize:15,
        color: '#F28500',
        borderRightWidth: 1,
        borderRightColor: '#000',
    },
    priceContainer: {
        width: '20%',
        fontSize:15,
        color: '#F28500',
    }
});

export default Products;