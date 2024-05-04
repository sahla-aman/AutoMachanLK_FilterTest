describe('LF', { viewportWidth: 1260 }, () => {
  it('location Filter for Cars', () => {


    cy.visit('https://automachan.lk/en/ad/load/cars-for-sale-in-srilanka?cat=1&subcat=1');

    cy.wait(3000);


    cy.xpath("//a[contains(text(),'Anuradhapura')]").click();

    cy.wait(3000);

    cy.get(".place").then(($places) => {
      cy.log($places)
      const placesArr = Array.from($places, element => element.textContent.split(', ')[1]);
      if (placesArr.length > 0) {
        placesArr.map((item) => {
          const place = item.toUpperCase();
          expect(place).to.include('Anuradhapura'.toUpperCase());
        })
      }
    });
    


  });
});