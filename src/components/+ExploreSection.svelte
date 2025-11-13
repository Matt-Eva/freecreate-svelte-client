<script>
	import { onMount } from 'svelte';
	import ExploreCard from './+ExploreCard.svelte';
	let { section } = $props();
	let { title, delay } = section;
	let loaded = false;
	let loading = $state(false);
	let observerTarget;

	onMount(() => {
		const observer = new IntersectionObserver(intersectionCallback);
		if (observerTarget !== undefined) observer.observe(observerTarget);
	});

	function intersectionCallback(entries, observer) {
		entries.forEach((entry) => {
			if (entry.isIntersecting && !loaded) {
				loading = true;
				setTimeout(() => {
					loadSection();
				}, delay);
			} else if (loaded) {
				// console.log(section.title, loaded);
			}
		});
	}

	async function loadSection() {
		if (loaded) return;

		loaded = true;
		loading = false;
	}
</script>

<div bind:this={observerTarget}>
	<h2>{section.title}</h2>
	{#if loading}
		<p>loading...</p>
	{/if}
</div>

<style>
	div {
		height: 200px;
	}
</style>
