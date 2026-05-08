function toggleServiceDetails(button) {
	const card = button.parentElement;
	card.classList.toggle("expanded");
	button.textContent = card.classList.contains("expanded")
		? "Mostrar menos"
		: "Saber mais";
}

function scrollCarousel(direction) {
	const container = document.querySelector(".carousel");
	const scrollAmount = direction === "next" ? 300 : -300;
	container.scrollBy({ left: scrollAmount, behavior: "smooth" });
}
