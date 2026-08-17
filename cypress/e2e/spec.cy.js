describe('ServeRest - Testes de Autenticação', () => {
  it('CT-001: Deve exibir mensagem de erro ao tentar logar com credenciais inválidas', () => {
    cy.visit('https://front.serverest.dev/login')

    // Preenchimento do formulário com dados inválidos
    cy.get('[data-testid="email"]').type('test@test.com')
    cy.get('[data-testid="senha"]').type('test12345')
    cy.get('[data-testid="entrar"]').click()

    // Validação da mensagem de alerta esperada
    cy.get('.alert').contains('Email e/ou senha inválidos')
  })
})