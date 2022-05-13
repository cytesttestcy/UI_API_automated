describe('API Search Module', ()=>{
    let host = Cypress.config().host;
    it('TC01_Search product detail with valid SKU Number', ()=>{
        cy.request({
            method: 'GET',
            url: host

        })
        .then((result)=>{
            expect(result.status).to.eq(200)
            expect(result.body.product.name).to.eq('Fano Mattress White Size 6 FT.')
            expect(result.body.product.sku).to.eq('MKP0853315')
        })
    })
})