<div>
	<form>
		<label for="title">Title *</label>
		<input type="text" name="title" />
		<label for="creator">Creator *</label>
		<select name="creator">
			<option>example</option>
			<option>example two</option>
		</select>
		<label for="description">Description (1000 characters max)</label>
		<textarea name="description"></textarea>
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
		<label for="tags">Add Tags (up to twenty)</label>
		<input name="tags" type="text" />
		<div></div>
		<input type="submit" value="create" />
	</form>
	<div>
		<a href="new-chapter">Add Chapter</a>
	</div>
	<div>
		<h2>Published</h2>
		<article>
			<h3>example chapter title</h3>
			<a href="/edit-chapter">edit</a>
		</article>
	</div>
	<div>
		<h2>Drafts</h2>
		<article>
			<h3>example chapter title</h3>
			<a href="/edit-chapter">edit</a>
		</article>
	</div>
</div>
