<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	// Slides des Carousels
	export let className: string;
	export let img1: string;
	export let img2: string;
	export let img3: string;

	const slides = [
		{
			id: 1,
			img: img1,
			alt: 'Bild 1'
		},
		{
			id: 2,
			img: img2,
			alt: 'Bild 2'
		},
		{
			id: 3,
			img: img3,
			alt: 'Bild 3'
		}
	];

	let currentSlide = 0;
	let interval: ReturnType<typeof setInterval>;

	// Funktionen zum Navigieren
	function nextSlide() {
		currentSlide = (currentSlide + 1) % slides.length;
	}

	function prevSlide() {
		currentSlide = (currentSlide - 1 + slides.length) % slides.length;
	}
	function startAutoSlide() {
		interval = setInterval(() => {
			nextSlide();
		}, 3000); // Alle 3 Sekunden
	}

	function stopAutoSlide() {
		clearInterval(interval);
	}

	// Starten des automatischen Wechselns bei Komponentenmounter
	onMount(() => {
		startAutoSlide();
	});

	// Bereinigen des Intervals bei der Zerstörung der Komponente
	onDestroy(() => {
		stopAutoSlide();
	});
</script>

<div class="relative w-full md:w-1/2 mx-auto overflow-hidden {className}">
	<!-- Slides -->
	<div
		class="flex transition-transform duration-500"
		style="transform: translateX(-{currentSlide * 100}%);"
	>
		{#each slides as slide (slide.id)}
			<div class="w-full flex-shrink-0">
				<img src={slide.img} alt={slide.alt} class="w-full h-96 object-cover bg-black" />
			</div>
		{/each}
	</div>

	<!-- Navigation Buttons -->
	<button
		on:click={() => {
			prevSlide();
			stopAutoSlide();
			startAutoSlide();
		}}
		class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-4 py-2"
	>
		&#10094;
	</button>
	<button
		on:click={() => {
			nextSlide();
			stopAutoSlide();
			startAutoSlide();
		}}
		class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-4 py-2"
	>
		&#10095;
	</button>

	<!-- Progress Dots -->
	<div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
		{#each slides as slide, index (slide.id)}
			<div class="w-3 h-3 rounded-full {index === currentSlide ? 'bg-white' : 'bg-gray-400'}"></div>
		{/each}
	</div>
</div>

<style>
	/* Optional: Falls du zusätzliches Styling benötigst, kannst du es hier hinzufügen */
</style>
