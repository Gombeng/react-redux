import React, { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { Navbar } from '../components';

const MainApp = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const user = localStorage.getItem('authToken');

		if (!user) {
			navigate('/login');
		}

		// token expired
		// setTimeout(() => {
		// 	localStorage.removeItem('authToken');
		// 	navigate('/login');
		// }, 1000);
	}, [navigate]);

	return (
		<div>
			<Navbar />
			<div className="container">
				<Outlet />
			</div>
		</div>
	);
};

export default MainApp;
