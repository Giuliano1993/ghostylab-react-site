/// <reference types="cypress" />

context('FirstTest', ()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000/')
        cy.get('body',{timeout: 8000}).click()
    })

    it('cy can go to contact page',()=>{
        cy.get('.navbar.is-primary').contains('Contact').click();
        cy.location('pathname').should('include', 'contact')
    })
    
    it('can\'t send empty form',()=>{
        cy.get('.navbar.is-primary').contains('Contact').click();
        cy.get('#contact_line [name="name"]').type('giuliano');
        cy.get('#contact_line [name="mail"]').type('giuliano');
        cy.get('#contact_line [name="message"]').type('lorem ipsum');
        cy.get('button[type="submit"]').click();
        cy.get('[name="mail"]').should('have.class','error')
    })
})