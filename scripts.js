// Seleciona os elementos do formulário para manipulação posterior
const form = document.querySelector('form')
const amount = document.getElementById('amount')
const expense = document.getElementById('expense')
const category = document.getElementById('category')

// Adiciona um ouvinte de evento para formatar o valor enquanto o usuário digita
amount.oninput = () => {
    // Remove todos os caracteres que não são dígitos (números)
    let value = amount.value.replace(/\D/g, "")

    // Converte o valor para centavos (divide por 100 para obter reais)
    value = Number(value) / 100

    // Atualiza o campo de valor com o formato de moeda brasileiro
    amount.value = formatCurrencyBRL(value)
}

// Função para formatar um número como moeda brasileira (BRL)
function formatCurrencyBRL(value){
    // Usa o método toLocaleString para aplicar o formato de moeda
    value = value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })

    // Retorna o valor já formatado
    return value
}

// Adiciona um ouvinte de evento para tratar o envio do formulário
form.onsubmit = (event) => {
    // Impede o recarregamento da página ao enviar o formulário
    event.preventDefault()

    // Monta um objeto com os dados preenchidos pelo usuário
    const newExpense = {
        id: new Date().getTime(), // Cria um ID único usando o timestamp atual
        expense: expense.value, // Obtém o nome da despesa digitado
        category_id: category.value, // Obtém o valor (id) da categoria selecionada
        category_name: category.options[category.selectedIndex].text, // Obtém o nome da categoria selecionada
        amount: amount.value, // Obtém o valor da despesa já formatado
        created_at: new Date(), // Registra a data e hora da criação da despesa
    }

    // Exibe o objeto da nova despesa no console para conferência
    console.log(newExpense)
}


