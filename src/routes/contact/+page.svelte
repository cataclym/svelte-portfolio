<script>
	import {
		PUBLIC_EMAIL1,
		PUBLIC_EMAIL2,
		PUBLIC_WHATSAPP
	} from '$env/static/public';
</script>

<main class="contact_page">
	<h2 class="header">Contact Me</h2>
	<p class="m-auto">
		Natalie T, Student in 3D Animation
		<br>
		Lasalle College of the Arts
		<br>
		<br>
	</p>
	<h3>Email</h3>
	<p>
		<a href="mailto:{PUBLIC_EMAIL1}">{PUBLIC_EMAIL1}</a>
		<br><a
		href="mailto:{PUBLIC_EMAIL2}">{PUBLIC_EMAIL2}</a>
		<br>
	</p>
	<h3>Phone</h3>
	<p><a href="tel: {PUBLIC_WHATSAPP}">{PUBLIC_WHATSAPP}</a></p>
</main>
