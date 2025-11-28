import { API_URL } from '$env/static/private';

export async function load({ fetch }) {
	const apiBase = API_URL;
	let user = false;

	try {
		console.log('running reauth');
		const res = await fetch(apiBase + '/reauth', { credentials: 'include' });
		if (res.ok) {
			console.log('user LOGGED IN');
			user = true;
		} else {
			console.log('user NOT logged in');
		}
	} catch (e) {
		console.error(e);
	}
	return {
		apiBase,
		user
	};
}
