import axios from 'axios';

export const getFakestore = async () => {
    try {
        console.log("Accediendo a la API de Fakestore");
        
        const response =  await axios.get(`https://fakestoreapi.com/products`);
        return response.data;
    } catch (error) {
        console.error("Error al acceder a la API de Fakestore");
        throw new Error(`Error: ${error}`);
    }
}