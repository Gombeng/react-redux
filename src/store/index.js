import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import rootReducer from './reducer/index';

const configureStore = () => {
	return {
		...createStore(rootReducer),
	};
};

export default configureStore;
