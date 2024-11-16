import { useUsers } from '../../contexts/UsersContext';
import { User } from '../../types';

type UserActionsProps = {
	user: User;
};
const UserActions = ({ user }: UserActionsProps) => {
	const { removeUser, setModifiedUser, setError } = useUsers();

	return (
		<div className='absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-200 hover:opacity-100'>
			<div className='flex h-full w-full flex-grow items-center justify-between bg-gray-900 bg-opacity-50'>
				<button
					className='flex h-full w-full items-center justify-center bg-blue-500 bg-opacity-15 text-2xl hover:cursor-pointer hover:bg-opacity-25'
					onClick={() => {
						setModifiedUser(user);
					}}
				>
					Modify
				</button>
				<button
					className='flex h-full w-full items-center justify-center bg-red-500 bg-opacity-15 text-4xl hover:cursor-pointer hover:bg-opacity-25'
					onClick={async () => {
						setError(null);
						await removeUser(user.id);
					}}
				>
					X
				</button>
			</div>
		</div>
	);
};

export default UserActions;
