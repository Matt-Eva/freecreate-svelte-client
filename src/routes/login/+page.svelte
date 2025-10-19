<script>
	let { data } = $props();
	const apiBase = data.props.apiBase;

	async function login() {
		await fetch(apiBase + '/login', {
			credentials: 'include'
		});
	}
</script>

<div>
	<button onclick={login}>login</button>
	<form>
		<label for="email">Login with an email One Time Password</label>
		<input type="text" name="email" />
		<input type="submit" value="send code" />
	</form>
</div>
