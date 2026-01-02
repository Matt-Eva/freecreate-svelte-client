<script>
	let { tags = $bindable() } = $props();

	let tagInput = $state('');
	let disableTagInput = $state(false);
	let disableTagSubmit = $state(true);

	function handleTagInput(v) {
		if (v.length <= 50) {
			let newStr = '';
			for (let i = 0; i < v.length; i++) {
				if (v[i] === ' ') {
					newStr += '-';
				} else {
					newStr += v[i].toLowerCase();
				}
			}
			tagInput = newStr;
		} else {
			console.log('tag cannot exceed 50 characters');
		}
		if (tagInput !== '') {
			disableTagSubmit = false;
		} else {
			disableTagInput = true;
		}
	}

	function addTag(e) {
		e.preventDefault();

		if (tags.length < 19) {
			const existing = tags.find((tag) => tag === tagInput);
			if (!existing) {
				tags.push(tagInput);
			}
		} else if (tags.length === 19) {
			const existing = tags.find((tag) => tag === tagInput);
			if (!existing) {
				tags.push(tagInput);
			}
			disableTagInput = true;
		}
		disableTagSubmit = true;

		tagInput = '';
	}

	function deleteTag(e) {
		console.log(e.target.textContent);
		tags = tags.filter((tag) => tag !== e.target.textContent);
	}
</script>

<form onsubmit={addTag}>
	<label for="tags">Add Tags (Optional - add up to twenty - 50 characters max)</label>
	<input
		name="tags"
		type="text"
		bind:value={() => tagInput, handleTagInput}
		disabled={disableTagInput}
	/>
	<input type="submit" value="add tag" disabled={disableTagSubmit} />
</form>
<div>
	{#each tags as tag}
		<button onclick={deleteTag}>{tag}</button>
	{/each}
</div>
