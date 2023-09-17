<script lang="ts">
	import { page } from '$app/stores';

	export let href: string;
	export let text: string;
	export let primary = false;
	export let current = $page.url.pathname === href;
</script>

<a class="linkContainer" class:current class:primary {href}>
	<span class:current class="linktext">{text}</span>
</a>

<style>
	.linkContainer {
		padding: 8px;
		color: var(--background);
	}

	/*.linkContainer:hover,*/
	/*.linkContainer:active {*/
	/*}*/

	a.current,
	a.current:hover,
	a.current:active {
		/*color: var(--accent4);*/
		cursor: default;
		/*text-decoration: underline 5px var(--accent3);*/
	}

	span.current,
	.linktext:hover {
		border-bottom: 5px solid var(--accent4);
	}

	.primary {
		color: var(--accent1);
	}

	.primary:hover,
	.primary:active {
		color: var(--accent1);
	}

	.linktext {
		font-family: 'Source Sans Pro';
		font-style: normal;
		font-weight: normal;
		font-size: 20px;
		line-height: 20px;
	}

	a {
		text-decoration: none;
	}
</style>
