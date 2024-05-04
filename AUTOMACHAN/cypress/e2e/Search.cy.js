describe('Searching for a vechicle', { viewportWidth: 1260 }, () => {
    it('Search ', () => {


       cy.visit('https://automachan.lk/en/ad/load/cars-for-sale-in-srilanka?cat=1&subcat=1');
        
      cy.wait(3000);
       cy.get('#txtSearchMain').type('honda');

       cy.get('.btn.btn-primary.right-radius').click();

       cy.wait(3000);
      
       cy.get("div.main-classified").find("h2").then(($names) => { 
        cy.log($names)
        const namesArray = Array.from($names, element => element.textContent.trim());    
        if(namesArray.length > 0){
          namesArray.map((item)=>{
            const name = item.toUpperCase();
            expect(name).to.include('honda'.toUpperCase());
          })
        }
      });
      
      
      });
    });
