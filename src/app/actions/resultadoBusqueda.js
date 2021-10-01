import { getProductos } from '../services/products';
import {
	SET_PRODUCTOS,
	SET_IS_LOADING_PRODUCTOS,
	SET_ERROR_PRODUCTOS,
	CLEAR_ERROR_PRODUCTOS,
	CLEAR_ALL_PRODUCTOS,
} from './types';

const setProductos = (products) => ({
	type: SET_PRODUCTOS,
	products,
});

const setIsLoadingProductos = (isLoadingProducts) => ({
	type: SET_IS_LOADING_PRODUCTOS,
	isLoadingProducts,
});

const setErrorProductos = (errorProducts) => ({
	type: SET_ERROR_PRODUCTOS,
	errorProducts,
});

const clearErrorProductos = () => ({
	type: CLEAR_ERROR_PRODUCTOS,
});

const clearAllProductos = () => ({
	type: CLEAR_ALL_PRODUCTOS,
});

/**
 * Obtiene productos desde service
 * Seteo de productos en el storage
 */
const getProductosThunk = () => async (dispatch) => {
	dispatch(setIsLoadingProductos(true));
	try {
		const response = await getProductos();
		const {
			isCancel,
			data: {amiibo},
		} = response;
		if (response.status === 200) {
			dispatch(setProductos(amiibo));
		} else {
			dispatch(setErrorProductos(true));
		}
		dispatch(setIsLoadingProductos(false));
		return isCancel;
	} catch (error) {
		console.log('error: ', error);
	}
};

export {
	setProductos,
	setIsLoadingProductos,
	setErrorProductos,
	clearErrorProductos,
	clearAllProductos,
	getProductosThunk,
};
