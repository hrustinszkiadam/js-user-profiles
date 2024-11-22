import { useUsers } from '../../contexts/UsersContext';

type DeleteProfileButtonProps = {
	id: number;
};
const DeleteProfileButton = ({ id }: DeleteProfileButtonProps) => {
	const { removeProfile } = useUsers();

	const handleClick = async () => {
		await removeProfile(id);
	};

	return (
		<button
			className='p-3 text-3xl text-red-500 md:text-5xl'
			onClick={handleClick}
		>
			X
		</button>
	);
};

export default DeleteProfileButton;
