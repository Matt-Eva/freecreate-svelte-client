<script>
	let { testState = $bindable(), ...props } = $props();
</script>

<div>
	test
	<input type="text" bind:value={testState.myVal} />
</div>
