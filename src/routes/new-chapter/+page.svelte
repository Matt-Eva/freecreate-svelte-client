<script>
	import './quillStyles.css';
	import { onMount, onDestroy } from 'svelte';

	let editorElement;
	let quillInstance;

	onMount(async () => {
		const { default: Quill } = await import('quill');

		await import('quill/dist/quill.snow.css');

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
	<div bind:this={editorElement} id="editor"></div>
</div>

<style>
	#editor {
		height: 80vh;
	}
</style>
