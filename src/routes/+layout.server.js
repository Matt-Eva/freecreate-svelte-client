import { API_URL } from '$env/static/private';

export async function load() {
	const apiBase = API_URL;

	return {
		props: {
			apiBase
		}
	};
}
