<script>
	import dateChecker from '$lib/dateChecker';
	let { data } = $props();
	const apiBase = data.props.apiBase;
	let showLogin = $state(false);
	let showSignup = $state(true);
	let birthDay = $state('');
	let birthMonth = $state('');
	let birthYear = $state('');
	let birthdayErrorMessages = $state([]);

	async function login(e) {
		e.preventDefault();
		await fetch(apiBase + '/login', {
			credentials: 'include',
			method: 'POST'
		});
	}

	async function signup(e) {
		e.preventDefault();
		try {
			const date = dateChecker(birthDay, birthMonth, birthYear);
			console.log(date);
		} catch (e) {
			e.forEach((error) => {
				birthdayErrorMessages.push(error.message);
			});
			// birthdayErrors = e;
		}

		// await fetch(apiBase + '/signup', { credentials: 'include', method: 'POST' });
	}
</script>

<div>
	<form onsubmit={login}>
		<label for="email">Login with an email One Time Password</label>
		<input type="text" name="email" placeholder="email@example.com" />
		<input type="submit" value="send code" />
	</form>
	<form onsubmit={signup}>
		<label for="email">Sign Up with email</label>
		<input type="text" name="email" placeholder="email@example.com" />
		<label>Please enter your birthday: MM-DD-YYYY</label>

		<label for="day">Day: DD</label>
		<input type="text" name="day" placeholder="day" bind:value={birthDay} />
		{#if birthdayErrorMessages[2]}
			<span>{birthdayErrorMessages[2]}</span>
		{/if}
		<label for="month">Month: MM</label>
		<input type="text" name="month" placeholder="month" bind:value={birthMonth} />
		{#if birthdayErrorMessages[1]}
			<p>{birthdayErrorMessages[1]}</p>
		{/if}
		<label for="year">Year: YYYY</label>
		<input type="text" name="year" placeholder="year" bind:value={birthYear} />
		{#if birthdayErrorMessages[0]}
			<p>{birthdayErrorMessages[0]}</p>
		{/if}
		<input type="submit" value="sign up" />
	</form>
</div>
