import { combineReducers } from 'redux';
import category from './category';

const indexReducer = combineReducers({
	category: category,
});

export default indexReducer;
