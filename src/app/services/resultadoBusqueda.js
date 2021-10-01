import axios from 'axios';

const getProductsReq = axios.create({
    baseURL: "http://localhost:8080/api/",
});

const getProductos = async ({ value }) => {
    const resp = await getProductsReq.get(`/items/${value}`);
    return resp;
}

export {
    getProductos,
};