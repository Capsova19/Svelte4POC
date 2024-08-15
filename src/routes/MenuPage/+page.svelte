<script lang="ts">
	import Sidebar from '$lib/client/components/layout/Sidebar.svelte';
	import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import DarkMode from '$lib/client/components/common/DarkMode.svelte';
	import Carousel from '$lib/client/components/common/Carousel.svelte';
</script>

<!-- Navbar -->

<!-- Hero Section -->
<main class="bg-[#F5E6D3] min-h-screen flex flex-col pt-20">
	<!-- <section class="w-full h-full flex justify-center">
		<img
			src="src\lib\assets\Horner_Artikel_Fotos_Thomas.webp"
			alt="SectionPicture"
			class="object-cover"
		/>
	</section> -->

	<div class="">
		<Carousel
			className="mb-20 rounded-xl"
			img1="src\lib\assets\Horner_Artikel_Fotos_Thomas.webp"
			img2="src\lib\assets\product.webp"
			img3="src\lib\assets\Horner_Artikel_Fotos_Thomas.webp"
		/>
	</div>
	<!-- Product Description Section -->
	<section class="container mx-auto px-6 py-12 flex justify-center flex-col sm:flex-row">
		<div class="flex justify-center flex-col w-full sm:w-1/3 sm:pr-6">
			<h2 class="text-3xl font-bold mb-4">Krosse Kerle</h2>
			<p class="text-lg text-gray-800 sm:mb-0 mb-6">
				Unsere extrakrossen Kartoffelchips vom Feld in die Tüte! <strong
					>Vom Landwirt selbst hergestellt.</strong
				>
				Dafür verwenden wir ausschließlich eigene Kartoffeln. Aus natürlichen Zutaten, ohne künstliche
				Aromen.
				<strong>Alle Glutenfrei, vegetarisch und 3 Sorten vegan!</strong>
			</p>
		</div>
		<img
			src="src\lib\assets\product.webp"
			alt="Krosse Kerle Produkte"
			class="w-96 object-cover rounded-xl"
		/>
	</section>

	<section class="container mx-auto px-6 py-12 flex justify-center flex-col sm:flex-row">
		<img
			src="src\lib\assets\product.webp"
			alt="Krosse Kerle Produkte"
			class="w-96 object-cover sm:mb-0 mb-6 rounded-xl"
		/>
		<div class="flex justify-center flex-col w-full sm:w-1/3 sm:pl-6">
			<h2 class="text-3xl font-bold mb-4">Krosse Kerle</h2>
			<p class="text-lg text-gray-800 mb-6">
				Unsere extrakrossen Kartoffelchips vom Feld in die Tüte! <strong
					>Vom Landwirt selbst hergestellt.</strong
				>
				Dafür verwenden wir ausschließlich eigene Kartoffeln. Aus natürlichen Zutaten, ohne künstliche
				Aromen.
				<strong>Alle Glutenfrei, vegetarisch und 3 Sorten vegan!</strong>
			</p>
		</div>
	</section>

	<section class="container mx-auto px-6 py-12 flex justify-center flex-col sm:flex-row">
		<div class="flex justify-center flex-col w-full sm:w-1/3 sm:pr-6">
			<h2 class="text-3xl font-bold mb-4">Krosse Kerle</h2>
			<p class="text-lg text-gray-800 sm:mb-0 mb-6">
				Unsere extrakrossen Kartoffelchips vom Feld in die Tüte! <strong
					>Vom Landwirt selbst hergestellt.</strong
				>
				Dafür verwenden wir ausschließlich eigene Kartoffeln. Aus natürlichen Zutaten, ohne künstliche
				Aromen.
				<strong>Alle Glutenfrei, vegetarisch und 3 Sorten vegan!</strong>
			</p>
		</div>
		<img
			src="src\lib\assets\product.webp"
			alt="Krosse Kerle Produkte"
			class="w-96 object-cover rounded-xl"
		/>
	</section>

	<section class="container mx-auto px-6 py-12">
		<h2 class="text-3xl font-bold mb-4">Krosse Kerle</h2>
		<p class="text-lg text-gray-800 mb-6">
			Unsere extrakrossen Kartoffelchips vom Feld in die Tüte! <strong
				>Vom Landwirt selbst hergestellt.</strong
			>
			Dafür verwenden wir ausschließlich eigene Kartoffeln. Aus natürlichen Zutaten, ohne künstliche
			Aromen.
			<strong>Alle Glutenfrei, vegetarisch und 3 Sorten vegan!</strong>
		</p>
		<img
			src="path/to/product-image.jpg"
			alt="Krosse Kerle Produkte"
			class="w-full object-cover rounded-xl"
		/>
	</section>

	<section class="container mx-auto px-6 py-12">
		<h2 class="text-3xl font-bold mb-4">Krosse Kerle</h2>
		<p class="text-lg text-gray-800 mb-6">
			Unsere extrakrossen Kartoffelchips vom Feld in die Tüte! <strong
				>Vom Landwirt selbst hergestellt.</strong
			>
			Dafür verwenden wir ausschließlich eigene Kartoffeln. Aus natürlichen Zutaten, ohne künstliche
			Aromen.
			<strong>Alle Glutenfrei, vegetarisch und 3 Sorten vegan!</strong>
		</p>
		<img src="path/to/product-image.jpg" alt="Krosse Kerle Produkte" class="w-full object-cover" />
	</section>

	<section class="container mx-auto px-6 py-12">
		<h2 class="text-3xl font-bold mb-4">Krosse Kerle</h2>
		<p class="text-lg text-gray-800 mb-6">
			Unsere extrakrossen Kartoffelchips vom Feld in die Tüte! <strong
				>Vom Landwirt selbst hergestellt.</strong
			>
			Dafür verwenden wir ausschließlich eigene Kartoffeln. Aus natürlichen Zutaten, ohne künstliche
			Aromen.
			<strong>Alle Glutenfrei, vegetarisch und 3 Sorten vegan!</strong>
		</p>
		<img src="path/to/product-image.jpg" alt="Krosse Kerle Produkte" class="w-full object-cover" />
	</section>
</main>
