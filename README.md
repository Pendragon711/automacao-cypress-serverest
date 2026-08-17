# 🧪 Automação E2E com Cypress - ServeRest

Projeto de automação de testes cobrindo o fluxo negativo de autenticação na plataforma [ServeRest](https://front.serverest.dev/login), desenvolvido com **Cypress** e **JavaScript**.

---

## 📸 Passo a Passo da Construção do Teste

### 1. Acesso à Aplicação (`cy.visit`)
Início da construção do script definindo a URL alvo. O comando `cy.visit()` instrui o Cypress a navegar até a página de login do ServeRest.

<img width="1905" height="1026" alt="CYPRESS CONFIG1" src="https://github.com/user-attachments/assets/51cef207-6feb-4e81-b6ea-5a06a2f12fc7" />


---

### 2. Mapeamento de Elementos e Ações (`cy.get` e `.type`)
Identificação dos campos da tela utilizando seletores limpos (`data-testid`). Inserção das credenciais para simular o comportamento do usuário e clique no botão de entrar.

<img width="1914" height="1026" alt="cypress config2" src="https://github.com/user-attachments/assets/321ab35c-627b-4fda-8fb2-1556ed4691c7" />


---

### 3. Execução e Asserção do Teste no Cypress Runner
Validação da regra de negócio com o teste sendo executado no Cypress. O resultado confirma com sucesso que o alerta de erro `Email e/ou senha inválidos` foi exibido na interface.

<img width="1888" height="909" alt="cypress test result PASS" src="https://github.com/user-attachments/assets/7f231b24-383b-41d3-8334-0c6f10bb209a" />


---

## 📌 Cenários Automatizados

- **CT-001:** Validação de login negativo (exibição de mensagem de erro ao informar credenciais inválidas).

---

## 🛠️ Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/) - Framework de testes E2E
- [Node.js](https://nodejs.org/) - Ambiente de execução JavaScript
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) - Linguagem de programação

---

## 🚀 Como Executar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/Pendragon711/automacao-cypress-serverest.git](https://github.com/Pendragon711/automacao-cypress-serverest.git)<img width="1905" height="1026" alt="CYPRESS CONFIG1" src="https://github.com/user-attachments/assets/bd797970-151a-49d2-9585-301e0670e907" />
