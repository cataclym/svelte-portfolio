<script lang="ts">
	import Gallery from 'svelte-image-gallery';
	import { images } from '../../images.js';
	import Topbar from '../../components/Topbar/Topbar.svelte';
</script>

<svelte:head>
	<title>Illustrations</title>
</svelte:head>

<main>
	<div>
		<Topbar />

		<h2>Illustrations</h2>
		<p>
			Here you will find my illustration work from fan art, references online and original
			characters. I personally enjoy drawing female characters as they have fun shapes for both
			facial and body physics.
		</p>

		<Gallery gap="10" maxColumnWidth="250">
			{#each images as image}
				<img src={image.url} alt={image.alt} />
			{/each}
			{#each images as image}
				<img src={image.url} alt={image.alt} />
			{/each}
			{#each images as image}
				<img src={image.url} alt={image.alt} />
			{/each}
			{#each images as image}
				<img src={image.url} alt={image.alt} />
			{/each}
			{#each images as image}
				<img src={image.url} alt={image.alt} />
			{/each}
			{#each images as image}
				<img src={image.url} alt={image.alt} />
			{/each}
			{#each images as image}
				<img src={image.url} alt={image.alt} />
			{/each}
		</Gallery>
	</div>
</main>
