import { BASE_URL } from '../../api';

type ProfilePictureProps = {
	id: number;
};
const ProfilePicture = ({ id }: ProfilePictureProps) => {
	return (
		<img
			src={`${BASE_URL}/users/${id}/profile`}
			alt='Profile Picture'
			className='h-14 rounded-full md:h-28'
		/>
	);
};

export default ProfilePicture;
