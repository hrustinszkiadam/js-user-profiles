type NewUserButtonProps = {
	onClick: () => void;
};
const NewUserButton = ({ onClick }: NewUserButtonProps) => {
	return (
		<div
			className='flex h-20 w-20 cursor-pointer items-center justify-center rounded-full text-5xl hover:bg-gray-800 md:text-7xl'
			onClick={onClick}
		>
			+
		</div>
	);
};

export default NewUserButton;
