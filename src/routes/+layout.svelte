<script>
	let { children } = $props();
</script>

<header>
	<nav>
		<a href="/">home</a>
		<a href="/write">write</a>
	</nav>
</header>
{@render children()}
