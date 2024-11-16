import { useState, useEffect } from 'react';
import { useUsers } from './contexts/UsersContext';
import NewUserButton from './components/NewUserButton';
import List from './components/UsersList/List';
import UserForm from './components/UserForm/UserForm';
import ErrorMessage from './components/ErrorMessage';

const App = () => {
	const { getUsers, setError, modifiedUser } = useUsers();
	const [isFormEnabled, setIsFormEnabled] = useState(false);

	useEffect(() => {
		getUsers();
	}, [getUsers]);

	useEffect(() => {
		setError(null);
	}, [isFormEnabled, setError]);

	useEffect(() => {
		if (modifiedUser) {
			setIsFormEnabled(true);
		}
	}, [modifiedUser]);

	return (
		<div className='flex h-screen max-h-screen flex-col items-center justify-center'>
			<ErrorMessage />
			{!isFormEnabled ? (
				<div className='flex flex-col items-center overflow-auto'>
					<NewUserButton
						onClick={() => {
							setIsFormEnabled(true);
						}}
					/>
					<List />
				</div>
			) : (
				<UserForm
					setIsFormEnabled={setIsFormEnabled}
					data={modifiedUser}
				/>
			)}
		</div>
	);
};

export default App;
