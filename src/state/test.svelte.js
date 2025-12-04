import { setContext, getContext } from 'svelte';

let test = $state({ test: 'test' });

export function getTestState() {
	return getContext('test');
}

export function setTestState() {
	setContext('test', test);
}

export function updateTestState() {
	test.test = 'boom';
}
