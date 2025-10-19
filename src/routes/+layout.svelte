<script>
	let { children } = $props();
</script>

<header>
	<nav>
		<h1><a href="/">FreeCreate</a></h1>
		<a href="/login">login</a>
		<a href="/profile">profile</a>
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
