<script>
	import { onMount } from 'svelte';
	import ExploreCard from './+ExploreCard.svelte';
	let { section } = $props();
	let { title, delay } = section;
	let loaded = false;
	let loading = $state(true);
	let observerTarget;

	onMount(() => {
		const observer = new IntersectionObserver(callback);
		function callback(entries, observer) {
			entries.forEach((entry) => {
				if (entry.isIntersecting && !loaded) {
					setTimeout(() => {
						console.log('fetching', section.title);
						console.log('delay', delay);
						loadSection();
					}, delay);
				} else if (loaded) {
					console.log(section.title, loaded);
				}
			});
		}
		if (observerTarget !== undefined) observer.observe(observerTarget);
	});

	async function loadSection() {
		if (loaded) return;

		loaded = true;
		loading = false;
	}
</script>

<div bind:this={observerTarget}>
	<h2>{section.title}</h2>
	{#if loading}
		<p>loading</p>
	{/if}
</div>

<style>
	div {
		height: 200px;
	}
</style>
