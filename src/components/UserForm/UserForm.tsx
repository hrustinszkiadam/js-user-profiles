import { useState } from 'react';
import { useUsers } from '../../contexts/UsersContext';
import { User } from '../../types';
import FormButton from './FormButton';
import FormField from './FormField';
import ProfilePictureInput from '../ProfilePicture/ProfilePictureInput';

type UserFormProps = {
	setIsFormEnabled: React.Dispatch<React.SetStateAction<boolean>>;
	data: User | null;
};
const UserForm = ({ setIsFormEnabled, data }: UserFormProps) => {
	const { createUser, modifyUser, setModifiedUser, uploadProfile } =
		useUsers();

	const id = data?.id || -1;
	const [email, setEmail] = useState(data?.email || '');
	const [age, setAge] = useState(data?.age.toString() || '');
	const [profileFile, setProfileFile] = useState<File | null>(null);

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			setProfileFile(
				e.target.files[0].type === 'image/svg+xml'
					? null
					: e.target.files[0],
			);
		} else setProfileFile(null);
	};

	const handleSubmit = async () => {
		const success =
			id === -1
				? await createUser(email, +age)
				: await modifyUser(id, email, +age);

		if (!success) return;

		if (!profileFile) {
			setIsFormEnabled(false);
			return;
		}

		if (id != -1) {
			const profileSuccess = await uploadProfile(id, profileFile);
			if (profileSuccess) setIsFormEnabled(false);
		}
	};

	return (
		<div className='flex h-fit w-full flex-col items-center justify-center gap-y-5 md:gap-y-10'>
			<ProfilePictureInput
				id={id}
				onFileChange={handleFileChange}
			/>
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
