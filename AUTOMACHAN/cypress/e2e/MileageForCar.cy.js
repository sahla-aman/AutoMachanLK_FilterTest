describe('MF', { viewportWidth: 1260 }, () => {
    it('Min mileage filter', () => {


        cy.visit('https://automachan.lk/en/ad/load/cars-for-sale-in-srilanka?cat=1&subcat=1');

        cy.wait(3000);


        cy.get('.collapsed').contains('Mileage').click();

        const minMileage = 50000
        cy.xpath("//input[@id='mileage_st']").type(minMileage.toString());

        cy.xpath("/html[1]/body[1]/section[1]/div[2]/div[3]/div[1]/div[1]/div[2]/form[1]/div[7]/div[2]/div[1]/button[1]").click();

        cy.xpath("/html[1]/body[1]/section[1]/div[2]/div[3]/div[1]/div[2]/div[3]/div[1]/div[1]/div[1]/div/div/a/div/div/div/div/div/div[1]/span").then(($mileages) => {
            cy.log($mileages)
            const mileageArray = Array.from($mileages, element => element.textContent.trim());
            if (mileageArray.length > 0) {
                mileageArray.map((item) => {
                    const mileage = parseInt(item.replace(/[^\d]/g, ''), 10);
                    cy.wrap(mileage).should('be.gte', minMileage);
                })
            }
        });
    });

    it('Max mileage filter', () => {


        cy.visit('https://automachan.lk/en/ad/load/cars-for-sale-in-srilanka?cat=1&subcat=1');

        cy.wait(3000);


        cy.get('.collapsed').contains('Mileage').click();

        const maxMileage = 100000
        cy.xpath("//input[@id='mileage_ed']").type(maxMileage.toString());

        cy.xpath("/html[1]/body[1]/section[1]/div[2]/div[3]/div[1]/div[1]/div[2]/form[1]/div[7]/div[2]/div[1]/button[1]").click();

        cy.xpath("/html[1]/body[1]/section[1]/div[2]/div[3]/div[1]/div[2]/div[3]/div[1]/div[1]/div[1]/div/div/a/div/div/div/div/div/div[1]/span").then(($mileages) => {
            cy.log($mileages)
            const mileageArray = Array.from($mileages, element => element.textContent.trim());
            if (mileageArray.length > 0) {
                mileageArray.map((item) => {
                    const mileage = parseInt(item.replace(/[^\d]/g, ''), 10);
                    cy.wrap(mileage).should('be.lte', maxMileage);
                })
            }
        });
    });
});