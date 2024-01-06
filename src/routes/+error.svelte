<script>
	import {page} from "$app/stores";
</script>

<h1 class="text-center" style="color: var(--accent4)">{$page.error?.message || "Unknown error occurred!"}</h1>
<img class="block m-auto" src="https://http.cat/{$page.status}" alt="{String($page.status)}">
