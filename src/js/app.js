function toggleElementDisplay(element) {
	if (element) {
		element.classList.toggle('hidden');
	}
}

// show/hide nav links

const navIcon = document.querySelector('.nav-icon');
const navLinks = document.querySelector('.nav-links');
if (navIcon) {
	navIcon.addEventListener('click', function() {
		toggleElementDisplay(navLinks);
	})
}

// change text on show/hide details button

function changeButtonText(button) {
	if (button) {
		if (button.innerText === 'Show Details') {
			button.innerText = 'Hide Details';
		} else {
			button.innerText = 'Show Details';
		}
	}
}

const projectDetailsButtons = document.querySelectorAll('.project-details-button');
projectDetailsButtons.forEach(function(button) {
	if (button) {
		button.addEventListener('click', function() {
			changeButtonText(this);
			toggleElementDisplay(this.parentNode.parentNode.children[1]);
		})
	}
})

// modal window

const modal = document.querySelector('.modal-window');
const profileButton = document.querySelector('.profile-button');
const modalCloseX = document.querySelector('.modal-close');

if (profileButton) {
	profileButton.addEventListener('click', function() {
		if (modal) {
			modal.style.display = 'flex';
		}
	})	
}

if (modalCloseX) {
	modalCloseX.addEventListener('click', function() {
		if (modal) {
			modal.style.display = 'none';
		}
	})
}

window.addEventListener('click', function(event) {
	if (event.target === modal) {
		modal.style.display = 'none';
	}
})

// carousel

const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
const carouselItems = document.querySelectorAll('.carousel-items p');
let counter = 0;
const amount = carouselItems.length;
let current = carouselItems[0];

function navigate(direction) {
	toggleElementDisplay(current);
	counter += direction;

	if (direction === -1 && counter < 0) {
		counter = amount - 1;
	}
	if (direction === 1 && counter === amount) {
		counter = 0;
	}

	current = carouselItems[counter];
	toggleElementDisplay(current);
}

if (prevButton) {
	prevButton.addEventListener('click', function() {
		navigate(-1);
	})
}

if (nextButton) {
	nextButton.addEventListener('click', function() {
		navigate(1);
	})
}