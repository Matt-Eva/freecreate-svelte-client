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
	let description = $state('');
	let genres = $state([]);
	let tags = $state([]);

	$inspect(title);
	$inspect(creatorId);
	$inspect(description);

	if (browser && user.loggedIn) {
		if (!userCreators.isFetched) {
			fetchUserCreators(apiBase);
		}
	} else if (browser) {
		goto('/login');
	}

	async function handleSubmit(e) {
		e.preventDefault();

		if (title !== '' && creatorId) {
			try {
				const writingUUID = await createWriting();
				goto(`/edit-writing/${writingUUID}`);
			} catch (e) {
				console.error(e);
			}
		}
	}

	async function createWriting() {
		const body = {
			title,
			creatorId,
			description,
			genres,
			tags
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
			await res;
			if (res.ok) {
				console.log('successful request to create writing');
			}
		} catch (e) {
			throw new Error(e);
		}
	}
</script>

<form onsubmit={handleSubmit}>
	<label for="title">Title *</label>
	<input type="text" name="title" bind:value={title} />
	<label for="creator">Creator *</label>
	<select name="creator" bind:value={creatorId}>
		{#each userCreators.creators as creator}
			<option value={creator.id}>{creator.name}</option>
		{/each}
	</select>
	<label for="new-profile">Haven't made a creator profile?</label>
	<button name="new-profile">Make one now!</button>
	<label for="description">Description (Optional - 1000 characters max)</label>
	<textarea name="description" bind:value={description}></textarea>
	<label for="genre-box">Genres (Optional - select up to three)</label>
	<div name="genre-box">
		<input type="checkbox" name="no" />
		<label for="no">No Genre</label>
		<input type="checkbox" name="action" />
		<label for="action">Action</label>
		<input type="checkbox" name="adventure" />
		<label for="adventure">Adventure</label>
		<input type="checkbox" name="comedy" />
		<label for="comedy">Comedy</label>
		<input type="checkbox" name="drama" />
		<label for="drama">Drama</label>
		<input type="checkbox" name="fantasy" />
		<label for="fantasy">Fantasy</label>
		<input type="checkbox" name="historical" />
		<label for="historical">Historical Fiction</label>
		<input type="checkbox" name="horror" />
		<label for="horror">Horror</label>
		<input type="checkbox" name="literary" />
		<label for="literary">Literary Fiction</label>
		<input type="checkbox" name="Magical Realism" />
		<label for="Magical Realism">Magical Realism</label>
		<input type="checkbox" name="realism" />
		<label for="realism">Realism</label>
		<input type="checkbox" name="science" />
		<input type="checkbox" name="romance" />
		<label for="romance">Romance</label>
		<label for="science">Science Fiction</label>
		<input type="checkbox" name="social" />
		<input type="checkbox" name="speculative" />
		<label for="speculative">Speculative Fiction</label>
		<label for="social">Social Fiction</label>
		<input type="checkbox" name="supernatural" />
		<label for="supernatural">Supernatural</label>
		<input type="checkbox" name="thriller" />
		<label for="thriller">Thriller</label>
	</div>
	<label for="tags">Add Tags (Optional - add up to twenty)</label>
	<input name="tags" type="text" />
	<div></div>
	{#if title !== '' && creatorId}
		<input type="submit" value="create" />
	{:else}
		<input type="submit" value="create" disabled={true} />
	{/if}
</form>
