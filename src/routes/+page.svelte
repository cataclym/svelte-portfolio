<script>
	import Carousel from '../components/Carousel.svelte';
	import { images } from '../images.js';
	import Topbar from '../components/Topbar/Topbar.svelte';
</script>

<main>
	<Topbar />
	<h2 class="item__title">Digital Portfolio</h2>
	<h3>Illustrator, 3D Sculptor, Modeller & Animator</h3>
	<Carousel {images} />
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
		laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
		voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
		non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</p>
</main>
