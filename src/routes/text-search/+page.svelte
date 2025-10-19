<script>
	import BrowseBar from '../../components/+BrowseBar.svelte';
</script>

<div>
	<div>
		<BrowseBar />
		<form>
			<label for="search">Search writers and writing by name</label>
			<input name="search" type="text" />
			<input type="submit" value="search" />
		</form>
	</div>
</div>
