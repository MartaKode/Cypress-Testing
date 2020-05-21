describe('UserForm inputs', () => {
    it('can navigate to the site', () => {
      cy.visit('http://localhost:3000')
      cy.url().should('include', 'localhost')
    })

    it('can type a first and last name', () => {
        cy.get('input[name="first_name"]')
        .type('Heyoo')
        .should('have.value','Heyoo')

        cy.get('input[name="last_name"]')
        .type('Halooo')
        .should('have.value', 'Halooo')
    })

    it('can type an email', () => {
        cy.get('input[name="email"]')
          .type('francus@frania.com')
          .should('have.value', 'francus@frania.com')
      })

      it('can type a password', () => {
        cy.get('input[name="password"]')
          .type('passwordstrong')
          .should('have.value', 'passwordstrong')
      })

      it('can check terms of service', () => {
          cy.get('input[name="termsOfService"]')
          .click()
      })

      it('can submit form', () => {
          cy.get('button')
          .click()
      })

      it('submit is disabled', () => {
          cy.get('button')
          .should('be.disabled')
      })

      it('validate that inputs are empty', () => {
        cy.get('input[name="first_name"]')
        .should('be.empty')

        cy.get('input[name="last_name"]')
        .should('be.empty')

        cy.get('input[name="email"]')
        .should('be.empty')
      })

      it('can check terms of service', () => {
        cy.get('input[name="termsOfService"]')
        .should('be.empty')
    })
})

