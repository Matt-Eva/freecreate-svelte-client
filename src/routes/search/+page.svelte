<script>
	import BrowseBar from '../../components/+BrowseBar.svelte';
</script>

<div>
	<BrowseBar />
	<form>
		<label for="writing-type">Writing Type</label>
		<select name="writing-type">
			<option>All Writing</option>
			<option>Fiction</option>
			<option>Essays & Blogs</option>
			<option>Poetry</option>
		</select>
		<label for="fiction-type">Fiction Type</label>
		<select name="fiction-type">
			<option>All Fiction</option>
			<option>Short Stories</option>
			<option>Novelettes</option>
			<option>Novellas</option>
			<option>Novels</option>
		</select>
		<label for="date-posted">Date Posted</label>
		<select>
			<option>All Time</option>
			<option>Most Recent</option>
			<option>Past Day</option>
			<option>Past Week</option>
			<option>Past Month</option>
			<option>Past Year</option>
		</select>
		<label for="topic-box">Topics (select up to three)</label>
		<div name="topic box">
			<input type="checkbox" name="no" />
			<label for="no">No Topic</label>
			<input type="checkbox" name="art" />
			<label for="art">Art</label>
			<input type="checkbox" name="comedy" />
			<label for="comedy">Comedy</label>
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
			<input type="checkbox" name="romance" />
			<label for="romance">Romance</label>
			<input type="checkbox" name="science" />
			<label for="science">Science Fiction</label>
			<input type="checkbox" name="social" />
			<label for="social">Social Fiction</label>
			<input type="checkbox" name="speculative" />
			<label for="speculative">Speculative Fiction</label>
			<input type="checkbox" name="supernatural" />
			<label for="supernatural">Supernatural</label>
			<input type="checkbox" name="thriller" />
			<label for="thriller">Thriller</label>
		</div>
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
		<label for="tags">Tags</label>
		<input name="tags" type="text" />
		<div class="tag-box"></div>
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
