<script>
	import { getContext } from 'svelte';
	const { creator, apiBase } = $props();
	let userCreators = getContext('userCreators');

	async function deleteCreator() {
		try {
			const res = await fetch(apiBase + `/creator/${creator.id}`, {
				method: 'DELETE',
				credentials: 'include'
			});
			if (res.ok) {
				console.log(res);
				userCreators.creators = userCreators.creators.filter((c) => c.id !== creator.id);
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
