<script lang="ts">
	import DarkMode from '../common/DarkMode.svelte';
</script>

<nav class="bg-[#222] shadow-md">
	<div class="mx-auto-px-10">
		<div class="flex flex-row justify-between h-[15]">
			<div class="flex justify-center items-center text-[2vw] text-white">
				<a href="/home">Home</a>
			</div>
			<div class="flex justify-center items-center text-[2vw] text-white">
				<a href="/register">Register</a>
			</div>
			<div class="flex justify-center items-center text-[2vw] text-white">
				<a href="/login">Login</a>
			</div>
			<div class="flex justify-center items-center text-[2vw] text-white">
				<a href="/profile">UserPage</a>
			</div>
			<div class="flex justify-center items-center text-[2vw] text-white">
				<a href="/MenuPage">MenuPage</a>
			</div>
			<!-- <div class="flex justify-center items-center">
				<span class="text-[2vw] font-bold text-[e7e7e7] justify-center items-center"></span>
			</div> -->
			<div class="flex mt-[0.5vw]">
				<DarkMode />
			</div>
		</div>
	</div>
</nav>
