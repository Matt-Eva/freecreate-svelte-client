<script>
	const { data } = $props();
	const apiBase = data.props.apiBase;
	async function logout() {
		await fetch(apiBase + '/logout', {
			credentials: 'include',
			method: 'Delete'
		});
	}
</script>

<div>
	<button onclick={logout}>logout</button>
</div>
