describe('portfolio website', function() {

	describe('toggles element display when button is clicked', function() {

		it('removes hidden class from element on button click', function() {
			const testLink = document.createElement('a')
			testLink.className = 'hidden'
			
			toggleElementDisplay(testLink)

			expect(testLink.classList.contains('hidden')).toEqual(false);
		})

		it('adds hidden class to nav links on button click', function() {
			const testLink = document.createElement('a')

			toggleElementDisplay(testLink)

			expect(testLink.classList.contains('hidden')).toEqual(true);
		})

	})

	describe('changes text on project details button when clicked', function() { 

		it('changes text from show details to hide details', function() {
			const testButton = document.createElement('button')
			testButton.innerText = 'Show Details'

			changeButtonText(testButton)

			expect(testButton.innerText).toEqual('Hide Details');
		})

		it('changes text from hide details to show details', function() {
			const testButton = document.createElement('button')
			testButton.innerText = 'Hide Details'

			changeButtonText(testButton)

			expect(testButton.innerText).toEqual('Show Details');
		})

	})	

})