<script>
	let { children } = $props();
</script>

<header>
	<nav>
		<h1><a href="/">FreeCreate</a></h1>
	</nav>
</header>
<aside>
	<ul>
		<li><a href="/write">Write</a></li>
		<li><a href="/my-writing">My writing</a></li>
	</ul>
</aside>
{@render children()}
