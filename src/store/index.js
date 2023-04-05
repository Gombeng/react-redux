import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer/index';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const configureStore = compose(applyMiddleware(sagaMiddleware))(createStore)(
	rootReducer
);

sagaMiddleware.run(rootSaga);

export default configureStore;
