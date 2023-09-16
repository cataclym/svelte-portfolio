<script lang="ts">
	import { page } from '$app/stores';

	export let href: string;
	export let text: string;
	export let primary = false;
	export let current = $page.url.pathname === href;
</script>

<a class="linkContainer" class:primary {href}>
	<span class:current class="linktext">{text}</span>
</a>

<style>
	.linkContainer {
		padding: 8px;
		color: var(--accent4);
	}

	.linkContainer:hover,
	.linkContainer:active {
		color: var(--accent3);
	}

	.current,
	.current:hover,
	.current:active {
		/*color: var(--accent4);*/
		cursor: default;
		/*text-decoration: underline 5px var(--accent3);*/
		border-bottom: 5px solid var(--accent3);
	}

	.primary {
		color: var(--accent1);
	}

	.primary:hover,
	.primary:active {
		color: #75acf4;
	}

	.linktext {
		font-family: 'Source Sans Pro';
		font-style: normal;
		font-weight: normal;
		font-size: 18px;
		line-height: 20px;
	}

	a {
		text-decoration: none;
	}
</style>
