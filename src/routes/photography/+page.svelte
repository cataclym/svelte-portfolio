<script>
	import { closeModal, enlargeImage } from "../../functions/modal.js";
	export let data;
</script>

<svelte:window on:click={closeModal}></svelte:window>
<main>
	<h2>Photography</h2>
	<p>
		<mark>WIP: Description</mark>
	</p>

	<ul class="flex flex-wrap justify-center gap-4">
		{#each data.imagesArray as image}
			<li class="basis-80 cursor-pointer relative h-80 gallery_li pl-0">
				<img src={image} class="object-cover w-full h-full align-middle custom_video_border"
							 on:click|stopPropagation={enlargeImage} />
			</li>
		{/each}
	</ul>

	<div id="myModal" class="modal">
		<span class="close" on:click={closeModal}>&times;</span>
		<img on:click|stopPropagation={() => false} class="modal-content" id="img01"/>
			<div on:click|stopPropagation={() => false} id="caption"></div>
	</div>
</main>

<style>
    @import "../modal.css";
</style>
