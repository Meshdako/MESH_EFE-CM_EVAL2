import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { getFakestore } from "../services/fakestore.service";
import { FakeStore, Data, Rating } from "../interfaces/fakestore.interface"
import { FlatList, View, Text } from 'react-native';

const Products: React.FC = () => {
    const [productos, setProductos] = useState<Data[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getFakestore();
                setProductos(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    return (
        <View>
            <FlatList
                data={productos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Text style={styles.textContainer}>
                            {item.title}
                        </Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    textContainer: {
        fontSize:15,
        color: '#001908',
    },
});

export default Products;