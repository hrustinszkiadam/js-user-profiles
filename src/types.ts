type User = {
	id: number;
	age: number;
	email: string;
	profileMime: string | null;
};

type UsersContextType = {
	users: User[];
	error: string[] | null;
	setError: (error: string[] | null) => void;
	modifiedUser: User | null;
	setModifiedUser: (user: User | null) => void;
	getUsers: () => Promise<boolean>;
	createUser: (email: string, age: number) => Promise<false | number>;
	modifyUser: (id: number, email: string, age: number) => Promise<boolean>;
	removeUser: (id: number) => Promise<boolean>;
	uploadProfile(id: number, file: File): Promise<boolean>;
	removeProfile(id: number): Promise<boolean>;
	doesProfilePictureExist(id: number): Promise<boolean>;
};

export type { User, UsersContextType };
