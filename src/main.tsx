import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import UsersProvider from './contexts/UsersContext.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route
					path='*'
					element={
						<UsersProvider>
							<App />
						</UsersProvider>
					}
				/>
			</Routes>
		</BrowserRouter>
	</StrictMode>,
);
