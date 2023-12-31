<script>
	import Carousel from "../components/Carousel.svelte";

	export let data;
	const { imagesArray, aboutMe } = data;

	function fallback() {
		return `https://placekitten.com/400/400`
	}

	function handleError(ev) {
		ev.target.src = fallback()
	}
</script>

<main>
	<h2>Digital Portfolio</h2>
	<h3 class="frontPageHeader3">Illustrator, 3D Sculptor, Modeller & Animator</h3>
	<Carousel {imagesArray} />

	<div class="grid_container">
		<h2 class="frontPageHeader3 grid_header">About me</h2>
		<p class="grid_item_paragraph">
			{@html aboutMe || ""}
		</p>
		<div class="grid_item_img">
			<img alt="" class="rounded-xl"
					 src="selfie.jpg" on:error={handleError} />
		</div>
	</div>
</main>
