import { getProductos } from '../services/products.services';
import {
	SET_PRODUCTOS,
	SET_IS_LOADING_PRODUCTOS,
	SET_ERROR_PRODUCTOS,
	CLEAR_ERROR_PRODUCTOS,
	CLEAR_ALL_PRODUCTOS,
} from './types';

const setProductos = (productos) => ({
	type: SET_PRODUCTOS,
	productos,
});

const setIsLoadingProductos = (isLoadingProductos) => ({
	type: SET_IS_LOADING_PRODUCTOS,
	isLoadingProductos,
});

const setErrorProductos = (errorProductos) => ({
	type: SET_ERROR_PRODUCTOS,
	errorProductos,
});

const clearErrorProductos = () => ({
	type: CLEAR_ERROR_PRODUCTOS,
});

const clearAllProductos = () => ({
	type: CLEAR_ALL_PRODUCTOS,
});

/**
 * Obtiene productos desde service
 * Guardado de productos en redux state
 */
const getProductosThunk = (valueToSearch) => async (dispatch) => {
	dispatch(setErrorProductos(false));
	dispatch(setIsLoadingProductos(true));
	try {
		const response = await getProductos(valueToSearch);
		const { data: { items } } = response;
		if (response.status === 200) {
			dispatch(setProductos(items));
		} else {
			dispatch(setErrorProductos(true));
		}
		dispatch(setIsLoadingProductos(false));
	} catch (error) {
		console.log('error: ', error);
		dispatch(setErrorProductos(true));
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
