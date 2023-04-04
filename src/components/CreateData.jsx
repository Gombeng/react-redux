import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateData() {
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();
	const authToken = localStorage.getItem('authToken');

	return (
		<Formik
			initialValues={{
				name: '',
				is_active: true,
			}}
			onSubmit={async (values) => {
				setIsLoading(true);

				try {
					const res = await axios.post(
						'http://localhost:3000/api/category/create',
						values,
						{
							headers: {
								Authorization: `Bearer ${authToken}`,
							},
						}
					);
					window.location.reload();
					console.log('res', res);
				} catch (error) {
					console.log('error', error);
					// pass error
					if (typeof error.response.data.errors === 'object') {
						alert(
							`error => ${error.response.data.errors[0].param} ${error.response.data.errors[0].msg}`
						);
					}
					// email err
					else {
						alert(`error => ${error.response.data.errors}`);
					}
				}

				setIsLoading(false);
			}}
		>
			<Form>
				<label htmlFor="name" className="form-label">
					Name
				</label>
				<Field
					id="name"
					name="name"
					type="text"
					className="form-control"
					placeholder="Jane Doe"
					required
				/>

				<label htmlFor="name" className="form-label">
					Status
				</label>
				<Field as="select" name="is_active" className="form-select">
					<option value="true">Active</option>
					<option value="false">Incative</option>
				</Field>

				<button className="btn btn-success p-2 px-4 mt-3" type="submit">
					{!isLoading ? (
						'Add Data'
					) : (
						<div className="spinner-border" role="status">
							<span className="visually-hidden">Loading...</span>
						</div>
					)}
				</button>
			</Form>
		</Formik>
	);
}
