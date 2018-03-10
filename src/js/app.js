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

const modal = document.querySelector('.modal-window')
const profileButton = document.querySelector('.profile-button')
const modalCloseX = document.querySelector('.modal-close');

// When the user clicks the button, open the modal 
if (profileButton) {
	profileButton.addEventListener('click', function() {
		if (modal) {
			modal.style.display = 'flex'
		}
	})	
}

// When the user clicks on <span> (x), close the modal
if (modalCloseX) {
	modalCloseX.addEventListener('click', function() {
		if (modal) {
			modal.style.display = 'none'
		}
	})
}

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none'
    }
})