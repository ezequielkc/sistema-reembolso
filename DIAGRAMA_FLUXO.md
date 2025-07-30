# Diagrama de Fluxo - Sistema de Reembolso

## Fluxo de Dados Completo

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   index.html    │    │   styles.css    │    │  scripts.js     │
│                 │    │                 │    │                 │
│ ┌─────────────┐ │    │ ┌─────────────┐ │    │ ┌─────────────┐ │
│ │   <form>    │◄────┤ │   form {}    │ │    │ │ form.onsubmit│ │
│ │   <input>   │ │    │ │ input:focus │ │    │ │ event handler│ │
│ │   <button>  │ │    │ │ button:hover│ │    │ │             │ │
│ └─────────────┘ │    │ └─────────────┘ │    │ └─────────────┘ │
│                 │    │                 │    │                 │
│ ┌─────────────┐ │    │ ┌─────────────┐ │    │ ┌─────────────┐ │
│ │   <aside>   │◄────┤ │   aside {}   │ │    │ │ expenseAdd()│ │
│ │   <ul>      │ │    │ │ .expense {} │ │    │ │ createElement│ │
│ │   <li>      │ │    │ │ .remove-icon│ │    │ │ classList.add│ │
│ └─────────────┘ │    │ └─────────────┘ │    │ └─────────────┘ │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────────────────────────────────────────────────────┐
│                    INTERFACE DO USUÁRIO                       │
│                                                               │
│  ┌─────────────────┐    ┌─────────────────┐                  │
│  │   FORMULÁRIO    │    │   LISTA DE      │                  │
│  │                 │    │   DESPESAS      │                  │
│  │ Nome: [______]  │    │                 │                  │
│  │ Categoria: [__] │    │ Almoço          │                  │
│  │ Valor: [R$___]  │    │    Alimentação  │                  │
│  │                 │    │    R$ 25,00     │                  │
│  │ [Adicionar]     │    │                 │                  │
│  │                 │    │ Hotel           │                  │
│  └─────────────────┘    │    Hospedagem   │                  │
│                         │    R$ 150,00    │                  │
│                         │                 │                  │
│                         │ Total: R$ 175,00│                  │
│                         └─────────────────┘                  │
└─────────────────────────────────────────────────────────────────┘
```

## Conexões Detalhadas

### 1. Conexão HTML ↔ JavaScript

```
HTML Elementos          JavaScript Seletores
┌─────────────────┐    ┌─────────────────┐
│ <form>          │◄───┤ document.querySelector("form")
│ <input id="expense"> │◄───┤ document.getElementById("expense")
│ <select id="category">│◄───┤ document.getElementById("category")
│ <input id="amount">   │◄───┤ document.getElementById("amount")
│ <ul>            │◄───┤ document.querySelector("ul")
└─────────────────┘    └─────────────────┘
```

### 2. Conexão JavaScript ↔ CSS

```
JavaScript Criação      CSS Classes
┌─────────────────┐    ┌─────────────────┐
│ createElement("li")   │◄───┤ .expense {}
│ classList.add("expense") │    │
│                     │    │
│ createElement("div") │◄───┤ .expense-info {}
│ classList.add("expense-info") │    │
│                     │    │
│ createElement("span")│◄───┤ .expense-amount {}
│ classList.add("expense-amount") │    │
│                     │    │
│ createElement("img") │◄───┤ .remove-icon {}
│ classList.add("remove-icon") │    │
└─────────────────┘    └─────────────────┘
```

### 3. Fluxo de Eventos

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   USUÁRIO   │───►│   HTML      │───►│ JAVASCRIPT  │───►│   CSS       │
│             │    │             │    │             │    │             │
│ Clica botão │    │ <button>    │    │ onsubmit    │    │ :hover      │
│             │    │             │    │ event       │    │ :focus      │
│ Digita valor│    │ <input>     │    │ oninput     │    │ :active     │
│             │    │             │    │ event       │    │             │
│ Remove item │    │ <img>       │    │ click       │    │ .remove-icon│
│             │    │             │    │ event       │    │             │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
```

## Sequência de Execução

### 1. Carregamento da Página
```
1. index.html carrega
2. styles.css é aplicado
3. scripts.js é executado
4. Elementos DOM são selecionados
5. Event listeners são configurados
```

### 2. Adição de Despesa
```
1. Usuário preenche formulário
2. JavaScript captura onsubmit
3. Dados são coletados
4. Novo elemento <li> é criado
5. Classes CSS são adicionadas
6. Elemento é inserido no DOM
7. CSS estiliza automaticamente
8. Totais são recalculados
```

### 3. Remoção de Despesa
```
1. Usuário clica no ícone X
2. JavaScript captura click event
3. Verifica se é .remove-icon
4. Encontra elemento pai (.expense)
5. Remove elemento do DOM
6. CSS remove estilos automaticamente
7. Totais são recalculados
```

## Pontos de Integração

### HTML como Base
- Fornece estrutura para CSS e JavaScript
- Define IDs e classes que ambos usam
- Cria elementos que podem ser manipulados

### CSS como Presentação
- Estiliza elementos criados pelo HTML
- Responde a classes adicionadas pelo JavaScript
- Define estados visuais (hover, focus, etc.)

### JavaScript como Lógica
- Manipula elementos HTML existentes
- Cria novos elementos com classes CSS
- Responde a eventos do usuário
- Atualiza a interface dinamicamente

## Ciclo de Vida de um Elemento

```
1. HTML define estrutura inicial
2. CSS aplica estilos base
3. JavaScript adiciona interatividade
4. Usuário interage
5. JavaScript responde ao evento
6. DOM é modificado
7. CSS reaplica estilos automaticamente
8. Interface é atualizada
```

Este fluxo mostra como as três tecnologias trabalham em harmonia para criar uma experiência de usuário completa e interativa. 