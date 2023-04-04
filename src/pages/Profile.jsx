import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Forms } from '../components';

export default function Profile() {
	const authToken = localStorage.getItem('authToken');

	const getData = async (url = '') => {
		const res = await axios.get(`http://localhost:3000/api/${url}`, {
			headers: {
				Authorization: `Bearer ${authToken}`,
			},
		});

		return res.data.data;
	};

	const {
		isLoading,
		error,
		data: profileData,
	} = useQuery({
		queryKey: ['profile'],
		queryFn: () => getData('user/profile'),
	});
	console.log('profileData', profileData);

	return (
		<div>
			<div className="d-flex justify-content-between">
				<h3 className="mb-3">User Profile</h3>
				<button className="btn btn-warning p-2 px-4">Edit</button>
			</div>

			<Forms
				label={'Full Name'}
				value={profileData?.name}
				readonly={false}
				disabled={true}
			/>
			<Forms
				label={'Email'}
				value={profileData?.email}
				readonly={true}
				disabled={true}
			/>
		</div>
	);
}
