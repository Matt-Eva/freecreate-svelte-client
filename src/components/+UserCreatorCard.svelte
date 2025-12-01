<script>
	const { creator, apiBase } = $props();
	async function deleteCreator() {
		try {
			const res = await fetch(apiBase + `/creator/${creator.id}`, {
				method: 'DELETE',
				credentials: 'include'
			});
			if (res.ok) {
				console.log(res);
			}
		} catch (e) {
			console.error(e);
		}
	}
</script>

<article>
	<h3>{creator.name}</h3>
	<button onclick={deleteCreator}>delete creator</button>
</article>
