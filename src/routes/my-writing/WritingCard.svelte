<script>
	import genreMap from '$lib/genreMap';
	let { writing } = $props();
	const genres = [];
	writing.tags.forEach((tag) => {
		if (genreMap[tag]) genres.push(genreMap[tag]);
	});
</script>

<div>
	<p>{writing.title}</p>
	<p>{writing.writingType}</p>
	{#each genres as genre}
		<p>{genre}</p>
	{/each}
	{#if writing.isPublished}
		<p>published</p>
	{:else}
		<p>draft</p>
	{/if}
	<a href={`/edit-writing/${writing.writingUUID}`}>edit</a>
</div>

<style>
	div {
		border: solid;
		padding: 5px;
	}
</style>
