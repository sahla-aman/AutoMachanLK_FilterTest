describe('MY', { viewportWidth: 1260 }, () => {
    it('Model Year', () => {


        cy.visit('https://automachan.lk/en/ad/load/cars-for-sale-in-srilanka?cat=1&subcat=1');

        cy.wait(3000);


        cy.get('.collapsed').contains('Model Year').click();


        cy.xpath("//input[@id='model_year_st']").click();
        cy.xpath("//span[contains(text(),'2019')]").click();

        cy.xpath("//input[@id='model_year_ed']").click();
        cy.xpath("//span[contains(text(),'2022')]").click();

        cy.xpath("/html[1]/body[1]/section[1]/div[2]/div[3]/div[1]/div[1]/div[2]/form[1]/div[5]/div[2]/div[1]/button[1]").click();

        cy.get("div.main-classified").find("h2").then(($names) => {
            cy.log($names)
            const namesArray = Array.from($names, element => element.textContent.trim());
            if (namesArray.length > 0) {
                namesArray.map((item) => {
                    const name = item.toUpperCase();
                    expect(name).to.satisfy((value) => {
                        return value.includes('2019') || value.includes('2020') || value.includes('2021') || value.includes('2022');
                      }, `Expected "${name}" to include 2019, 2020, 2021, or 2022`);
                })
            }
        });
    });
});