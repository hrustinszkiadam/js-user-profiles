type FormButtonProps = {
	onClick: () => void;
	text: string;
};
const FormButton = ({ onClick, text }: FormButtonProps) => {
	return (
		<div
			className='flex cursor-pointer items-center justify-center rounded-3xl p-4 text-2xl hover:bg-gray-800 md:text-4xl'
			onClick={onClick}
		>
			{text}
		</div>
	);
};

export default FormButton;
