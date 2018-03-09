function toggleElementDisplay(element) {
	if (element) {
		element.classList.toggle('hidden')
	}
}

const navIcon = document.querySelector('.nav-icon')
const navLinks = document.querySelector('.nav-links')
if (navIcon) {
	navIcon.addEventListener('click', function() {
		toggleElementDisplay(navLinks)
	})
}

function changeButtonText(button) {
	if (button) {
		if (button.innerText === 'Show Details') {
			button.innerText = 'Hide Details'
		} else {
			button.innerText = 'Show Details'
		}
	}
}

const projectDetailsButtons = document.querySelectorAll('.project-details-button')
projectDetailsButtons.forEach(function(button) {
	if (button) {
		button.addEventListener('click', function() {
			changeButtonText(this)
			toggleElementDisplay(this.parentNode.parentNode.children[1])
		})
	}
})