<script>
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { getUser } from '../../state/user.svelte';
	import WritingCard from './WritingCard.svelte';

	const { data } = $props();
	const apiBase = data.apiBase;
	const user = getUser();
	const myWriting = $state({
		writing: [],
		isFetched: false
	});

	$inspect(myWriting);

	if (browser && user.loggedIn) {
		fetchMyWriting();
	} else if (browser) {
		goto('/login');
	}

	async function fetchMyWriting() {
		try {
			const res = await fetch(apiBase + '/my-writing', { credentials: 'include' });
			if (res.ok) {
				const data = await res.json();
				myWriting.writing = data.writing;
				myWriting.isFetched = true;
			} else {
				const error = await res.text();
				throw new Error(error);
			}
		} catch (e) {
			console.error(e);
		}
	}
</script>

<div>
	{#if myWriting.isFetched}
		{#if myWriting.writing.length === 0}
			<p>you haven't created any writing yet.</p>
		{:else}
			{#each myWriting.writing as writing}
				<WritingCard {writing} />
			{/each}
		{/if}
	{/if}
</div>
