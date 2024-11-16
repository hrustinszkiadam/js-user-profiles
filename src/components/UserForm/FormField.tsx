type FormFieldProps = {
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	type: string;
	placeholder: string;
	width: string;
};
const FormField = ({
	type,
	placeholder,
	width,
	value,
	onChange,
}: FormFieldProps) => {
	return (
		<input
			type={type}
			className={`rounded-3xl p-4 text-xl md:text-3xl ${width}`}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
		/>
	);
};

export default FormField;
