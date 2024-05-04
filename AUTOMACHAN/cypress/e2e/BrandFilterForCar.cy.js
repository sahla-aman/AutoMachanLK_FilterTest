describe('BF', { viewportWidth: 1260 }, () => {
    it('Brand Filter for Cars', () => {


       cy.visit('https://automachan.lk/en/ad/load/cars-for-sale-in-srilanka?cat=1&subcat=1');
        
       cy.wait(3000);

    
       cy.get('.collapsed').contains('Brand').click();

       cy.xpath('/html[1]/body[1]/section[1]/div[2]/div[3]/div[1]/div[1]/div[2]/form[1]/div[1]/div[2]/div[1]/ul[1]/li[1]/div[1]/label[1]/span[1]').click();
       
       cy.get("div.main-classified").find("h2").then(($names) => { 
        cy.log($names)
        const namesArray = Array.from($names, element => element.textContent.trim());    
        if(namesArray.length > 0){
          namesArray.map((item)=>{
            const name = item.toUpperCase();
            expect(name).to.include('toyota'.toUpperCase());
          })
        }
      });
      
      
      });
    });