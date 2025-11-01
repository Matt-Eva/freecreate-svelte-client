<script>
	import { setContext, getContext, onMount } from 'svelte';
	import { goto } from '$app/navigation';
	const { data } = $props();
	const apiBase = data.props.apiBase;
	let user = getContext('user');

	onMount(() => {
		if (!user.loggedIn) {
			goto('/login');
		}
	});

	async function logout() {
		await fetch(apiBase + '/logout', {
			credentials: 'include',
			method: 'Delete'
		});
		user.loggedIn = false;
		goto('/');
	}
</script>

<div>
	<button onclick={logout}>logout</button>
</div>
