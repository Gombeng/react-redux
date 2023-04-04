import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		const user = localStorage.getItem('authToken');

		if (user) {
			navigate('/');
		}
	}, [navigate]);

	const handleSubmit = async (values) => {
		setIsLoading(true);

		try {
			const res = await axios.post(
				'http://localhost:3000/api/user/login',
				values
			);
			console.log('res', res);
			localStorage.setItem('authToken', res.data.data.token);
			// console.log('res', res.data.data.token);
			navigate('/');
		} catch (error) {
			console.log('error', error);
			// pass error
			if (typeof error.response.data.errors === 'object') {
				alert(
					`${error.response.data.errors[0].param} ${error.response.data.errors[0].msg}`
				);
			}
			// email err
			else {
				alert(`${error.response.data.errors}`);
			}
		}

		setIsLoading(false);
	};

	return (
		<div className="container vh-100 d-flex justify-content-center align-items-center">
			<Formik
				initialValues={{
					name: '',
					email: '',
					password: '',
				}}
				onSubmit={(values) => handleSubmit(values)}
			>
				<Form>
					<label htmlFor="email" className="form-label">
						Email
					</label>
					<Field
						id="email"
						name="email"
						type="email"
						className="form-control"
						placeholder="janedoe@gmail.com"
						required
					/>

					<label htmlFor="password" className="form-label">
						Password
					</label>
					<Field
						id="password"
						name="password"
						type="password"
						className="form-control"
						placeholder="********"
						required
					/>

					<div className="mt-3">
						<button className="btn btn-primary p-2 px-4 me-2" type="submit">
							{!isLoading ? (
								'Login'
							) : (
								<div className="spinner-border" role="status">
									<span className="visually-hidden">Loading...</span>
								</div>
							)}
						</button>

						<Link to={'/register'} className="btn  p-2 px-4">
							Register
						</Link>
					</div>
				</Form>
			</Formik>
		</div>
	);
}
