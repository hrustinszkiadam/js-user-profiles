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
			className={`rounded-full object-cover ${height == 'large' ? 'W-28 h-28 md:h-48 md:w-48' : 'h-14 w-14 md:h-28 md:w-28'}`}
		/>
	);
};

export default ProfilePicture;
