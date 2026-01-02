<script>
	let { genreTags = $bindable() } = $props();

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
	let genreQuantity = $state(0);
	genreTags.forEach((tag) => {
		if (startingGenreState[tag]) {
			updateGenres(tag, true);
		}
	});

	function handleUpdateGenres(e) {
		updateGenres(e.target.name, e.target.checked);
	}

	function updateGenres(name, checked) {
		if (name === 'no-genre') {
			genres = startingGenreState;
			genreQuantity = 0;
			genreTags = ['no-genre'];
		} else {
			genreTags = genreTags.filter((tag) => tag !== 'no-genre');
			if (checked) {
				genres[name].checked = true;
				genres['no-genre'].checked = false;
				genreQuantity += 1;
				if (genreQuantity >= 3) {
					for (const key in genres) {
						if (!genres[key].checked) genres[key].disabled = true;
					}
				}

				const existing = genreTags.find((tag) => tag === name);
				if (!existing) {
					genreTags.push(name);
					genreTags.sort();
				}
			} else {
				genres[name].checked = false;
				genreQuantity -= 1;
				for (const key in genres) {
					if (!genres[key].checked) genres[key].disabled = false;
				}
				if (genreQuantity <= 0) {
					genres['no-genre'].checked = true;
					genreTags = ['no-genre'];
				}
				genreTags = genreTags.filter((tag) => tag !== name);
			}
		}
	}
</script>

<div name="genre-box">
	<input
		type="checkbox"
		name="no-genre"
		onchange={handleUpdateGenres}
		bind:checked={genres['no-genre'].checked}
	/>
	<label for="no">No Genre</label>
	<input
		type="checkbox"
		name="action"
		onchange={handleUpdateGenres}
		bind:checked={genres.action.checked}
		disabled={genres.action.disabled}
	/>
	<label for="action">Action</label>
	<input
		type="checkbox"
		name="adventure"
		onchange={handleUpdateGenres}
		bind:checked={genres.adventure.checked}
		disabled={genres.adventure.disabled}
	/>
	<label for="adventure">Adventure</label>
	<input
		type="checkbox"
		name="comedy"
		onchange={handleUpdateGenres}
		bind:checked={genres.comedy.checked}
		disabled={genres.comedy.disabled}
	/>
	<label for="comedy">Comedy</label>
	<input
		type="checkbox"
		name="drama"
		onchange={handleUpdateGenres}
		bind:checked={genres.drama.checked}
		disabled={genres.drama.disabled}
	/>
	<label for="drama">Drama</label>
	<input
		type="checkbox"
		name="fantasy"
		onchange={handleUpdateGenres}
		bind:checked={genres.fantasy.checked}
		disabled={genres.fantasy.disabled}
	/>
	<label for="fantasy">Fantasy</label>
	<input
		type="checkbox"
		name="historical-fiction"
		onchange={handleUpdateGenres}
		bind:checked={genres['historical-fiction'].checked}
		disabled={genres['historical-fiction'].disabled}
	/>
	<label for="historical">Historical Fiction</label>
	<input
		type="checkbox"
		name="horror"
		onchange={handleUpdateGenres}
		bind:checked={genres.horror.checked}
		disabled={genres.horror.disabled}
	/>
	<label for="horror">Horror</label>
	<input
		type="checkbox"
		name="literary-fiction"
		onchange={handleUpdateGenres}
		bind:checked={genres['literary-fiction'].checked}
		disabled={genres['literary-fiction'].disabled}
	/>
	<label for="literary">Literary Fiction</label>
	<input
		type="checkbox"
		name="magical-realism"
		onchange={handleUpdateGenres}
		bind:checked={genres['magical-realism'].checked}
		disabled={genres['magical-realism'].disabled}
	/>
	<label for="magicalRealism">Magical Realism</label>
	<input
		type="checkbox"
		name="realism"
		onchange={handleUpdateGenres}
		bind:checked={genres['realism'].checked}
		disabled={genres.realism.disabled}
	/>
	<label for="realism">Realism</label>
	<input
		type="checkbox"
		name="romance"
		onchange={handleUpdateGenres}
		bind:checked={genres['romance'].checked}
		disabled={genres.romance.disabled}
	/>
	<label for="romance">Romance</label>
	<input
		type="checkbox"
		name="science-fiction"
		onchange={handleUpdateGenres}
		bind:checked={genres['science-fiction'].checked}
		disabled={genres['science-fiction'].disabled}
	/>
	<label for="science">Science Fiction</label>
	<input
		type="checkbox"
		name="speculative-fiction"
		onchange={handleUpdateGenres}
		bind:checked={genres['speculative-fiction'].checked}
		disabled={genres['speculative-fiction'].disabled}
	/>
	<label for="speculativeFiction">Speculative Fiction</label>
	<input
		type="checkbox"
		name="social-fiction"
		onchange={handleUpdateGenres}
		bind:checked={genres['social-fiction'].checked}
		disabled={genres['social-fiction'].disabled}
	/>
	<label for="social">Social Fiction</label>
	<input
		type="checkbox"
		name="supernatural"
		onchange={handleUpdateGenres}
		bind:checked={genres.supernatural.checked}
		disabled={genres.supernatural.disabled}
	/>
	<label for="supernatural">Supernatural</label>
	<input
		type="checkbox"
		name="thriller"
		onchange={handleUpdateGenres}
		bind:checked={genres.thriller.checked}
		disabled={genres.thriller.disabled}
	/>
	<label for="thriller">Thriller</label>
</div>
