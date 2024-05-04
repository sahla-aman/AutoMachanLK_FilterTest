describe('TF', { viewportWidth: 1260 }, () => {
    it('Transmission Filter for Car', () => {


        cy.visit('https://automachan.lk/en/ad/load/cars-for-sale-in-srilanka?cat=1&subcat=1');

        cy.wait(3000);


        cy.get('.collapsed').contains('Transmission').click();

        cy.xpath('/html[1]/body[1]/section[1]/div[2]/div[3]/div[1]/div[1]/div[2]/form[1]/div[4]/div[2]/div[1]/ul[1]/li[1]/div[1]/label[1]/span[1]').click();

        cy.xpath("/html[1]/body[1]/section[1]/div[2]/div[3]/div[1]/div[2]/div[3]/div[1]/div[1]/div[1]/div/div/a/div/div/div/div/div/div[2]/span").then(($transmissionTypes) => {
            cy.log($transmissionTypes)
            const transmissionsArray = Array.from($transmissionTypes, element => element.textContent.trim());
            if (transmissionsArray.length > 0) {
                transmissionsArray.map((item) => {
                    const name = item.toUpperCase();
                    expect(name).to.include('manual'.toUpperCase());
                })
            }
        });


    });
});