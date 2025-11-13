<script>
	import BrowseBar from '../../components/+BrowseBar.svelte';
	let writingType = $state('All Writing');
	let datePost = $state('All Time');
	$inspect(writingType);
</script>

<div>
	<BrowseBar />
	<form>
		<label for="writing-type">Writing Type</label>
		<select name="writing-type" bind:value={writingType}>
			<option value="All Writing">All Writing</option>
			<option value="Poetry">Poetry</option>
			<option value="Essays & Blogs">Essays & Blogs</option>
			<option value="All Fiction">Fiction</option>
			<option value="Short Stories">Short Stories</option>
			<option value="Novelettes">Novellettes</option>
			<option value="Novellas">Novellas</option>
			<option value="Novels">Novels</option>
		</select>
		<label for="date-posted">Date Posted</label>
		<select name="date-posted">
			<option>All Time</option>
			<option>Most Recent</option>
			<option>Past Day</option>
			<option>Past Week</option>
			<option>Past Month</option>
			<option>Past Year</option>
		</select>
		<label for="tags">Tags</label>
		<input name="tags" type="text" />
		<div class="tag-box"></div>
		{#if writingType === 'Essays & Blogs'}
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
				<input type="checkbox" name="fantasy" />
				<label for="fantasy">Fiction</label>
				<input type="checkbox" name="historical" />
				<label for="historical">Historical Fiction</label>
				<input type="checkbox" name="horror" />
				<label for="horror">Horror</label>
				<input type="checkbox" name="literary" />
				<label for="literary">Literary Fiction</label>
				<input type="checkbox" name="Music" />
				<label for="Music">Music</label>
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
		{#if writingType === 'All Fiction' || writingType === 'Short Stories' || writingType === 'Novellettes' || writingType === 'Novellas' || writingType === 'Novels'}
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

		<input type="submit" value="search" />
	</form>
</div>

<style>
	.tag-box {
		width: 300px;
		height: 20px;
		background-color: hsl(0, 0%, 90%);
	}
</style>
