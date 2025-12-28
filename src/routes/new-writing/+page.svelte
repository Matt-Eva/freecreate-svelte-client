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
	const startingGenreState = {
		'no-genre': { checked: true, disabled: false },
		action: { checked: false, disabled: false },
		adventure: { checked: false, disabled: false },
		comedy: { checked: false, disabled: false },
		drama: { checked: false, disabled: false },
		fantasy: { checked: false, disabled: false },
		'historical-fiction': { checked: false, disabled: false },
		horror: { checked: false, disabled: false },
		'literary-fiction': { checked: false, disabled: false },
		'magical-realism': { checked: false, disabled: false },
		realism: { checked: false, disabled: false },
		romance: { checked: false, disabled: false },
		'science-fiction': { checked: false, disabled: false },
		'speculative-fiction': { checked: false, disabled: false },
		'social-fiction': { checked: false, disabled: false },
		supernatural: { checked: false, disabled: false },
		thriller: { checked: false, disabled: false }
	};
	let genres = $state(startingGenreState);
	const startingGenreTagState = ['no-genre'];
	let genreQuantity = $state(0);
	let genreTags = $state(startingGenreTagState);
	let tags = $state([]);
	let tagInput = $state('');
	let disableTagInput = $state(false);
	let disableTagSubmit = $state(true);
	$inspect(tagInput);
	$inspect(tags);

	if (browser && user.loggedIn) {
		if (!userCreators.isFetched) {
			fetchUserCreators(apiBase);
		}
	} else if (browser) {
		goto('/login');
	}

	async function createWriting() {
		if (title !== '' && creatorId) {
			const tagsAndGenres = [...tags, ...genreTags];

			const body = {
				title,
				creatorId,
				description,
				tags: tagsAndGenres
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
					//	goto(`/edit-writing/${writingUUID}`);
				} else {
					const error = await res.text();
					throw new Error(error);
				}
			} catch (e) {
				console.error(e);
			}
		}
	}

	function updateGenres(e) {
		if (e.target.name === 'no-genre') {
			genres = startingGenreState;
			genreQuantity = 0;
			genreTags = ['no-genre'];
		} else {
			genreTags = genreTags.filter((tag) => tag !== 'no-genre');
			if (e.target.checked) {
				genres[e.target.name].checked = true;
				genres['no-genre'].checked = false;
				genreQuantity += 1;
				if (genreQuantity >= 3) {
					for (const key in genres) {
						if (!genres[key].checked) genres[key].disabled = true;
					}
				}

				const existing = genreTags.find((tag) => tag === e.target.name);
				if (!existing) {
					genreTags.push(e.target.name);
					genreTags.sort();
				}
			} else {
				genres[e.target.name].checked = false;
				genreQuantity -= 1;
				for (const key in genres) {
					if (!genres[key].checked) genres[key].disabled = false;
				}
				if (genreQuantity <= 0) {
					genres['no-genre'].checked = true;
					genreTags = ['no-genre'];
				}
				genreTags = genreTags.filter((tag) => tag !== e.target.name);
			}
		}
	}

	function handleTagInput(v) {
		if (v.length <= 50) {
			let newStr = '';
			for (let i = 0; i < v.length; i++) {
				if (v[i] === ' ') {
					newStr += '-';
				} else {
					newStr += v[i].toLowerCase();
				}
			}
			tagInput = newStr;
		} else {
			console.log('tag cannot exceed 50 characters');
		}
		if (tagInput !== '') {
			disableTagSubmit = false;
		} else {
			disableTagInput = true;
		}
	}

	function addTag(e) {
		e.preventDefault();

		if (tags.length < 19) {
			const existing = tags.find((tag) => tag === tagInput);
			if (!existing) {
				tags.push(tagInput);
			}
		} else if (tags.length === 19) {
			const existing = tags.find((tag) => tag === tagInput);
			if (!existing) {
				tags.push(tagInput);
			}
			disableTagInput = true;
		}
		disableTagSubmit = true;

		tagInput = '';
	}

	function deleteTag(e) {
		console.log(e.target.textContent);
		tags = tags.filter((tag) => tag !== e.target.textContent);
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
	<button name="new-profile">Make one now!</button>
	<label for="description">Description (Optional - 1000 characters max)</label>
	<textarea name="description" bind:value={description}></textarea>
	<label for="genre-box">Genres (Optional - select up to three)</label>
	<div name="genre-box">
		<input
			type="checkbox"
			name="no-genre"
			onchange={updateGenres}
			bind:checked={genres['no-genre'].checked}
		/>
		<label for="no">No Genre</label>
		<input
			type="checkbox"
			name="action"
			onchange={updateGenres}
			bind:checked={genres.action.checked}
			disabled={genres.action.disabled}
		/>
		<label for="action">Action</label>
		<input
			type="checkbox"
			name="adventure"
			onchange={updateGenres}
			bind:checked={genres.adventure.checked}
			disabled={genres.adventure.disabled}
		/>
		<label for="adventure">Adventure</label>
		<input
			type="checkbox"
			name="comedy"
			onchange={updateGenres}
			bind:checked={genres.comedy.checked}
			disabled={genres.comedy.disabled}
		/>
		<label for="comedy">Comedy</label>
		<input
			type="checkbox"
			name="drama"
			onchange={updateGenres}
			bind:checked={genres.drama.checked}
			disabled={genres.drama.disabled}
		/>
		<label for="drama">Drama</label>
		<input
			type="checkbox"
			name="fantasy"
			onchange={updateGenres}
			bind:checked={genres.fantasy.checked}
			disabled={genres.fantasy.disabled}
		/>
		<label for="fantasy">Fantasy</label>
		<input
			type="checkbox"
			name="historical-fiction"
			onchange={updateGenres}
			bind:checked={genres['historical-fiction'].checked}
			disabled={genres['historical-fiction'].disabled}
		/>
		<label for="historical">Historical Fiction</label>
		<input
			type="checkbox"
			name="horror"
			onchange={updateGenres}
			bind:checked={genres.horror.checked}
			disabled={genres.horror.disabled}
		/>
		<label for="horror">Horror</label>
		<input
			type="checkbox"
			name="literary-fiction"
			onchange={updateGenres}
			bind:checked={genres['literary-fiction'].checked}
			disabled={genres['literary-fiction'].disabled}
		/>
		<label for="literary">Literary Fiction</label>
		<input
			type="checkbox"
			name="magical-realism"
			onchange={updateGenres}
			bind:checked={genres['magical-realism'].checked}
			disabled={genres['magical-realism'].disabled}
		/>
		<label for="magicalRealism">Magical Realism</label>
		<input
			type="checkbox"
			name="realism"
			onchange={updateGenres}
			bind:checked={genres['realism'].checked}
			disabled={genres.realism.disabled}
		/>
		<label for="realism">Realism</label>
		<input
			type="checkbox"
			name="romance"
			onchange={updateGenres}
			bind:checked={genres['romance'].checked}
			disabled={genres.romance.disabled}
		/>
		<label for="romance">Romance</label>
		<input
			type="checkbox"
			name="science-fiction"
			onchange={updateGenres}
			bind:checked={genres['science-fiction'].checked}
			disabled={genres['science-fiction'].disabled}
		/>
		<label for="science">Science Fiction</label>
		<input
			type="checkbox"
			name="speculative-fiction"
			onchange={updateGenres}
			bind:checked={genres['speculative-fiction'].checked}
			disabled={genres['speculative-fiction'].disabled}
		/>
		<label for="speculativeFiction">Speculative Fiction</label>
		<input
			type="checkbox"
			name="social-fiction"
			onchange={updateGenres}
			bind:checked={genres['social-fiction'].checked}
			disabled={genres['social-fiction'].disabled}
		/>
		<label for="social">Social Fiction</label>
		<input
			type="checkbox"
			name="supernatural"
			onchange={updateGenres}
			bind:checked={genres.supernatural.checked}
			disabled={genres.supernatural.disabled}
		/>
		<label for="supernatural">Supernatural</label>
		<input
			type="checkbox"
			name="thriller"
			onchange={updateGenres}
			bind:checked={genres.thriller.checked}
			disabled={genres.thriller.disabled}
		/>
		<label for="thriller">Thriller</label>
	</div>
	<form onsubmit={addTag}>
		<label for="tags">Add Tags (Optional - add up to twenty - 50 characters max)</label>
		<input
			name="tags"
			type="text"
			bind:value={() => tagInput, handleTagInput}
			disabled={disableTagInput}
		/>
		<input type="submit" value="add tag" disabled={disableTagSubmit} />
	</form>
	<div>
		{#each tags as tag}
			<button onclick={deleteTag}>{tag}</button>
		{/each}
	</div>
	{#if title !== '' && creatorId}
		<button onclick={createWriting}>create</button>
	{:else}
		<button disabled="true">create</button>
	{/if}
</div>
