import React from 'react';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
// const queryClient = new QueryClient();
import { Provider } from 'react-redux';
import configureStore from './store/index';

const store = configureStore();

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		{/* <QueryClientProvider client={queryClient}>
			<App />
		</QueryClientProvider> */}
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
