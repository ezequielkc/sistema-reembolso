# Documentação das Conexões entre Códigos - Sistema de Reembolso

## Visão Geral do Sistema

O Sistema de Reembolso é uma aplicação web que permite aos usuários registrar despesas e visualizar um resumo dos gastos. O sistema é composto por três arquivos principais que trabalham em conjunto:

- **`index.html`** - Estrutura da interface
- **`styles.css`** - Estilização visual
- **`scripts.js`** - Funcionalidades interativas

---

## Conexões entre HTML e JavaScript

### 1. Seleção de Elementos DOM

```javascript
// scripts.js - Linhas 1-8
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const expense = document.getElementById("expense")
const category = document.getElementById("category")
```

**Conexão com HTML:**
```html
<!-- index.html - Linhas 32-33 -->
<input type="text" id="expense" name="expense" required />

<!-- index.html - Linhas 36-44 -->
<select id="category" name="category" required>
  <option value="food">Alimentação</option>
  <!-- ... outras opções ... -->
</select>

<!-- index.html - Linhas 47-52 -->
<input type="text" name="amount" id="amount" placeholder="R$ 0,00" required />
```

**Explicação:** O JavaScript usa `getElementById()` e `querySelector()` para "pegar" os elementos HTML pelo seu `id` ou `tag`. Isso cria uma ponte entre a estrutura (HTML) e a lógica (JavaScript).

### 2. Captura de Eventos do Formulário

```javascript
// scripts.js - Linhas 35-50
form.onsubmit = (event) => {
    event.preventDefault()
    const newExpense = {
        id: new Date().getTime(),
        expense: expense.value,
        category_id: category.value,
        // ... outros dados
    }
    expenseAdd(newExpense)
}
```

**Conexão com HTML:**
```html
<!-- index.html - Linhas 30-58 -->
<form>
  <input type="text" id="expense" name="expense" required />
  <select id="category" name="category" required>
  <input type="text" name="amount" id="amount" placeholder="R$ 0,00" required />
  <button type="submit">Adicionar despesa</button>
</form>
```

**Explicação:** Quando o usuário clica no botão "Adicionar despesa", o JavaScript captura esse evento (`onsubmit`) e coleta os valores dos campos do formulário para criar um objeto com os dados da despesa.

---

## Conexões entre HTML e CSS

### 1. Classes CSS para Estilização

```html
<!-- index.html - Linhas 60-75 -->
<aside>
  <header>
    <p>Minhas solicitações <i>&bullet;</i> <span>0 despesas</span></p>
    <h2><small>R$</small>0,00</h2>
  </header>
  <ul>
    <!-- Lista de despesas -->
  </ul>
</aside>
```

```css
/* styles.css - Linhas 200-220 */
aside {
  background-color: #f9fbfa;
  border-radius: 1rem;
  padding: 2.5rem;
  max-width: 462px;
  min-width: 600px;
}

aside header {
  display: flex;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #e8f2ff;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
}
```

**Explicação:** O CSS usa seletores que correspondem às tags HTML (`aside`, `header`, `ul`) para aplicar estilos específicos a cada seção da interface.

### 2. Estados Interativos (Focus, Hover)

```css
/* styles.css - Linhas 120-125 */
input:focus,
select:focus {
  border: 1.5px solid #2563eb;
}

/* styles.css - Linhas 140-145 */
button:hover {
  background-color: #1d4ed8;
}
```

**Conexão com HTML:**
```html
<!-- index.html - Linhas 32-52 -->
<input type="text" id="expense" name="expense" required />
<select id="category" name="category" required>
<input type="text" name="amount" id="amount" placeholder="R$ 0,00" required />
<button type="submit">Adicionar despesa</button>
```

**Explicação:** O CSS define como os elementos se comportam visualmente quando o usuário interage com eles (foco nos campos, hover no botão).

---

## Conexões entre JavaScript e CSS

### 1. Criação Dinâmica de Elementos com Classes CSS

