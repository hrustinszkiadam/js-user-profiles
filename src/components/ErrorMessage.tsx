import { useUsers } from '../contexts/UsersContext';

const ErrorMessage = () => {
	const { error } = useUsers();

	return (
		<div className='flex flex-col gap-3 text-center text-xl'>
			{error &&
				error.map((err, index) => (
					<div
						key={index}
						className='text-red-500'
					>
						{err}
					</div>
				))}
		</div>
	);
};

export default ErrorMessage;
