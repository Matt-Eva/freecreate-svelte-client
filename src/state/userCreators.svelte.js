import { setContext, getContext } from 'svelte';

const initialState = { creators: [], isFetched: false };
let userCreators = $state(initialState);

export function setUserCreators() {
	setContext('userCreators', userCreators);
}

export function getUserCreators() {
	return getContext('userCreators');
}

export function populateUserCreators(creators) {
	userCreators.creators = creators;
	userCreators.loggedIn = true;
}

export function addUserCreator(creator) {
	userCreators.creators.push(creator);
}

export function removeUserCreator(creatorId) {
	userCreators.creators = userCreators.creators.filter((c) => c.id !== creatorId);
}

export function clearUserCreators() {
	userCreators.creators = [];
	userCreators.isFetched = false;
}
