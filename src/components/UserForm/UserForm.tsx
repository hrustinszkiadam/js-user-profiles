import { useState } from 'react';
import { useUsers } from '../../contexts/UsersContext';
import { User } from '../../types';
import FormButton from './FormButton';
import FormField from './FormField';

type UserFormProps = {
	setIsFormEnabled: React.Dispatch<React.SetStateAction<boolean>>;
	data: User | null;
};
const UserForm = ({ setIsFormEnabled, data }: UserFormProps) => {
	const { createUser, modifyUser, setModifiedUser } = useUsers();

	const id = data?.id || -1;
	const [email, setEmail] = useState(data?.email || '');
	const [age, setAge] = useState(data?.age.toString() || '');

	const handleSubmit = async () => {
		const success =
			id === -1
				? await createUser(email, +age)
				: await modifyUser(id, email, +age);

		if (success) setIsFormEnabled(false);
	};

	return (
		<div className='flex h-fit w-full flex-col items-center justify-center gap-y-5 md:gap-y-10'>
			<div className='flex flex-col items-center justify-center gap-5 md:flex-row'>
				<FormField
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type='email'
					placeholder='Email'
					width='w-full md:w-3/4'
				/>
				<FormField
					value={age}
					onChange={(e) => setAge(e.target.value)}
					type='number'
					placeholder='Age'
					width='w-full md:w-1/4'
				/>
			</div>
			<div className='flex flex-row items-center justify-center gap-x-10'>
				<FormButton
					onClick={() => {
						setIsFormEnabled(false);
						setModifiedUser(null);
					}}
					text='Back'
				/>
				<FormButton
					onClick={handleSubmit}
					text={id === -1 ? 'Create' : 'Modify'}
				/>
			</div>
		</div>
	);
};
export default UserForm;
