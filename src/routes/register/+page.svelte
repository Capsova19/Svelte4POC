<script lang="ts">
	import { page } from '$app/stores';
	let formState = ''; // 'success', 'error', or ''
	$: formState = $page.form?.success ? 'success' : $page.form?.error ? 'error' : '';
</script>

{#if formState}
	<div class="w-full text-center">
		{#if formState === 'success'}
			<div class="bg-green-200 text-green-800 p-4 rounded-md">
				<p>Registration successful!</p>
			</div>
		{:else if formState === 'error'}
			<div class="bg-red-200 text-red-800 p-4 rounded-md">
				<p>Error during registration.</p>
			</div>
		{/if}
	</div>
{/if}

<div class="flex justify-center items-center p-8 w-full h-[90%]">
	<div class="min-w-96">
		<form method="POST" class="flex flex-col gap-4">
			<input type="text" name="username" placeholder="Username" class="border p-2" required />
			<input type="email" name="email" placeholder="Email" class="border p-2" required />
			<input type="password" name="password" placeholder="Password" class="border p-2" required />
			<button type="submit" class="bg-blue-500 text-white p-2">Register</button>
		</form>
		<p class="text-center mt-4">
			<a href="/login" class="text-blue-500">Back to Login</a>
		</p>
	</div>
</div>
