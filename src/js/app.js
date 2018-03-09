function toggleNavLinksDisplay(element) {
	if (element) {
		element.classList.toggle('hidden');
	}
}

const navIcon = document.querySelector('.nav-icon')
const navLinks = document.querySelector('.nav-links')
if (navIcon) {
	navIcon.addEventListener('click', function() {
		toggleNavLinksDisplay(navLinks);
})}

// const blah = document.querySelector('footer p')
// if (blah) {
// 	blah.addEventListener('click', function() {
// 		toggleNavLinksDisplay(blah);
// 	})
// }