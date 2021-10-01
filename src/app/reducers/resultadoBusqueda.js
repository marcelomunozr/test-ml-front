import {combineReducers} from 'redux';
import {
	SET_PRODUCTOS,
	SET_IS_LOADING_PRODUCTOS,
	SET_ERROR_PRODUCTOS,
	CLEAR_ERROR_PRODUCTOS,
	CLEAR_ALL_PRODUCTOS,
} from '../actions/types';

const productosReducers = (state = null, action) => {
	switch (action.type) {
		case SET_PRODUCTOS:
			return action.productOs;
		case CLEAR_ERROR_PRODUCTOS:
			return null;
		case CLEAR_ALL_PRODUCTOS:
			return null;
		default:
			return state;
	}
};

const isLoadingProductosReducers = (state = true, action) => {
	switch (action.type) {
		case SET_IS_LOADING_PRODUCTOS:
			return action.isLoadingProductOs;
		case CLEAR_ALL_PRODUCTOS:
			return true;
		default:
			return state;
	}
};

const errorProductosReducers = (state = false, action) => {
	switch (action.type) {
		case SET_ERROR_PRODUCTOS:
			return action.errorProductOs;
		case CLEAR_ERROR_PRODUCTOS:
			return false;
		case CLEAR_ALL_PRODUCTOS:
			return false;
		default:
			return state;
	}
};

export default combineReducers({
	productOs: productosReducers,
	isLoadingProductOs: isLoadingProductosReducers,
	errorProductOs: errorProductosReducers,
});
