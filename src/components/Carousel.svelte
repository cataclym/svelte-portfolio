<script lang="ts">
	import { onMount } from 'svelte';

	export let imagesArray: string[];

	onMount(() => {
		const width = document.getElementById('container')
			.offsetWidth;

		document.documentElement.style
			.setProperty('--transform-length', `-${width}px`);
	});

	let imgHTMLArray: string | string[] = [];

	for (const img of imagesArray) {
		imgHTMLArray.push(`<img src="${img}" class="rounded-xl" style="height: 32rem" alt="" />`)
	}
	imgHTMLArray = imgHTMLArray.join("\n");

</script>
<span id="main_container">
	<div id="container">
		{@html imgHTMLArray}
	</div>
	<div id="container2">
		{@html imgHTMLArray}
	</div>
</span>

<style>
    :root {
        --transform-length: -1500px;
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
        animation: 30s imagemove infinite linear;
        align-items: flex-start
    }

    #container2 {
        animation: 30s imagemove2 infinite linear;
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
