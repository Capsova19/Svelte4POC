<script lang="ts">
	import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

	let isOpen = false;

	function toggleSidebar() {
		isOpen = !isOpen;
	}
</script>

<div class="relative h-screen flex">
	<!-- Toggle Button -->
	<button
		on:click={toggleSidebar}
		class="text-black focus:outline-none focus:text-gray-800 z-50 fixed top-20 left-10"
	>
		{#if isOpen}
			<Fa icon={faTimes} />
		{/if}
		{#if !isOpen}
			<Fa icon={faBars} />
		{/if}
	</button>

	<!-- Sidebar -->
	<aside
		class="fixed inset-y-0 left-0 bg-gray-800 text-white w-64 p-6 transition-transform duration-300 ease-in-out transform"
		class:translate-x-[-100%]={!isOpen}
	>
		<nav>
			<ul>
				<li class="mb-4">
					<a href="#section1" class="block py-2 px-4 rounded hover:bg-gray-700">Section 1</a>
				</li>
				<li class="mb-4">
					<a href="#section2" class="block py-2 px-4 rounded hover:bg-gray-700">Section 2</a>
				</li>
				<li class="mb-4">
					<a href="#section3" class="block py-2 px-4 rounded hover:bg-gray-700">Section 3</a>
				</li>
			</ul>
		</nav>
	</aside>
</div>
