import {
    createStore,
    applyMiddleware,
    compose,
    combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import resultado from './app/reducers/resultadoBusqueda';

const rootReducer = combineReducers({
    resultado,
});

const middlewares = [thunk];

/* Agrega middlewares */
const configureStore = () => createStore(
    rootReducer,
    compose(applyMiddleware(...middlewares)),
);

export default configureStore;
