describe('Wanted Adds', () => {
    it('Vehicle Ad Filter', () => {


        cy.visit('https://automachan.lk/en/ad/all_wanted_ads?Cars&c=1');

        cy.wait(3000);
        cy.xpath('//body/div[4]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]').click();
        
        cy.wait(3000);

        cy.get(".sub-message-name.ext-jobs-title").then(($CarTypes) => {
            cy.log($CarTypes)
              
                const CarsArray = Array.from($CarTypes, element => element.textContent.trim());
              
                if (CarsArray.length > 0) {
                  const expectedOptions = ['CAR', 'WAGON', 'ALLION']; 
                  CarsArray.forEach((item) => {
                    const name = item.toUpperCase();
            
                    let found = false;
                    for (const option of expectedOptions) {
                      if (name.includes(option)) { 
                        found = true;
                        break;
                      }
                    }
              
                    if (found) {
                    } else {
                      cy.log(`Unexpected car type found: ${name}`);
                    }
                  });
                }
              });
              
        });
     });