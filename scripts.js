// Seleciona os elementos do formulário 
const form = document.querySelector('form')
const amount = document.getElementById('amount')
const expense = document.getElementById('expense')
const category = document.getElementById('category')

// Captura o eento de input para formatar o valor
amount.oninput = () => {
    // Obtém o valor do input e remove caracteres não numéricos
    let value = amount.value.replace(/\D/g, "")

    // Transforma o valor em centavos
    value = Number(value) / 100

    // Atualiza o valor do input com o valor formatado
    amount.value = formatCurrencyBRL(value)
}

function formatCurrencyBRL(value){
    // Formata o valor como moeda brasileira
    value = value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })

    // Retorna o valor formatado
    return value
}

form.onsubmit = (event) => {
    event.preventDefault()

}