<script>
	import { setContext, getContext, onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	import UserCreatorCard from '../../components/+UserCreatorCard.svelte';

	const { data } = $props();
	const apiBase = data.apiBase;

	let user = getContext('user');
	let userCreators = getContext('userCreators');
	if (browser && !user.loggedIn) {
		goto('/login');
	} else if (browser && user.loggedIn) {
		if (!userCreators.isFetched) {
			async function fetchUserCreators() {
				try {
					const res = await fetch(apiBase + '/user-creators', { credentials: 'include' });
					if (res.ok) {
						const data = await res.json();
						userCreators.creators = data.creators;
						userCreators.isFetched = true;
						console.log('userCreators fetched', userCreators);
					}
				} catch (error) {
					console.error(error);
				}
			}
			fetchUserCreators();
		} else {
			console.log('userCreators already fetched', userCreators);
		}
	}

	let deletePopup;
	let creatorName = $state('');

	async function logout() {
		try {
			await fetch(apiBase + '/logout', {
				credentials: 'include',
				method: 'DELETE'
			});
			user.loggedIn = false;
			goto('/');
		} catch (error) {
			console.error(error);
		}
	}

	async function deleteAccount() {
		try {
			await fetch(apiBase + '/delete-account', {
				credentials: 'include',
				method: 'DELETE'
			});
			user.loggedIn = false;
			goto('/');
		} catch (error) {
			console.error(error);
		}
	}

	function openDeletePopup() {
		deletePopup.showModal();
	}

	function closeDeletePopup() {
		deletePopup.close();
	}

	async function createCreator(e) {
		e.preventDefault();
		console.log('running submit');
		try {
			const res = await fetch(apiBase + '/creator', {
				credentials: 'include',
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					creatorName
				})
			});
			if (res.ok) {
				const data = await res.json();
				console.log(data);
				userCreators.creators = [...userCreators.creators, data];
			}
		} catch (error) {
			console.error(error);
		}
	}
</script>

<div>
	<button onclick={logout}>logout</button>
	<button onclick={openDeletePopup}>Delete Account</button>
	<dialog bind:this={deletePopup}>
		<!-- add in email code delete functionality -->
		<h2>Are you sure you want to delete your account?</h2>
		<button onclick={deleteAccount}>yes</button>
		<button onclick={closeDeletePopup}>no</button>
	</dialog>
	<form onsubmit={createCreator}>
		<label for="new-creator">Add New Creator Profile</label>
		<input type="text" name="new-creator" bind:value={creatorName} />
		<input type="submit" value="create" />
	</form>
	{#each userCreators.creators as creator}
		<UserCreatorCard {creator} />
	{/each}
</div>
