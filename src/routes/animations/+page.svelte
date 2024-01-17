<script lang="ts">
	import { goto } from "$app/navigation";
	import { animations } from "../../captions/animations";

	export let data;
</script>

<style>
    @import "../modal.css";
</style>

<main class="overflow-visible">
	<div>
		<h2>2D Animations</h2>
		<ul class="flex flex-wrap justify-center overflow-visible gap-10">
			{#each data.files2d as anim}
				{@const file = anim.slice(anim.lastIndexOf("/") + 1)}
				{@const fileNameNoExt = anim.slice(0, anim.indexOf(".mp4"))}
				{@const path = encodeURI(fileNameNoExt)}
				{@const hasWebm = data.webm2d.find(f => f.slice(0, -5) === fileNameNoExt)}
				<li class="basis-96 relative gallery_li pl-0">
					<h3>{animations[file]?.alt || file.slice(0, -4)}</h3>
					<a style="cursor: pointer" href={null} on:click={() => goto(path, { replaceState: false })}>
						<video preload="metadata" class="object-cover w-full h-full align-middle custom_video_border">
							{#if hasWebm}
								<source src={hasWebm} type="video/webm">
							{/if}
							<source src={anim} type="video/mp4">
						</video>
					</a>
				</li>
			{/each}
		</ul>

		<h2 class="mt-20">3D Animations</h2>
		<ul class="flex flex-wrap justify-center overflow-visible gap-10">
			{#each data.files3d as anim}
				{@const file = anim.slice(anim.lastIndexOf("/") + 1)}
				{@const fileNameNoExt = anim.slice(0, anim.indexOf(".mp4"))}
				{@const path = encodeURI(anim.slice(0, anim.indexOf(".mp4")))}
				{@const hasWebm = data.webm2d.find(f => f.slice(0, -5) === fileNameNoExt)}
				<li class="basis-96 relative h-96 gallery_li pl-0">
					<h3>{animations[file]?.alt || file.slice(0, -4)}</h3>
					<a style="cursor: pointer" href={null} on:click={() => goto(path, { replaceState: true })}>
						<video preload="metadata" class="object-cover w-full h-full align-middle custom_video_border">
							{#if hasWebm}
								<source src={hasWebm} type="video/webm">
							{/if}
							<source src={anim} type="video/mp4">
						</video>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</main>
