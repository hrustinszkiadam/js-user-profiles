import ProfilePicture from '../ProfilePicture/ProfilePicture';
import { User as U } from '../../types';
import UserActions from './UserActions';

type UserProps = {
	user: U;
};
const User = ({ user }: UserProps) => {
	return (
		<div className='relative'>
			<UserActions user={user} />
			<div className='flex flex-grow cursor-pointer flex-row items-center justify-between gap-x-10 rounded-md p-3 text-lg'>
				<div className='w-14 md:w-28'>
					<ProfilePicture id={user.id} />
				</div>
				<div className='w-48 text-center md:w-96'>{user.email}</div>
				<div className='w-5 md:w-10'>{user.age}</div>
			</div>
		</div>
	);
};

export default User;
