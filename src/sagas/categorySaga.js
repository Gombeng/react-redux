import { call, put, takeEvery } from 'redux-saga/effects';
import { getCategories } from './api/apiCategory';

function* fetchCategories(action) {
	try {
		const categories = yield call(getCategories, 'category?page=1&limit=15');
		yield put({
			type: 'SUCCESS_GET_DATA',
			payload: categories,
		});
	} catch (error) {
		console.log(error);
	}
}

function* categorySaga() {
	yield takeEvery('FETCHING_DATA', fetchCategories);
}

export default categorySaga;
