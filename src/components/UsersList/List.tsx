import { useUsers } from '../../contexts/UsersContext';
import User from './User';

const List = () => {
	const { users } = useUsers();
	return (
		<div className='flex h-fit w-full flex-col items-center overflow-auto'>
			{users.map((user) => (
				<User
					key={user.id}
					user={user}
				/>
			))}
		</div>
	);
};

export default List;
