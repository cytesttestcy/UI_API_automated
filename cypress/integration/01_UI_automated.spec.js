describe("Search module", ()=>{

    it("TC01_To verify that user can search product properly for case search by SKU number", ()=>{

        cy.visit("https://www.officemate.co.th/en")
        cy.get('[data-testid="txt-SearchBar"]').type('MKP0853315')
        cy.get('#btn-searchResultPage').click()

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
          });

          cy.get('#lbl-ProductPreview-Name-MKP0853315').click()
          cy.get('#lbl-ProductHeader-Name-MKP0853315').contains('Fano Mattress White Size 6 FT.')
          cy.get('#lbl-ProductHeader-SKU-MKP0853315').contains('MKP0853315')
          
    })
})