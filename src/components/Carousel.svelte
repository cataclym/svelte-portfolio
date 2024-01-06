<script lang="ts">
	import { onMount } from 'svelte';

	export let imagesArray: string[];

	onMount(() => {
		const container = document.getElementById('container');
		const container2 = document.getElementById('container2');

		document.documentElement.style
			.setProperty('--transform-length', `-${container.offsetWidth}px`);

		container.style.animationPlayState = 'running';
		container2.style.animationPlayState = 'running';
	});
</script>

<span id="main_container">
	<div id="container">
			{#each imagesArray as src}
				<img src={src} class="rounded-xl" style="height: 32rem" alt="" />
			{/each}
	</div>
	<div id="container2">
			{#each imagesArray as src}
				<img src={src} class="rounded-xl" style="height: 32rem" alt="" />
			{/each}
	</div>
</span>

<style>
    :root {
        --transform-length: 0px;
    }

    #main_container {
        height: 32rem;
        max-width: min-content;
        display: flex;
    }

    #container, #container2 {
        transform: translateZ(0);
        display: inline-flex;
        height: 32rem;
        flex-wrap: nowrap;
        max-width: min-content;
        gap: 1rem;
        animation: 30s imagemove infinite linear paused;
        align-items: flex-start
    }

    #container2 {
        animation: 30s imagemove2 infinite linear paused;
    }

    @keyframes imagemove {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(var(--transform-length));
        }
    }

    @keyframes imagemove2 {
        0% {
            transform: translateX(calc((var(--transform-length) * -1) - 100%));
        }
        100% {
            transform: translateX(var(--transform-length));
        }
    }
</style>
