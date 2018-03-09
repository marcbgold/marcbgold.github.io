describe('portfolio website', function() {

	describe('toggles element display when button is clicked', function() {

		it('removes hidden class from element on button click', function() {
			const testLink = document.createElement('a')
			testLink.className = 'hidden';
			
			toggleElementDisplay(testLink);

			expect(testLink.classList.contains('hidden')).toEqual(false);
		})

		it('adds hidden class to nav links on button click', function() {
			const testLink = document.createElement('a')

			toggleElementDisplay(testLink);

			expect(testLink.classList.contains('hidden')).toEqual(true);
		})

	})	

})