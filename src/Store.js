import {Plataform} from 'react-native';
import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import devTools from 'remote-redux-dev-tools';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import RootReducer from './Reducers';

const middleware = applyMiddleware(thunk, promise, logger);

const Store = createStore(
    RootReducer,
    compose(
        middleware,
        devTools({
            name: Plataform.OS,
            host: 'localhost',
            port: 5678, 
        }),
    )
);

export default Store;