import axios from 'axios';

const getProductsReq = axios.create({
    baseURL: "http://localhost:8080/api/",
});

const getProductos = async (value) => {
    try {
        const resp = await getProductsReq.get(`/items?q=${value}`);
        return resp;
    } catch (error) {
        console.log('error: ', error);
    }
};

const getProducto = async (id) => {
    try {
        const resp = await getProductsReq.get(`/items/${id}`);
        return resp;
    } catch (error) {
        console.log('error: ', error);
    }
};

const getDetalleProducto = async (id) => {
    try {
        const resp = await getProductsReq.get(`/items/${id}/description`);
        return resp;
    } catch (error) {
        console.log('error: ', error);
    }
};

export {
    getProductos,
    getProducto,
    getDetalleProducto,
};