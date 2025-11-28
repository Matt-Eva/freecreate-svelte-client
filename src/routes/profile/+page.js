import { getContext } from 'svelte';

export const load = async ({ fetch, parent }) => {
	const data = await parent();
	const apiBase = data.apiBase;
	try {
		const res = await fetch(apiBase + '/user-creators', { credentials: 'include' });
		if (res.ok) {
			const data = await res.json();
			return data;
		}
	} catch (error) {
		console.error(error);
	}
};
