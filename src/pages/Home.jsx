import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';
import moment from 'moment';
import { CreateData } from '../components';
import Table from './../components/Table';
import { useSelector, useDispatch } from 'react-redux';

function Home(props) {
	const authToken = localStorage.getItem('authToken');
	// const [categories, setCategories] = useState([]);
	const category = useSelector((state) => state.category);
	const dispatch = useDispatch();

	const getData = async (url = '') => {
		const res = await axios.get(`http://localhost:3000/api/${url}`, {
			headers: {
				Authorization: `Bearer ${authToken}`,
			},
		});
		dispatch({
			type: 'SUCCESS_GET_DATA',
			payload: res.data.data,
		});
		return res.data.data;
	};

	useEffect(() => {
		getData('category?page=1&limit=15');
	}, []);

	const removeData = async (url = '') => {
		const res = await axios.delete(`http://localhost:3000/api/${url}`, {
			headers: {
				Authorization: `Bearer ${authToken}`,
			},
		});

		return res.data.data;
	};

	console.log(category);
	// const {
	// 	isLoading,
	// 	error,
	// 	data: categoryData,
	// } = useQuery({
	// 	queryKey: ['category'],
	// 	queryFn: () => getData('category?page=1&limit=15'),
	// });

	const handleDelete = (e) => {
		let cofirm = window.confirm('Delete data ?');

		if (confirm) removeData(`category/${e.id}`);
		// window.location.reload();
	};

	// console.log('categoryData', categoryData);
	return (
		<>
			<CreateData />
			<hr className="mb-2" />

			<Table
				isLoading={false}
				categoryData={category.data}
				handleDelete={handleDelete}
			/>
		</>
	);
}

export default Home;
