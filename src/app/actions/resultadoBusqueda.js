import { getProductos } from '../services/products.services';
import {
	SET_PRODUCTOS,
	SET_CATEGORIAS,
	SET_IS_LOADING_PRODUCTOS,
	SET_ERROR_PRODUCTOS,
	CLEAR_ERROR_PRODUCTOS,
	CLEAR_ALL_PRODUCTOS,
} from './types';

const setProductos = (productos) => ({
	type: SET_PRODUCTOS,
	productos,
});

const setCategorias = (categorias) => ({
	type: SET_CATEGORIAS,
	categorias,
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
		const { data: { items, categories } } = response;
		if (response.status === 200) {
			dispatch(setProductos(items));
			dispatch(setCategorias(categories));
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
	setCategorias,
	setIsLoadingProductos,
	setErrorProductos,
	clearErrorProductos,
	clearAllProductos,
	getProductosThunk,
};
