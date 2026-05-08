function toggleCard(el) {
	el.classList.toggle('open');
}

// Team 3D Carousel
let teamIdx = 0;
const teamCards = document.querySelectorAll('.carousel-card');
const teamCount = teamCards.length;

function renderCarousel() {
	teamCards.forEach((card, i) => {
		let off = i - teamIdx;
		if (off > teamCount / 2) off -= teamCount;
		if (off < -teamCount / 2) off += teamCount;

		if (off === 0) {
			card.style.transform = 'translate(-50%, -50%) rotateY(0) scale(1)';
			card.style.opacity = '1';
			card.style.zIndex = '5';
			card.style.boxShadow = '0 8px 30px rgba(2,40,89,0.2)';
		} else if (Math.abs(off) === 1) {
			const x = off * 160;
			card.style.transform = `translate(calc(-50% + ${x}px), -50%) rotateY(${off * -35}deg) scale(0.85)`;
			card.style.opacity = '0.7';
			card.style.zIndex = '4';
			card.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
		} else {
			const x = off * 250;
			card.style.transform = `translate(calc(-50% + ${x}px), -50%) rotateY(${off * -50}deg) scale(0.7)`;
			card.style.opacity = '0.4';
			card.style.zIndex = '3';
			card.style.boxShadow = 'none';
		}
	});
}

function navTeam(dir) {
	teamIdx = (teamIdx + dir + teamCount) % teamCount;
	renderCarousel();
}

renderCarousel();
