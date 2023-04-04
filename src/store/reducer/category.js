const initialState = {
	loading: false,
	data: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'FETCHING_DATA':
			return {
				...state,
				loading: true,
			};
		case 'SUCCESS_GET_DATA':
			return {
				...state,
				loading: false,
				data: action.payload,
			};

		default:
			return state;
	}
};
