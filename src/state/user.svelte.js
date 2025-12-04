import { setContext, getContext } from 'svelte';

let user = $state({ loggedIn: false });

export function setUser(loggedIn) {
	user.loggedIn = loggedIn;
	setContext('user', user);
}

export function getUser() {
	return getContext('user');
}

export function loginUser() {
	user.loggedIn = true;
}

export function logoutUser() {
	user.loggedIn = false;
}
