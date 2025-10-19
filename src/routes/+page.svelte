<script>
	import BrowseBar from '../components/+BrowseBar.svelte';
	import ExploreSection from '../components/+ExploreSection.svelte';
	import ExploreCard from '../components/+ExploreCard.svelte';

	let sections = [
		{ title: 'Essays & Blogs', delay: 0 },
		{ title: 'Poetry', delay: 0 },
		{ title: 'Short Stories', delay: 0 },
		{ title: 'Novelettes', delay: 100 },
		{ title: 'Novellas', delay: 100 },
		{ title: 'Novels', delay: 100 },
		{ title: 'Action', delay: 200 },
		{ title: 'Adventure', delay: 200 },
		{ title: 'Comedy', delay: 200 },
		{ title: 'Drama', delay: 300 },
		{ title: 'Fantasy', delay: 300 },
		{ title: 'Historical Fiction', delay: 300 },
		{ title: 'Horror', delay: 400 },
		{ title: 'Literary', delay: 400 },
		{ title: 'Magical Realism', delay: 400 },
		{ title: 'Realism', delay: 500 },
		{ title: 'Romance', delay: 500 },
		{ title: 'Science Fiction', delay: 500 },
		{ title: 'Social Fiction', delay: 600 },
		{ title: 'Speculative Fiction', delay: 600 },
		{ title: 'Supernatural', delay: 600 },
		{ title: 'Thriller', delay: 600 }
	];
</script>

<div>
	<BrowseBar />
	<div>
		{#each sections as section}
			<ExploreSection {section} />
		{/each}
	</div>
</div>
