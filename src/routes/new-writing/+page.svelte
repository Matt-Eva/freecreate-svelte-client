<script>
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	import { getUser } from '../../state/user.svelte';
	import { fetchUserCreators, getUserCreators } from '../../state/userCreators.svelte';

	const { data } = $props();
	const apiBase = data.apiBase;

	let user = getUser();
	let userCreators = getUserCreators();
	let title = $state('');
	let creatorId = $state();
	let writingType = $state('Poetry');

	$inspect(creatorId);

	if (browser && user.loggedIn) {
		if (!userCreators.isFetched) {
			fetchUserCreators(apiBase);
		}
	} else if (browser) {
		goto('/login');
	}

	async function createWriting() {
		if (title !== '' && creatorId) {
			const body = {
				title,
				creatorId,
				writingType
			};

			try {
				const res = await fetch(apiBase + '/writing', {
					method: 'POST',
					credentials: 'include',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(body)
				});
				if (res.ok) {
					const data = await res.json();
					const writingUUID = data.writingUUID;
					goto(`/edit-writing/${writingUUID}`);
				} else {
					const error = await res.text();
					throw new Error(error);
				}
			} catch (e) {
				console.error(e);
			}
		}
	}
</script>

<div>
	<label for="title">Title *</label>
	<input type="text" name="title" bind:value={title} />
	<label for="creator">Creator *</label>
	<select name="creator" bind:value={creatorId}>
		{#each userCreators.creators as creator}
			<option value={creator.id}>{creator.name}</option>
		{/each}
	</select>
	<label for="new-profile">Haven't made a creator profile?</label>
	<a name="new-profile" href="/profile">Make one now!</a>
	<label for="writing-type">Writing Type *</label>
	<select name="writing-type" bind:value={writingType}>
		<option>Poetry</option>
		<option>Essay</option>
		<option>Blog</option>
		<option>Short Story</option>
		<option>Novellette</option>
		<option>Novella</option>
		<option>Novel</option>
	</select>

	{#if title !== '' && creatorId && writingType !== ''}
		<button onclick={createWriting}>create</button>
	{:else}
		<button disabled="true">create</button>
	{/if}
</div>
