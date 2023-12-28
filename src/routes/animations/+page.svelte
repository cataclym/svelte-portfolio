<script lang="ts">
	export let data;
	import {closeModal, closeModalButton, enlargeImage as enlargeVideo} from "../../functions/modal"

</script>

<style>
	@import "../modal.css";
</style>

<svelte:window on:click={closeModal} on:keyup={closeModalButton}></svelte:window>
<main class="overflow-visible">
	<div>

		<h2>2D Animations</h2>
		<p>
			<mark>WIP: Description</mark>
		</p>
		<ul class="flex flex-wrap justify-center gap-4">
			{#each data.animationsArray as animation}
				<li class="basis-80 cursor-pointer relative h-80 gallery_li pl-0">
					<video src={animation} class="object-cover w-full h-full align-middle custom_video_border"
								 on:click|stopPropagation={enlargeVideo}>
						<track src="" kind="captions">
					</video>
				</li>
			{/each}
		</ul>

		<h2>3D Animations</h2>
		<p>
			<mark>WIP: Description</mark>
		</p>
		<ul class="flex flex-wrap justify-center gap-4">
			{#each data.animationsArray as animation}
				<li class="basis-80 cursor-pointer relative h-80 gallery_li pl-0">
					<video src={animation} class="object-cover w-full h-full align-middle custom_video_border"
								 on:click|stopPropagation={enlargeVideo} >
						<track src="" kind="captions">
					</video>
				</li>
			{/each}
		</ul>

		<h2>3D Models and sculpting</h2>
		<p>
			<mark>WIP: Description</mark>
		</p>
		<ul class="flex flex-wrap justify-center gap-4">
			{#each data.animationsArray as animation}
				<li class="basis-80 cursor-pointer relative h-80 gallery_li pl-0">
					<video src={animation} class="object-cover w-full h-full align-middle custom_video_border"
								 on:click|stopPropagation={enlargeVideo} >
					<track src="" kind="captions">
					</video>
				</li>
			{/each}
		</ul>
	</div>

	<div id="myModal" class="modal">
		<span class="close" contenteditable tabindex="0" role="button" aria-pressed="false" on:click={closeModal} on:keypress={closeModalButton}>&times;</span>
		<video controls on:click|stopPropagation={() => false} class="modal-content" id="img01">
			<div tabindex="0" role="button" aria-pressed="false" on:keypress={() => false} on:click|stopPropagation={() => false} id="caption"></div>
			<track src="" kind="captions">
		</video>
	</div>
</main>
