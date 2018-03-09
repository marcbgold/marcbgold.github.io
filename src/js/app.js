function toggleElementDisplay(element) {
	if (element) {
		element.classList.toggle('hidden');
	}
}

const navIcon = document.querySelector('.nav-icon')
const navLinks = document.querySelector('.nav-links')
if (navIcon) {
	navIcon.addEventListener('click', function() {
		toggleElementDisplay(navLinks);
})}

const projectDetailsButtons = document.querySelectorAll('.project-details-button')
projectDetailsButtons.forEach(function(button) {
	if (button) {
		button.addEventListener('click', function() {
			toggleElementDisplay(this.parentNode.parentNode.children[1]);
		})
	}
})