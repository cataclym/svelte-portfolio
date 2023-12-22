<script lang="ts">
	export let imagesArray: string[];
</script>
<div class="container">
	<div class="carousel">
		{#each imagesArray as image}
			<img src={image} class="rounded-xl" alt="" />
		{/each}
	</div>
	<div class="carousel2">
		{#each imagesArray as image}
			<img src={image} class="rounded-xl" alt="" />
		{/each}
	</div>
</div>

<style>
    .container {
        display: inline-flex;
        height: 32rem;
    }

    .carousel {
        transform: translateZ(0);
        height: 32rem;
        display: inline-flex;
        animation: 30s imagemove linear infinite;
        flex-wrap: nowrap;
        gap: 0.5rem;
    }

    .carousel2 {
        transform: translateZ(0);
        height: 32rem;
        display: inline-flex;
        animation: 30s imagemove2 linear infinite;
        flex-wrap: nowrap;
        gap: 0.5rem;
    }

    .carousel img {
        height: 32rem;
    }

    .carousel img:hover, .carousel2 img:hover {
        border: var(--accent1) 2px solid;
    }


    @keyframes imagemove {
        0% {
            transform: translateX(0%);
        }
        100% {
            transform: translateX(-100%);
        }
    }

    @keyframes imagemove2 {
        0% {
            transform: translateX(0%);
        }
        100% {
            transform: translateX(-19.7%);
        }
    }
</style>
