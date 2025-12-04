<script>
	import { getUserCreators, removeUserCreator } from '../state/userCreators.svelte';
	const { creator, apiBase } = $props();
	let userCreators = getUserCreators();

	async function deleteCreator() {
		try {
			const res = await fetch(apiBase + `/creator/${creator.id}`, {
				method: 'DELETE',
				credentials: 'include'
			});
			if (res.ok) {
				removeUserCreator(creator.id);
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
