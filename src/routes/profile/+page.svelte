<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import AddUserModal from '$lib/client/components/AddUserModal.svelte';
	import EditUserModal from '$lib/client/components/EditUserModal.svelte';

	export let data: { users: { id: number; username: string; email: string }[] };
	let editingUser: any | null = null;
	let isAddingUser = false;

	const deleteUser = async (id: number) => {
		try {
			const response = await fetch(`/api/users/${id}`, {
				method: 'DELETE'
			});
			if (response.ok) {
				data.users = data.users.filter((user) => user.id !== id);
			}
		} catch (error) {
			console.error('Failed to delete user');
		}
	};
</script>

{#each data.users as user}
	<div class="flex flex-col items-center p-8">
		<h1 class="text-2xl font-bold mb-4">Profil von {user.username}</h1>
		<!-- <button
			class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4"
			on:click={() => (isAddingUser = true)}
		>
			Add User
		</button> -->
		<form method="POST" use:enhance>
			<button
				type="submit"
				class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4"
			>
				Logout
			</button>
		</form>

		<div class="w-full max-w-4xl">
			<div class="border p-4 rounded-lg mb-2 flex justify-between items-center">
				<div>
					<p class="font-semibold">{user.username}</p>
					<p class="font-semibold">{user.id}</p>
					<p class="text-sm text-gray-600">{user.email}</p>
				</div>
				<div>
					<button
						class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
						on:click={() => deleteUser(user.id)}
					>
						Delete
					</button>
					<button
						class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
						on:click={() => (editingUser = user)}
					>
						Edit
					</button>
				</div>
			</div>
		</div>
	</div>
{/each}

{#if editingUser}
	<EditUserModal
		user={editingUser}
		on:close={(event) => {
			editingUser = null;

			let index = data.users.findIndex((user) => user.id === event.detail.id);
			data.users[index] = event.detail;
		}}
	/>
{/if}

<!-- {#if isAddingUser}
	<AddUserModal
		on:close={() => (isAddingUser = false)}
		on:added={(event) => {
			console.log(event);
			data = { users: [...data.users, event.detail] };
			isAddingUser = false;
		}}
	/>
{/if} -->
