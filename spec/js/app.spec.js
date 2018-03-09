describe('portfolio website', function() {

	describe('toggles nav links display when menu button is clicked', function() {

		it('removes hidden class from nav links on button click', function() {
			const testLink = document.createElement('a')
			testLink.className = 'hidden';
			
			toggleNavLinksDisplay(testLink);

			expect(testLink.classList.contains('hidden')).toEqual(false);
		})

		it('adds hidden class to nav links on button click', function() {
			const testLink = document.createElement('a')

			toggleNavLinksDisplay(testLink);

			expect(testLink.classList.contains('hidden')).toEqual(true);
		})

	})	

})