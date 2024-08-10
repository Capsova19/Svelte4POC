<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	let username = '';
	let email = '';
	let password = '';

	async function addUser() {
		const formData = {
			username,
			email,
			password
		};

		const response = await fetch(`/api/users`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(formData)
		});
		console.log(response);
		if (response.ok) {
			const newUser = await response.json();
			console.log(newUser);
			dispatch('added', newUser);
		} else {
			console.error('Failed to add user');
		}
	}
</script>

<div class="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center">
	<div class="bg-white p-8 rounded-lg shadow-2xl">
		<div class="mb-6">
			<label for="username" class="block text-gray-700 font-semibold">Username:</label>
			<input
				type="text"
				id="username"
				bind:value={username}
				class="w-full border-2 border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 transition-colors"
			/>
		</div>
		<div class="mb-6">
			<label for="email" class="block text-gray-700 font-semibold">Email:</label>
			<input
				type="email"
				id="email"
				bind:value={email}
				class="w-full border-2 border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 transition-colors"
			/>
		</div>
		<div class="mb-6">
			<label for="password" class="block text-gray-700 font-semibold">Password:</label>
			<input
				type="password"
				id="password"
				bind:value={password}
				class="w-full border-2 border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 transition-colors"
			/>
		</div>
		<div class="flex justify-end space-x-4">
			<button
				on:click={() => dispatch('close')}
				class="bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50 text-white px-4 py-2 rounded-md transition-all"
				>Cancel</button
			>
			<button
				on:click={addUser}
				class="bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white px-4 py-2 rounded-md transition-all"
				>Add</button
			>
		</div>
	</div>
</div>
