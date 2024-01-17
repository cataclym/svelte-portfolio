<script>
	import { closeModal, closeModalButton, enlargeImage } from "../../../../functions/modal.js";

	export let data;
</script>

<svelte:window on:click={closeModal}></svelte:window>
<main class="overflow-visible">
	<h2>{data.data.alt}</h2>
	<video controls class="w-auto h-auto max-w-screen-sm custom_video_border no_hover block m-auto">
		{#if data.webm}
			<source src="/animations/{data.params.category}/{data.webm}" type="video/webm">
		{/if}
		<source src="/animations/{data.params.category}/{data.video}" type="video/mp4">
	</video>
	<div class="flex justify-center mt-10 mb-10">
		<a href="/animations">
			<button class="custom_button_style">Back</button>
		</a>
	</div>

	<ul class="flex flex-wrap justify-center gap-4 ">
		{#each data.images as img}
			<li class="basis-80 cursor-pointer relative h-80 gallery_li pl-0">
				<a on:click|stopPropagation={enlargeImage} href={null}>
					<img src={img} class="object-cover w-full h-full align-middle" alt="" />
				</a>
			</li>
		{/each}
	</ul>

	<div id="myModal" class="modal">
		<span class="close" on:click={closeModal} on:keypress={closeModalButton}>&times;</span>
		<img on:click|stopPropagation={() => false} class="modal-content" id="img01" alt="">
		<div id="caption"></div>
	</div>
</main>

<style>
    @import "../../../modal.css";

    video.no_hover:hover {
        transform: scale(1);
    }
</style>
