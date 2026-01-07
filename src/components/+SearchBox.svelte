<script>
	import BrowseBar from './+BrowseBar.svelte';
	import { getSearch } from '../state/search.svelte';
	let writingType = $state('All Writing');
	let datePost = $state('All Time');

	let searchState = getSearch();

	function search() {
		console.log('searching');
	}
</script>

<div>
	<BrowseBar />

	<label for="writing-type">Writing Type</label>
	<select name="writing-type" bind:value={searchState.writingType}>
		<option value="All Writing">All Writing</option>
		<option value="Poetry">Poetry</option>
		<option value="Essays & Blogs">Essays & Blogs</option>
		<option value="All Fiction">All Fiction</option>
		<option value="Short Stories">Short Stories</option>
		<option value="Novelettes">Novellettes</option>
		<option value="Novellas">Novellas</option>
		<option value="Novels">Novels</option>
	</select>
	<label for="date-posted">Date Posted</label>
	<select name="date-posted" bind:value={searchState.datePosted}>
		<option value="All Time">All Time</option>
		<option value="Most Recent">Most Recent</option>
		<option value="Past Day">Past Day</option>
		<option value="Past Week">Past Week</option>
		<option value="Past Month">Past Month</option>
		<option value="Past Year">Past Year</option>
	</select>
	<form>
		<label for="tags">Tags</label>
		<input name="tags" type="text" />
		<input type="submit" value="add tag" />
	</form>
	<div class="tag-box"></div>
	{#if searchState.writingType === 'Essays & Blogs'}
		<label for="topic-box">Topics (select up to three)</label>
		<div name="topic box">
			<input type="checkbox" name="no" />
			<label for="no">No Topic</label>
			<input type="checkbox" name="art" />
			<label for="art">Art</label>
			<input type="checkbox" name="comedy" />
			<label for="comedy">Comedy</label>
			<input type="checkbox" name="drama" />
			<label for="drama">Culture</label>

			<input type="checkbox" name="historical" />
			<label for="historical">History</label>
			<input type="checkbox" name="horror" />
			<label for="horror">Horror</label>
			<input type="checkbox" name="literary" />
			<label for="literary">Fiction</label>
			<input type="checkbox" name="Music" />
			<label for="Musics">Music</label>
			<input type="checkbox" name="realism" />
			<label for="realism">Film and TV</label>
			<input type="checkbox" name="politics" />
			<label for="politics">Politics</label>
			<input type="checkbox" name="politics" />
			<label for="psychology">Psychology</label>
			<input type="checkbox" name="psychology" />
			<label for="philosophy">Philosophy</label>
			<input type="checkbox" name="philosophy" />
			<label for="science">Science</label>
			<input type="checkbox" name="social" />
			<label for="social">Social Dynamics</label>
			<input type="checkbox" name="speculative" />
			<label for="speculative">Speculative Fiction</label>
			<input type="checkbox" name="thriller" />
			<label for="thriller">Technology</label>
			<input type="checkbox" name="supernatural" />
			<label for="supernatural">Video Games</label>
		</div>
	{/if}
	{#if searchState.writingType === 'All Fiction' || searchState.writingType === 'Short Stories' || searchState.writingType === 'Novellettes' || searchState.writingType === 'Novellas' || searchState.writingType === 'Novels'}
		<label for="genre-box">Genres (select up to three)</label>
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
	{/if}

	<button onclick={search}>search</button>

	<div>
		<a href="/search">Writing</a>
		<a href="/search/writers">Writers</a>
	</div>
</div>

<style>
	.tag-box {
		width: 300px;
		height: 20px;
		background-color: hsl(0, 0%, 90%);
	}
</style>
