<script lang="ts">
	import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import DarkMode from '../common/DarkMode.svelte';
</script>

<header class="bg-[#F5E6D3] w-full py-3 shadow-md">
	<div class="container mx-auto flex justify-between items-center px-6">
		<!-- Logo -->
		<div class="flex items-center">
			<a href="/MenuPage"
				><img
					src="src\lib\assets\Google__G__logo.svg.png"
					alt="Heimaat & Friends Logo"
					class="h-12"
				/></a
			>
		</div>

		<!-- Navigation Links -->
		<nav class="hidden md:flex space-x-6 text-lg text-gray-700">
			<a href="#" class="hover:text-black">Alle Produkte</a>
			<a href="#" class="hover:text-black">Krosse Kerle</a>
			<a href="#" class="hover:text-black">Jo Chips</a>
			<a href="#" class="hover:text-black">Krosse Chüps</a>
			<a href="#" class="hover:text-black">Chips-Box</a>
			<a href="#" class="hover:text-black">Mini-Tüten</a>
			<a href="/account/home" class="hover:text-black">User Overview</a>
		</nav>

		<!-- Right side icons -->
		<div class="flex items-center space-x-4">
			<div class="text-gray-700 text-sm">EUR € | Deutschland</div>
			<div class="text-gray-700">
				<a href="/account/profile"><Fa icon={faUser} /></a>
			</div>
			<div class="text-gray-700">
				<Fa icon={faShoppingCart} />
			</div>
			<div class="mt-4">
				<DarkMode />
			</div>
		</div>
	</div>
</header>
