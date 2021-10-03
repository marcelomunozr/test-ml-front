import axios from 'axios';

const getProductsReq = axios.create({
    baseURL: "http://localhost:8080/api/",
});

const getProductos = async (value) => {
    try {
        const resp = await getProductsReq.get(`/items/${value}`);
        return resp;
    } catch (error) {
        console.log('error: ', error);
    }
}

export {
    getProductos,
};