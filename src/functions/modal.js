export function closeModalButton(event) {
	console.log(event.key, this);
	if (event.key !== "Esc" || event.keyCode !== 27 || event.key !== "Escape") return;
	closeModal.call(this.document);
}

export function enlargeImage(event) {
	const modal = document.getElementById("myModal");
	const image = event.target;
	const modalImg = document.getElementById("img01");
	const captionText = document.getElementById("caption");

	modal.style.display = "block";
	modalImg.src = image.src;
	captionText.innerHTML = image.alt;
}

export function closeModal() {
	const modal = document.getElementById("myModal");
	modal.style.display = "none";

	// Pause if video
	const modalContent = document.getElementById("img01");

	if (modalContent && modalContent.localName === "video") {
		modalContent.pause();
	}
}
