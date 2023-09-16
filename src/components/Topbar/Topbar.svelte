<script>
	import NavigationLink from './NavigationLink.svelte';

	const navigationTargets = [
		{
			name: 'Illustrations',
			url: '/illustrations'
		},
		{
			name: 'Animations',
			url: '/animations'
		}
	];
</script>

<div class="header">
	<div class="leftPart">
		<NavigationLink href="/" text="Home" />
		{#each navigationTargets as target}
			<NavigationLink href={target.url} text={target.name} primary={target.primary} />
		{/each}
	</div>
</div>

<style>
	.header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		background: var(--accent4);
		height: 96px;
		max-width: 100%;
		overflow: hidden;
		padding: 0px 64px;
		position: sticky;
		top: 0px;
		z-index: 10;
	}

	.leftPart {
		display: inline-flex;
		order: 0;
		flex-grow: 0;
		padding: 16px 0px;
	}
</style>
