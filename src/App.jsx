import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainApp, Home, Login, Register, NotFound, Profile } from './pages';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="login" element={<Login />} />
				<Route exact path="register" element={<Register />} />
				<Route exact path="/" element={<MainApp />}>
					<Route index element={<Home />} />
					<Route exact path="home" element={<Home />} />
					<Route exact path="profile" element={<Profile />} />
					<Route exact path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
