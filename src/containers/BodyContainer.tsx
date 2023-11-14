import React, { useEffect, useState } from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import { getFakestore } from '../services/fakestore.service';
import { Data } from '../interfaces/fakestore.interface';
import Products from '../components/products';
import Button from '../components/button';
import Icon from 'react-native-vector-icons/Ionicons';
import Loading from '../components/loading';


export default function BodyContainer() {
    const [showProducts, setShowProducts] = useState(false);
    const [productos, setProducts] = useState<Data[]>([]);
    const [ascendente, setAscendente] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                console.log("Obteniendo productos...");
                
                const data = await getFakestore();
                setProducts(data);
            } catch (error) {
                console.error("Ha ocurrido un error: ", error);
            }

            setTimeout(() => {
                setLoading(false);
            }, 2000);
        };
        fetchData();
    }, []);

    const handlePress = () => {
        /* if(!showProducts) {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        } */
        setShowProducts(!showProducts);
    };

    const handleSort = () => {
        console.log("Ordenando productos...");
        
        if(ascendente){
            console.log("Ascendentemente");
            const sortedProductos = [...productos].sort((a, b) => a.price - b.price);
            setProducts(sortedProductos);
        } else {
            console.log("Descendentemente");
            const sortedProductos = [...productos].sort((a, b) => b.price - a.price);
            setProducts(sortedProductos);
        }
        
        setAscendente(!ascendente);
    };

    return (
        <View style={styles.paraphContainer}>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <Button onPress={ handlePress } title={showProducts ? "Ocultar Productos" : "Mostrar Productos"}/>
                    {showProducts && (
                        <>
                            <Button onPress={ handleSort } title={ascendente ?  <Icon name="arrow-up" size={24} color="white"/> : <Icon name="arrow-down" size={24} color="white" />}/>
                            <Products data={productos}/>
                        </>
                    )}
                </>
            )}
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
