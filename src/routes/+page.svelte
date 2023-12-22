<script>
	import Carousel from '../components/Carousel.svelte';

	export let data;
	const { imagesArray } = data;
</script>

<main>
	<h2 class="item__title">Digital Portfolio</h2>
	<h3 class="frontPageHeader3">Illustrator, 3D Sculptor, Modeller & Animator</h3>
	<Carousel {imagesArray} />

	<div class="grid_containter">
		<h2 class="frontPageHeader3 grid_header">About me</h2>
		<p class="grid_item_paragraph">
			I'm an illustrator, 3D sculptor, modeller & animator. I'm currently a 2nd year student in Lasalle College of the
			Arts pursuing 3D character design and animation as a career in the future.
			<br>
			<br>
			I'm a Malaysian who is currently studying in Singapore to further my studies in the art industry. I loved art
			since I was a kid and dreamed of being someone who can make any imagination into reality. I am someone who's
			motivated and inspired easily through films and songs I come across. Friends say I'm wise through my ways of
			giving people advice on both work life and relationships. Quality of production is what I strive for when doing my
			projects and personal work.
			<br>
			<br>
			Some artist that I look up to are Sam Yang (Samdoesart), Kooleen and Wlop.
		</p>
		<div class="relative grid_item_img mb-10">
			<img alt="" class="rounded-xl"
					 src="https://static.wixstatic.com/media/00cfef_434a09960ede48659f7271f972bf9b90~mv2.jpg/v1/crop/x_305,y_0,w_638,h_638/fill/w_435,h_435,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/photo_2023-03-02_02-15-57_edited.jpg" />
		</div>
	</div>
</main>
