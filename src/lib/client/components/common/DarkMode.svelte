<script lang="ts">
	import MoonIcon from '$lib/client/icons/MoonIcon.svelte';
	import SunIcon from '$lib/client/icons/SunIcon.svelte';

	let darkMode = true;

	function toggleDarkMode() {
		darkMode = !darkMode;

		localStorage.setItem('theme', darkMode ? 'dark' : 'light');

		darkMode
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	}

	if (typeof window !== 'undefined') {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
			darkMode = true;
		} else {
			document.documentElement.classList.remove('dark');
			darkMode = false;
		}
	}
</script>

<div>
	<input checked={darkMode} on:click={toggleDarkMode} type="checkbox" id="theme-toggle" />
	<label for="theme-toggle">
		{#if darkMode}
			<MoonIcon />
		{:else}
			<SunIcon />
		{/if}
	</label>
</div>

<style lang="postcss">
	#theme-toggle {
		@apply invisible;
	}
	#theme-toggle + label {
		@apply inline-block cursor-pointer h-8 w-8;
	}
</style>
