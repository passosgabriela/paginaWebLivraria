# Livraria EntreLinhas

Projeto final da disciplina **Desenvolvimento Web 2 (IFSP)** — site responsivo de uma livraria fictícia com catálogo interativo, detalhes dos livros, carrinho persistente e formulário de contato validado.

## Integrantes
- Alex Passos da Silva

## Tecnologias Utilizadas e Por Quê
- **HTML5 Semântico:** Uso de `header`, `nav`, `main`, `section`, `article` e `footer` para acessibilidade e organização estrutural.
- **CSS3 (Variáveis CSS, Grid e Flexbox):** Escolhido para manter identidade visual consistente entre os temas claro/escuro e responsividade fluida sem dependências externas.
- **JavaScript Vanilla (ES6+):** Renderização dinâmica do catálogo, busca em tempo real, filtros, manipulação do carrinho com `localStorage` e validação de formulários sem bibliotecas pesadas.

## Funcionalidades Implementadas

### Obrigatórias
- **Página Inicial (Home):** Cabeçalho fixo com menu responsivo, banner promocional do livro do mês, vitrine com 4 livros em destaque e rodapé completo.
- **Catálogo Dinâmico:** 12 livros divididos em 3 categorias (*Fantasia*, *Romance* e *Técnicos*), com busca instantânea por título/autor e filtro por categoria.
- **Detalhes do Livro:** Modal interativo exibindo capa ampliada, sinopse, autor, editora, ano, páginas, categoria e preço.
- **Carrinho de Compras:** Adição, remoção, alteração de quantidade, cálculo automático de subtotal/total, contador no menu e persistência no `localStorage`.
- **Sobre / Contato:** História da livraria, endereço e formulário com validação completa exibida diretamente na tela.

### Extras Implementados (+1,0 ponto)
1. **Modo Claro/Escuro persistido no `localStorage`** (+0,25)
2. **Lista de Desejos (Favoritos)** com botão de coração nos cards e filtro dedicado (+0,25)
3. **Ordenação do Catálogo** por menor preço, maior preço e título (A–Z) (+0,25)
4. **Cupom de Desconto no Carrinho** (`LIVRO10` aplicando 10% de desconto) (+0,25)

## Como Rodar Localmente
1. Clone este repositório:
   ```bash
   git clone https://github.com/passosgabriela/paginaWebLivraria.git