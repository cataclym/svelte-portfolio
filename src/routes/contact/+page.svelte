<script>
	import {
		PUBLIC_EMAIL1,
		PUBLIC_EMAIL2,
		PUBLIC_WHATSAPP
	} from "$env/static/public";

	export let data;

	const contact = data?.contact
		?.replaceAll("{PUBLIC_EMAIL1}", PUBLIC_EMAIL1)
		?.replaceAll("{PUBLIC_EMAIL2}", PUBLIC_EMAIL2)
		?.replaceAll("{PUBLIC_WHATSAPP}", PUBLIC_WHATSAPP)
</script>

<main class="contact_page text-left">
	{@html contact || ""}
</main>
