import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
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
				'http://localhost:3000/api/user/register',
				values
			);
			console.log('res', res);
			navigate('/login');
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
				onSubmit={async (values) => handleSubmit(values)}
			>
				<Form>
					<label htmlFor="name" className="form-label">
						Full Name
					</label>
					<Field
						id="name"
						name="name"
						type="text"
						className="form-control"
						placeholder="Jane Doe"
						required
					/>

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
								'Register'
							) : (
								<div className="spinner-border" role="status">
									<span className="visually-hidden">Loading...</span>
								</div>
							)}
						</button>

						<Link to={'/login'} className="btn  p-2 px-4">
							Login
						</Link>
					</div>
				</Form>
			</Formik>
		</div>
	);
}
