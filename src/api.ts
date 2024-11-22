import axios, { Axios } from 'axios';

const BASE_URL = 'http://localhost:3000';

const apiService: Axios = axios.create({
	baseURL: BASE_URL,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
});

const get = async (id?: number) => {
	const res = await apiService.get(id ? `/users/${id}` : '/users');
	if (res.status > 204) {
		throw new Error(res.data);
	}
	return await res.data;
};

const remove = async (id: number) => {
	const res = await apiService.delete(`/users/${id}`);
	if (res.status > 204) {
		throw new Error(res.data);
	}
};

const create = async (email: string, age: number) => {
	const res = await apiService.post('/users', { email, age });
	if (res.status > 204) {
		throw new Error(res.data);
	}
	return res.data.id;
};

const modify = async (id: number, email: string, age: number) => {
	const res = await apiService.patch(`/users/${id}`, { email, age });
	if (res.status > 204) {
		throw new Error(res.data);
	}
};

const uploadProfilePicture = async (id: number, file: File) => {
	const formData = new FormData();
	formData.append('file', file);
	const res = await apiService.put(`/users/${id}/profile`, formData, {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	});
	if (res.status > 204) {
		throw new Error(res.data);
	}
};

const removeProfilePicture = async (id: number) => {
	const res = await apiService.delete(`/users/${id}/profile`);
	if (res.status > 204) {
		throw new Error(res.data);
	}
};

const checkProfilePicture = async (id: number) => {
	const res = await apiService.get(`/users/${id}/profile`);
	if (res.status > 204) {
		throw new Error(res.data);
	}

	if (res.headers['content-type'] === 'image/svg+xml') {
		return false;
	}
	return true;
};

export {
	BASE_URL,
	get,
	remove,
	create,
	modify,
	uploadProfilePicture,
	removeProfilePicture,
	checkProfilePicture,
};
