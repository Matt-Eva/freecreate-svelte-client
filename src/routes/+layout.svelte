<script>
	import { setContext } from 'svelte';
	let { children, data } = $props();
	let user = $state({ loggedIn: data.props.user });
	setContext('user', user);
</script>

<header>
	<nav>
		<h1><a href="/">FreeCreate</a></h1>
		{#if !user.loggedIn}
			<a href="/login">login</a>
		{:else}
			<a href="/profile">profile</a>
		{/if}
	</nav>
</header>
<aside>
	<nav>
		<ul>
			<li>
				<a href="/">Browse</a>
				<!-- <ul>
					<li><a href="/">Fiction</a></li>
					<li><a href="/essay-blog">Essays & Blogs</a></li>
					<li><a href="/poetry">Poetry</a></li>
				</ul> -->
			</li>
			<li><a href="/write">Write</a></li>
			<li><a href="/my-writing">My Writing</a></li>
			<li>
				<a href="/my-library">My Library</a>
			</li>
		</ul>
	</nav>
</aside>
{@render children()}
