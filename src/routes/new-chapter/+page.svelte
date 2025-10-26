<script>
	import '../quillStyles.css';
	import { onMount, onDestroy } from 'svelte';

	let editorElement;
	let quillInstance;

	onMount(async () => {
		const { default: Quill } = await import('quill');

		const quill = new Quill(editorElement, {
			theme: 'snow',
			modules: {
				toolbar: [
					[{ header: [false, 1, 2, 3] }],
					['bold', 'italic', 'underline', 'strike'],
					['blockquote'],
					['clean']
				]
			}
		});
	});
</script>

<div>
	<h2><a href="/edit-writing">Book title</a></h2>
</div>
<div>
	<input type="text" placeholder="chapter title" />
</div>
<div>
	<div bind:this={editorElement} id="editor"></div>
</div>

<style>
	#editor {
		height: 80vh;
	}
</style>
