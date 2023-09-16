<script>
	export let images;
</script>

<div class="carousel">
	<div class="carousel__container">
		{#each images as image}
			<img src={image.url} alt={image.alt} height="500" />
		{/each}
		{#each images as image}
			<img src={image.url} alt={image.alt} height="500" />
		{/each}
	</div>
</div>

<style>
	.carousel {
		height: 32em;
		position: relative;
		overflow: hidden;
	}

	.carousel__container {
		position: absolute;
		top: 0;
		left: 0;
		overflow: hidden;
		white-space: nowrap;
		animation: bannermove 25s linear infinite;
	}

	:global(img) {
		opacity: 0.9;
		transition: all 0.2s;
	}
	:global(img):hover {
		opacity: 1;
		transform: scale(1.04);
	}

	.carousel__container img {
		margin: 0 0.5em;
	}

	.carousel:hover {
		overflow: hidden;
	}

	.carousel:hover .carousel__container {
		animation-play-state: paused;
	}

	@keyframes bannermove {
		0% {
			transform: translate(0, 0);
		}
		100% {
			transform: translate(-50%, 0);
		}
	}
</style>
