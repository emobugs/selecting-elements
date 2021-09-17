window.addEventListener('DOMContentLoaded', () => {
	// This block will be executed once the page is loaded and ready

	const cards = document.querySelectorAll('.card');

	setTimeout(() => {
		cards.forEach((card) => {
			if (!card.className.includes('active')) {
				card.style.display = 'none';
			}
		});
	}, 3000);
});
