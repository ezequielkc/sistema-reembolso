# Sistema de Reembolso

## Descrição

Sistema web para gerenciamento de despesas e solicitações de reembolso. Permite aos usuários registrar despesas por categoria, visualizar histórico de gastos e calcular totais automaticamente.

## Funcionalidades

### Cadastro de Despesas
- Formulário para inserção de nome da despesa
- Seleção de categoria (Alimentação, Hospedagem, Serviços, Transporte, Outros)
- Campo para valor com formatação automática em Real (R$)
- Validação de campos obrigatórios

### Visualização de Dados
- Lista dinâmica de despesas cadastradas
- Ícones visuais por categoria
- Exibição de nome, categoria e valor de cada despesa
- Contador de quantidade de despesas
- Cálculo automático do valor total

### Interações
- Adição de novas despesas via formulário
- Remoção de despesas individuais
- Atualização automática de totais
- Formatação de valores monetários

## Estrutura do Projeto

```
Sistema de Reembolso/
├── index.html          # Página principal
├── styles.css          # Estilos da aplicação
├── scripts.js          # Lógica de funcionamento
├── img/               # Recursos visuais
│   ├── food.svg
│   ├── accommodation.svg
│   ├── transport.svg
│   ├── services.svg
│   ├── others.svg
│   ├── remove.svg
│   ├── chevron-down.svg
│   ├── logo.png
│   └── favicon.png
└── README.md
```

## Tecnologias Utilizadas

### Frontend
- **HTML5**: Estrutura semântica da página
- **CSS3**: Estilização responsiva e moderna
- **JavaScript**: Funcionalidades interativas e manipulação do DOM

### Recursos Externos
- **Google Fonts**: Tipografia Open Sans
- **SVG**: Ícones vetoriais para categorias

## Como Executar

1. Clone ou baixe os arquivos do projeto
2. Abra o arquivo `index.html` em um navegador web
3. A aplicação carregará automaticamente

### Requisitos
- Navegador web (Chrome, Firefox, Safari..)
- Conexão com internet (para carregar fontes Google)

## Arquitetura da Aplicação

### Separação de Responsabilidades

**HTML (index.html)**
- Define a estrutura da interface
- Contém formulário de entrada de dados
- Apresenta área de listagem de despesas
- Referencia arquivos CSS e JavaScript

**CSS (styles.css)**
- Define aparência visual dos elementos
- Implementa layout responsivo
- Controla estados interativos (hover, focus)
- Estiliza elementos criados dinamicamente

**JavaScript (scripts.js)**
- Captura eventos do usuário
- Processa dados do formulário
- Cria elementos HTML dinamicamente
- Calcula e atualiza totais
- Gerencia interações de remoção

### Fluxo de Funcionamento

1. **Carregamento Inicial**
   - HTML estrutura a página
   - CSS aplica estilos
   - JavaScript configura event listeners

2. **Adição de Despesa**
   - Usuário preenche formulário
   - JavaScript captura evento submit
   - Dados são validados e processados
   - Novo elemento é criado e inserido no DOM
   - CSS estiliza automaticamente o novo elemento
   - Totais são recalculados

3. **Remoção de Despesa**
   - Usuário clica no ícone de remoção
   - JavaScript identifica o elemento clicado
   - Elemento é removido do DOM
   - Totais são recalculados

## Formatação de Valores

O sistema implementa formatação automática de valores monetários:

- Entrada: Apenas números (ex: 1500)
- Processamento: Conversão para centavos
- Saída: Formato brasileiro (ex: R$ 15,00)

### Exemplo de Formatação
```javascript
// Entrada do usuário: 1500
// Processamento interno: 1500 / 100 = 15
// Exibição: R$ 15,00
```

## Categorias de Despesas

| Categoria | Valor | Ícone |
|-----------|-------|-------|
| Alimentação | food | food.svg |
| Hospedagem | accommodation | accommodation.svg |
| Serviços | services | services.svg |
| Transporte | transport | transport.svg |
| Outros | others | others.svg |

## Responsividade

A aplicação é responsiva e se adapta a diferentes tamanhos de tela:

- **Desktop (>1100px)**: Layout lado a lado
- **Tablet (620px-1100px)**: Layout em coluna
- **Mobile (<620px)**: Campos empilhados

## Validações Implementadas

### Frontend
- Campos obrigatórios (required)
- Formatação automática de valores
- Validação de tipos de entrada
- Tratamento de erros com try/catch

### Experiência do Usuário
- Feedback visual em estados de foco
- Transições suaves em interações
- Mensagens de erro claras
- Interface intuitiva e limpa

## Estrutura de Dados

### Objeto de Despesa
```javascript
{
    id: timestamp,
    expense: "Nome da despesa",
    category_id: "food",
    category_name: "Alimentação",
    amount: "R$ 25,00",
    created_at: Date
}
```

## Melhorias Futuras

### Funcionalidades Sugeridas
- Persistência de dados (localStorage)
- Exportação de relatórios
- Filtros por categoria
- Ordenação por data/valor
- Categorias personalizadas
- Múltiplas moedas

### Melhorias Técnicas
- Implementação de testes
- Otimização de performance
- Acessibilidade (ARIA)
- PWA (Progressive Web App)
- Backend para persistência

## Contribuição

Para contribuir com o projeto:

1. Faça um fork do repositório
2. Crie uma branch para sua feature
3. Implemente as mudanças
4. Teste em diferentes navegadores
5. Envie um pull request

## Licença

Este projeto está sob licença MIT. Veja o arquivo LICENSE para mais detalhes.

