<script>
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	import { getUser } from '../../../state/user.svelte';
	import { fetchUserCreators, getUserCreators } from '../../../state/userCreators.svelte';
	import GenreSelect from './GenreSelect.svelte';
	import Test from './Test.svelte';
	import TagBox from './TagBox.svelte';

	const { data } = $props();
	const apiBase = data.apiBase;
	const writingUUID = data.writingUUID;

	let user = getUser();
	let userCreators = getUserCreators();
	let title = $state('');
	let creatorId = $state();
	let writingType = $state('Poetry');
	let description = $state('');
	let tags = $state([]);
	let genreTags = $state([]);

	$inspect(tags);

	if (browser && user.loggedIn) {
		if (!userCreators.isFetched) {
			fetchUserCreators(apiBase);
		}
		loadWriting();
	} else if (browser) {
		goto('/login');
	}

	async function loadWriting() {
		try {
			const res = await fetch(apiBase + `/edit-writing/${writingUUID}`, { credentials: 'include' });
			if (res.ok) {
				const data = await res.json();
				console.log(data);
				genreTags = data.tags;
			} else {
				const error = await res.text();
				throw new Error(error);
			}
		} catch (e) {
			console.error(e);
		}
	}

	async function saveWriting() {
		if (title !== '' && creatorId) {
			const tagsAndGenres = [...tags, ...genreTags];

			const body = {
				title,
				creatorId,
				description,
				tags: tagsAndGenres,
				writingType
			};

			try {
				const res = await fetch(apiBase + '/writing', {
					method: 'PATCH',
					credentials: 'include',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(body)
				});
				if (res.ok) {
					const data = await res.json();
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
	<label for="description">Description (Optional - 1000 characters max)</label>
	<textarea name="description" bind:value={description}></textarea>
	<label for="genre-box">Genres (Optional - select up to three)</label>
	<GenreSelect bind:genreTags />
	<TagBox bind:tags />
	{#if title !== '' && creatorId && writingType !== ''}
		<button onclick={saveWriting}>save</button>
	{:else}
		<button disabled="true">save</button>
	{/if}
</div>
