describe('PF', { viewportWidth: 1260 }, () => {
    it('Price Filter', () => {


        cy.visit('https://automachan.lk/en/ad/load/cars-for-sale-in-srilanka?cat=1&subcat=1');

        cy.wait(3000);


        cy.get('.collapsed').contains('Price (LKR)').click();

        const minPrice = 2000000
        const maxPrice = 5000000
        cy.xpath("/html[1]/body[1]/section[1]/div[2]/div[3]/div[1]/div[1]/div[2]/form[1]/div[6]/div[2]/div[1]/div[1]/input[1]").type(minPrice.toString());

        cy.xpath("/html[1]/body[1]/section[1]/div[2]/div[3]/div[1]/div[1]/div[2]/form[1]/div[6]/div[2]/div[1]/div[2]/input[1]").type(maxPrice.toString());

        cy.xpath("/html[1]/body[1]/section[1]/div[2]/div[3]/div[1]/div[1]/div[2]/form[1]/div[6]/div[2]/div[1]/button[1]").click();

        cy.get(".svk_price").then(($prices) => {
            cy.log($prices)
            const pricesArray = Array.from($prices, element => element.textContent.trim());
            if (pricesArray.length > 0) {
                pricesArray.map((item) => {
                    const price = parseInt(item.replace(/[^\d]/g, ''), 10);
                    cy.wrap(price).should('be.gte', minPrice).and('be.lte', maxPrice);
                })
            }
        });
    });
});