<script lang="ts">
	export let data;
	import {closeModal, closeModalButton, enlargeImage} from "../../functions/modal"
</script>
<svelte:window on:click={closeModal}></svelte:window>
<main class="overflow-visible">
	<div>
		<h2>Illustrations</h2>
		<p>
			Here you will find my illustration work from fan art, references online and original
			characters. I personally enjoy drawing female characters as they have fun shapes for both
			facial and body physics.
		</p>
		<ul class="flex flex-wrap justify-center gap-4 ">
			{#each data.imagesArray as img}
				<li class="basis-80 cursor-pointer relative h-80 gallery_li pl-0">
					<a on:click|stopPropagation={enlargeImage} href={null}>
						<img src={img} class="object-cover w-full h-full align-middle" alt={data.images[img.slice(9)]?.alt || ""} />
					</a>
				</li>
			{/each}
		</ul>
	</div>

	<div id="myModal" class="modal">
		<span class="close" on:click={closeModal} on:keypress={closeModalButton}>&times;</span>
		<img on:click|stopPropagation={() => false} class="modal-content" id="img01" alt="">
		<div id="caption"></div>
	</div>
</main>

<style>
    @import "../modal.css";
</style>
