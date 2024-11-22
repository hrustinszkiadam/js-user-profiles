import ProfilePicture from './ProfilePicture';
import DeleteProfileButton from './DeleteProfileButton';
import { useUsers } from '../../contexts/UsersContext';
import { useEffect, useState } from 'react';

type ProfilePictureInputProps = {
	id: number;
	onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const ProfilePictureInput = ({
	id,
	onFileChange,
}: ProfilePictureInputProps) => {
	const { doesProfilePictureExist } = useUsers();

	const [profilePictureExists, setProfilePictureExists] = useState(false);

	useEffect(() => {
		const checkProfilePicture = async () => {
			const exists = await doesProfilePictureExist(id);
			setProfilePictureExists(exists);
		};

		if (id != -1) checkProfilePicture();
	}, [id, doesProfilePictureExist]);

	return (
		<div className='flex w-full flex-row items-center justify-center gap-x-5 md:gap-x-10'>
			{profilePictureExists ? (
				<>
					<ProfilePicture
						id={id}
						height='large'
					/>
					<DeleteProfileButton id={id} />
				</>
			) : (
				<input
					type='file'
					accept='image/*'
					onChange={onFileChange}
					className='cursor-pointer'
				/>
			)}
		</div>
	);
};

export default ProfilePictureInput;
