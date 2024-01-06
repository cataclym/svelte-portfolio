<script lang="ts">
	import { goto } from "$app/navigation";
	import { animations } from "../../captions/animations"

	export let data;
</script>

<style>
    @import "../modal.css";
</style>

<main class="overflow-visible">
	<div>

		<h2>2D Animations</h2>
		<ul class="flex flex-wrap justify-center overflow-visible">
			{#each data.files2d as anim}
				{@const file = anim.slice(anim.lastIndexOf("/") + 1)}
				{@const path = encodeURI(anim.slice(0, anim.indexOf(".mp4")))}
				<li class="basis-96 relative h-96 gallery_li pl-0">
					<h3>{animations[file]?.alt || "Animation"}</h3>
					<a style="cursor: pointer" href={null} on:click={() => goto(path, { replaceState: true })}>
						<video preload="metadata" src={anim} class="object-cover w-full h-80 align-middle custom_video_border" />
					</a>
				</li>
			{/each}
		</ul>

		<h2>3D Animations</h2>
		<ul class="flex flex-wrap justify-center overflow-visible">
			{#each data.files3d as anim}
				{@const file = anim.slice(anim.lastIndexOf("/") + 1)}
				{@const path = encodeURI(anim.slice(0, anim.indexOf(".mp4")))}
				<li class="basis-96 relative h-96 gallery_li pl-0">
					<h3>{animations[file]?.alt || "Animation"}</h3>
					<a style="cursor: pointer" href={null} on:click={() => goto(path, { replaceState: true })}>
						<video preload="metadata" src={anim} class="object-cover w-full h-80 align-middle custom_video_border" />
					</a>
				</li>
			{/each}
		</ul>
	</div>
</main>
