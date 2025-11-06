<script>
	import { setContext, getContext, onMount } from 'svelte';
	import { goto } from '$app/navigation';
	const { data } = $props();
	const apiBase = data.props.apiBase;
	let user = getContext('user');
	let deletePopup;

	onMount(() => {
		if (!user.loggedIn) {
			goto('/login');
		}
	});

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
</div>
