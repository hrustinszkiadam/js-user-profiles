import { BASE_URL } from '../../api';

type ProfilePictureProps = {
	id: number;
	height?: 'large';
};
const ProfilePicture = ({ id, height }: ProfilePictureProps) => {
	return (
		<img
			src={`${BASE_URL}/users/${id}/profile`}
			alt='Profile Picture'
			className={`rounded-full object-cover ${height == 'large' ? 'h-20 w-20 md:h-40 md:w-40' : 'h-14 w-14 md:h-28 md:w-28'}`}
		/>
	);
};

export default ProfilePicture;
