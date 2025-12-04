<script>
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { getUser, loginUser } from '../../state/user.svelte.js';
	import birthdayChecker from '$lib/birthdayChecker.js';
	let user = getUser();

	if (browser && user.loggedIn === true) {
		goto('/profile');
	}

	let { data } = $props();
	const apiBase = data.apiBase;
	let showLogin = $state(false);
	let loginEmail = $state('');
	let signupEmail = $state('');
	let showSignup = $state(true);
	let birthDay = $state('');
	let birthMonth = $state('');
	let birthYear = $state('');
	const startingBirthdayErrorMessages = { year: '', month: '', day: '' };
	let birthdayErrorMessages = $state(startingBirthdayErrorMessages);

	async function login(e) {
		e.preventDefault();
		try {
			const res = await fetch(apiBase + '/login', {
				credentials: 'include',
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ email: '' })
			});
			if (res.ok) {
				loginUser();
				goto('/profile');
			}
		} catch (error) {
			console.error(error);
		}
	}

	async function signup(e) {
		e.preventDefault();

		try {
			birthdayChecker(birthDay, birthMonth, birthYear);
			birthdayErrorMessages = startingBirthdayErrorMessages;
		} catch (errors) {
			for (const key in errors) {
				birthdayErrorMessages[key] = errors[key].message;
			}
			return;
		}

		try {
			const res = await fetch(apiBase + '/signup', {
				credentials: 'include',
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					email: '',
					birthDay: parseInt(birthDay),
					birthMonth: parseInt(birthMonth),
					birthYear: parseInt(birthYear)
				})
			});
			if (res.ok) {
				user.loggedIn = true;
				goto('/profile');
			}
		} catch (error) {
			console.error(error);
		}
	}
</script>

<div>
	{#if user.loggedIn !== true}
		<form onsubmit={login}>
			<label for="email">Login with an email One Time Password</label>
			<input type="text" name="email" placeholder="email@example.com" />
			<input type="submit" value="send code" />
		</form>
		<form onsubmit={signup}>
			<label for="email">Sign Up with email</label>
			<input type="text" name="email" placeholder="email@example.com" bind:value={signupEmail} />

			<label for="birthday">Please enter your birthday</label>
			<section name="birthday">
				<label for="month">Month</label>
				<input type="text" name="month" placeholder="month" bind:value={birthMonth} />
				{#if birthdayErrorMessages.month}
					<p>{birthdayErrorMessages.month}</p>
				{/if}
				<label for="day">Day</label>
				<input type="text" name="day" placeholder="day" bind:value={birthDay} />
				{#if birthdayErrorMessages.day}
					<p>{birthdayErrorMessages.day}</p>
				{/if}
				<label for="year">Year</label>
				<input type="text" name="year" placeholder="year" bind:value={birthYear} />
				{#if birthdayErrorMessages.year}
					<p>{birthdayErrorMessages.year}</p>
				{/if}
			</section>
			<input type="submit" value="sign up" />
		</form>
	{/if}
</div>
