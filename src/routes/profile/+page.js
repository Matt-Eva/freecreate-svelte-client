import { getContext } from 'svelte';

export const load = async ({ fetch, parent }) => {
	const data = await parent();
	const apiBase = data.apiBase;
};
