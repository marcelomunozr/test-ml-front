import {combineReducers} from 'redux';
import {
	SET_PRODUCTOS,
	SET_IS_LOADING_PRODUCTOS,
	SET_ERROR_PRODUCTOS,
	CLEAR_ERROR_PRODUCTOS,
	CLEAR_ALL_PRODUCTOS,
} from '../actions/types';

const productosReducers = (state = [], action) => {
	switch (action.type) {
		case SET_PRODUCTOS:
			return action.productos;
		case CLEAR_ERROR_PRODUCTOS:
			return [];
		case CLEAR_ALL_PRODUCTOS:
			return [];
		default:
			return state;
	}
};

const isLoadingProductosReducers = (state = true, action) => {
	switch (action.type) {
		case SET_IS_LOADING_PRODUCTOS:
			return action.isLoadingProductos;
		case CLEAR_ALL_PRODUCTOS:
			return true;
		default:
			return state;
	}
};

const errorProductosReducers = (state = false, action) => {
	switch (action.type) {
		case SET_ERROR_PRODUCTOS:
			return action.errorProductos;
		case CLEAR_ERROR_PRODUCTOS:
			return false;
		case CLEAR_ALL_PRODUCTOS:
			return false;
		default:
			return state;
	}
};

export default combineReducers({
	productos: productosReducers,
	isLoadingProductos: isLoadingProductosReducers,
	errorProductos: errorProductosReducers,
});
