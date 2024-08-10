<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	
	export let user = { id: 0, username: '', email: '' };
	const dispatch = createEventDispatcher();

	async function saveUser() {
		const response = await fetch(`/api/users/${user.id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		});

		if (response.ok) {
			const data = await response.json();
			dispatch('close', data);
		} else {
			console.error('Failed to update user');
		}
	}
</script>

<div
	class="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50"
>
	<div class="bg-white p-8 rounded">
		<div class="mb-4">
			<label for="username" class="block font-bold">Username:</label>
			<input
				type="text"
				id="username"
				class="w-full p-2 border border-gray-300 rounded"
				bind:value={user.username}
			/>
		</div>
		<div class="mb-4">
			<label for="email" class="block font-bold">Email:</label>
			<input
				type="text"
				id="email"
				class="w-full p-2 border border-gray-300 rounded"
				bind:value={user.email}
			/>
		</div>
		<div class="flex justify-end">
			<button
				class="ml-2 px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
				on:click={saveUser}>Save</button
			>
			<button
				class="ml-2 px-4 py-2 bg-gray-500 text-white rounded cursor-pointer"
				on:click={() => dispatch('close')}>Cancel</button
			>
		</div>
	</div>
</div>
