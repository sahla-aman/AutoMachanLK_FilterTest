describe('User Redirects to the correct pages', { viewportWidth: 1260 }, () => {
    it('Nav Test after clicking the vehicle', () => {


       cy.visit('https://automachan.lk/en/');

       cy.get('img[alt="car"]').click();


       cy.wait(2000);

       cy.url().should('include', 'https://automachan.lk/en/ad/load/cars-for-sale-in-srilanka?cat=1&subcat=1');

      //  cy.get('src').should('contain', 'Cars ');
      //cy.get('img[src*="Cars"]').should('be.visible');

      cy.get('.sub-li').should('contain', 'Cars');

      });

      it('Nav Test after clicking the vehicle', () => {


        cy.visit('https://automachan.lk/en/');
 
        cy.get('img[alt="suv').click();
 
 
        cy.wait(2000);
 
        cy.url().should('include', 'https://automachan.lk/en/ad/load/suvs-jeeps-for-sale-in-srilanka?cat=1&subcat=7');
 
         cy.get('.sub-li').should('contain', 'SUVs & Jeeps');
        //cy.get('img[src*="SUVs & Jeeps"]').should('be.visible');
 
       });

       
      it('Nav Test after clicking the vehicle', () => {


        cy.visit('https://automachan.lk/en/');
 
        cy.get('img[alt="van').click();
 
 
        cy.wait(2000);
 
        cy.url().should('include', 'https://automachan.lk/en/ad/load/vans-for-sale-in-srilanka?cat=1&subcat=2');
 
        cy.get('.sub-li').should('contain', 'Vans');
 
       });

       
      it('Nav Test after clicking the vehicle', () => {


        cy.visit('https://automachan.lk/en/');
 
        cy.get('img[alt="bike').click();
 
 
        cy.wait(2000);
 
        cy.url().should('include', 'https://automachan.lk/en/ad/load/motor-bikes-for-sale-in-srilanka?cat=1&subcat=5');
 
        cy.get('.sub-li').should('contain', 'Motor Bikes ');
 
       });
       
      it('Nav Test after clicking the vehicle', () => {


        cy.visit('https://automachan.lk/en/');
 
        cy.get('img[alt="tuktuk').click();
 
 
        cy.wait(2000);
 
        cy.url().should('include', 'https://automachan.lk/en/ad/load/three-wheelers-for-sale-in-srilanka?cat=1&subcat=3');
 
        cy.get('.sub-li').should('contain', 'Three Wheelers ');
 
       });


       it('Nav Test after clicking the vehicle', () => {


        cy.visit('https://automachan.lk/en/');
 
        cy.get('img[alt="lorry').click();
 
 
        cy.wait(2000);
 
        cy.url().should('include', 'https://automachan.lk/en/ad/load/trucks-heavy-duty-for-sale-in-srilanka?cat=1&subcat=6');
 
        cy.get('.sub-li').should('contain', 'Trucks & Heavy Duty ');
 
       });
       
       it('Nav Test after clicking the vehicle', () => {


        cy.visit('https://automachan.lk/en/');
 
        cy.get('img[alt="bus').click();
 
 
        cy.wait(2000);
 
        cy.url().should('include', 'https://automachan.lk/en/ad/load/buses-for-sale-in-srilanka?cat=1&subcat=4');
 
        cy.get('.sub-li').should('contain', 'Buses');
 
       });

       

       

       


  });
  