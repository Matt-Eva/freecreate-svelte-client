<script>
	const { data } = $props();
</script>

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