```javascript
// scripts.js - Linhas 55-85
function expenseAdd(newExpense) {
    const expenseItem = document.createElement("li")
    expenseItem.classList.add("expense")  // Adiciona classe CSS

    const expenseInfo = document.createElement("div")
    expenseInfo.classList.add("expense-info")  // Adiciona classe CSS

    const expenseAmount = document.createElement("span")
    expenseAmount.classList.add("expense-amount")  // Adiciona classe CSS

    const removeIcon = document.createElement("img")
    removeIcon.classList.add("remove-icon")  // Adiciona classe CSS
}
```

```css
/* styles.css - Linhas 280-320 */
.expense {
  display: flex;
  align-items: center;
  height: 38px;
}

.expense-info strong {
  font-size: 0.87rem;
  color: #1f2523;
}

.expense-amount {
  font-size: 0.87rem;
  color: #1f2523;
  font-weight: 600;
}

.remove-icon {
  height: 1rem;
  margin-left: 0.5rem;
  cursor: pointer;
  transition: opacity 0.2s;
}
```

**Explicação:** O JavaScript cria elementos HTML dinamicamente e adiciona classes CSS a eles. Essas classes fazem com que os elementos sejam estilizados automaticamente pelo CSS.

### 2. Manipulação de Classes para Interatividade

```javascript
// scripts.js - Linhas 150-165
expenseList.addEventListener("click", function (event) {
    if (event.target.classList.contains("remove-icon")) {
        const item = event.target.closest(".expense")
        item.remove()
    }
    updateTotals()
})
```

**Explicação:** O JavaScript usa `classList.contains()` para verificar se um elemento tem uma classe específica, permitindo identificar qual elemento foi clicado e executar ações específicas.

---

## Fluxo de Dados no Sistema

### 1. Entrada de Dados
```
HTML (formulário) → JavaScript (captura eventos) → Processamento → Atualização da interface
```

### 2. Exibição de Dados
```
JavaScript (cria elementos) → HTML (estrutura) → CSS (estilização) → Interface visual
```

### 3. Interação do Usuário
```
Usuário clica → JavaScript (event listener) → Manipulação DOM → CSS (estados visuais) → Feedback visual
```

---

## Estrutura de Arquivos e Dependências

```
Sistema de Reembolso/
├── index.html          ← Arquivo principal (referencia CSS e JS)
├── styles.css          ← Estilos (referenciado pelo HTML)
├── scripts.js          ← Lógica (referenciado pelo HTML)
└── img/               ← Imagens (usadas pelo HTML e JS)
    ├── food.svg
    ├── accommodation.svg
    ├── transport.svg
    └── remove.svg
```

### Dependências:
- **HTML** → **CSS** (via `<link>`)
- **HTML** → **JavaScript** (via `<script>`)
- **JavaScript** → **HTML** (via seletores DOM)
- **CSS** → **HTML** (via seletores CSS)
- **JavaScript** → **Imagens** (via `src` dinâmico)

---

## Conceitos-Chave para Entender as Conexões

### 1. DOM (Document Object Model)
- O HTML cria uma "árvore" de elementos
- O JavaScript pode acessar e modificar essa árvore
- O CSS pode estilizar qualquer elemento da árvore

### 2. Eventos
- HTML define elementos interativos
- JavaScript "escuta" eventos (clique, submit, etc.)
- CSS define como elementos se comportam visualmente durante eventos

### 3. Seletores
- CSS usa seletores para aplicar estilos
- JavaScript usa seletores para manipular elementos
- Ambos se baseiam na estrutura HTML

### 4. Classes CSS
- Servem como "identificadores visuais"
- JavaScript pode adicionar/remover classes dinamicamente
- CSS define o visual baseado nas classes

---

## Como as Três Tecnologias Trabalham Juntas

1. **HTML** = "Esqueleto" (estrutura)
2. **CSS** = "Roupa" (aparência)
3. **JavaScript** = "Cérebro" (comportamento)

**Exemplo prático:**
- HTML cria um botão
- CSS faz o botão ficar azul e arredondado
- JavaScript faz o botão executar uma ação quando clicado

Essa separação de responsabilidades permite que cada tecnologia faça o que faz melhor, criando um sistema modular e fácil de manter. 