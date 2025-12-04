<script>
	import { onMount, getContext } from 'svelte';
	import { getUser, logoutUser } from '../../state/user.svelte';
	import {
		getUserCreators,
		populateUserCreators,
		addUserCreator,
		clearUserCreators
	} from '../../state/userCreators.svelte';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	import UserCreatorCard from '../../components/+UserCreatorCard.svelte';

	const { data } = $props();
	const apiBase = data.apiBase;

	let user = getUser();
	let userCreators = getUserCreators();
	if (browser && !user.loggedIn) {
		goto('/login');
	} else if (browser && user.loggedIn) {
		if (!userCreators.isFetched) {
			async function fetchUserCreators() {
				try {
					const res = await fetch(apiBase + '/user-creators', { credentials: 'include' });
					if (res.ok) {
						const data = await res.json();
						populateUserCreators(data.creators);
					}
				} catch (error) {
					console.error(error);
				}
			}
			fetchUserCreators();
		}
	}

	let deletePopup;
	let creatorName = $state('');

	async function logout() {
		try {
			const res = await fetch(apiBase + '/logout', {
				credentials: 'include',
				method: 'DELETE'
			});
			if (res.ok) {
				logoutUser();
				clearUserCreators();
				goto('/');
			}
		} catch (error) {
			console.error(error);
		}
	}

	async function deleteAccount() {
		try {
			const res = await fetch(apiBase + '/delete-account', {
				credentials: 'include',
				method: 'DELETE'
			});
			if (res.ok) {
				logoutUser();
				clearUserCreators();
				goto('/');
			}
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
				addUserCreator(data);
				creatorName = '';
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
		<UserCreatorCard {creator} {apiBase} />
	{/each}
</div>
