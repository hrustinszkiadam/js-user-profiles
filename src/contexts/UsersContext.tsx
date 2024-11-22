/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, PropsWithChildren } from 'react';
import {
	get,
	remove,
	create,
	modify,
	uploadProfilePicture,
	removeProfilePicture,
	checkProfilePicture,
} from '../api';
import { User, UsersContextType } from '../types';
import { AxiosError } from 'axios';

const UsersContext = createContext<UsersContextType>({
	users: [],
	error: null,
	setError: () => {},
	modifiedUser: null,
	setModifiedUser: () => {},
	getUsers: async () => false,
	createUser: async () => false,
	modifyUser: async () => false,
	removeUser: async () => false,
	uploadProfile: async () => false,
	removeProfile: async () => false,
	doesProfilePictureExist: async () => false,
});
export const useUsers = () => useContext(UsersContext);

const UsersProvider = ({ children }: PropsWithChildren) => {
	const [users, setUsers] = useState<User[]>([]);
	const [error, setError] = useState<string[] | null>(null);
	const [modifiedUser, setModifiedUser] = useState<User | null>(null);

	const handleError = (err: AxiosError) => {
		const message = (err.response?.data as { message: string[] }).message;

		if (!Array.isArray(message)) setError([message]);
		else setError(message);
	};

	const getUsers = async (): Promise<boolean> => {
		try {
			const data = await get();
			setUsers(data);
			return true;
		} catch (err) {
			handleError(err as AxiosError);
			return false;
		}
	};

	const createUser = async (email: string, age: number): Promise<boolean> => {
		try {
			await create(email, age);
			getUsers();
			return true;
		} catch (err) {
			handleError(err as AxiosError);
			return false;
		}
	};

	const modifyUser = async (
		id: number,
		email: string,
		age: number,
	): Promise<boolean> => {
		try {
			await modify(id, email, age);
			setModifiedUser(null);
			getUsers();
			return true;
		} catch (err) {
			handleError(err as AxiosError);
			return false;
		}
	};

	const removeUser = async (id: number): Promise<boolean> => {
		try {
			await remove(id);
			getUsers();
			return true;
		} catch (err) {
			handleError(err as AxiosError);
			return false;
		}
	};

	const uploadProfile = async (id: number, file: File): Promise<boolean> => {
		try {
			await uploadProfilePicture(id, file);
			getUsers();
			return true;
		} catch (err) {
			handleError(err as AxiosError);
			return false;
		}
	};

	const removeProfile = async (id: number): Promise<boolean> => {
		try {
			await removeProfilePicture(id);
			getUsers();
			return true;
		} catch (err) {
			handleError(err as AxiosError);
			return false;
		}
	};

	const doesProfilePictureExist = async (id: number): Promise<boolean> => {
		try {
			const res = await checkProfilePicture(id);
			return res;
		} catch (err) {
			handleError(err as AxiosError);
			return false;
		}
	};

	return (
		<UsersContext.Provider
			value={{
				users,
				error,
				setError,
				modifiedUser,
				setModifiedUser,
				getUsers,
				createUser,
				modifyUser,
				removeUser,
				uploadProfile,
				removeProfile,
				doesProfilePictureExist,
			}}
		>
			{children}
		</UsersContext.Provider>
	);
};

export default UsersProvider;
