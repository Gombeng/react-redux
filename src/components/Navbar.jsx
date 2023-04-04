import { Link, useNavigate } from 'react-router-dom';
export default function Navbar() {
	const navigate = useNavigate();
	const handleClick = () => {
		const confirm = window.confirm('Logout?');
		if (confirm) {
			localStorage.removeItem('authToken');
			navigate('/login');
		}
	};
	return (
		<nav className="navbar mb-4 bg-body-secondary">
			<div className="container">
				<Link className="navbar-brand" to={'/'}>
					CRUD using external API
				</Link>
				<div>
					<Link className="btn btn-primary p-2 px-4 me-2" to={'/profile'}>
						Profile
					</Link>

					<button onClick={handleClick} className="btn btn-danger p-2 px-4">
						Logout
					</button>
				</div>
			</div>
		</nav>
	);
}
