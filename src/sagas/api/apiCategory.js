import axios from 'axios';

const authToken = localStorage.getItem('authToken');

const getCategories = async (url = '') => {
	const res = await axios.get(`http://localhost:3000/api/${url}`, {
		headers: {
			Authorization: `Bearer ${authToken}`,
		},
	});
	return res.data.data;
};

export { getCategories };
