<script>
	let { children, data } = $props();
	import { setContext } from 'svelte';

	let user = $state({ loggedIn: data.user });
	setContext('user', user);

	let searchState = $state({
		writingType: 'All Writing',
		datePosted: 'All Time',
		tags: []
	});
	setContext('searchState', searchState);

	let userCreators = $state({ userCreators: [], isFetched: false });
	setContext('userCreators', userCreators);

	let testContext = $state({ test: 'test' });
	setContext('testContext', testContext);
</script>

<header>
	<nav>
		<h1><a href="/">FreeCreate</a></h1>
		{#if !user.loggedIn}
			<a href="/">browse</a>
		{/if}
		<a href="/about">about</a>
		<a href="/donate">donate</a>
		{#if !user.loggedIn}
			<a href="/login">login</a>
		{:else}
			<a href="/profile">profile</a>
		{/if}
	</nav>
</header>
{#if user.loggedIn}
	<aside>
		<nav>
			<ul>
				<li>
					<a href="/">Browse</a>
				</li>

				<li><a href="/write">Write</a></li>
				<li><a href="/my-writing">My Writing</a></li>
				<li>
					<a href="/my-library">My Library</a>
				</li>
			</ul>
		</nav>
	</aside>
{/if}
{@render children()}
