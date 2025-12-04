import { getContext, setContext } from 'svelte';

let searchState = $state({
	writingType: 'All Writing',
	datePosted: 'All Time',
	tags: []
});

export function setSearch() {
	setContext('search', searchState);
}

export function getSearch() {
	return getContext('search');
}
