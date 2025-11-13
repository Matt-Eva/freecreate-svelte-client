<script>
	import { getContext } from 'svelte';
	const user = getContext('user');
</script>

<div>
	<a href="/">Explore</a>
	{#if user.loggedIn}
		<a href="/subscriptions">Subscriptions</a>
	{/if}
	<a href="/search">Search</a>
	<a href="/text-search">Text Search</a>
</div>
