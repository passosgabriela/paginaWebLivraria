// 1. CATÁLOGO DA LIVRARIA ENTRELINHAS (12 LIVROS EM 3 CATEGORIAS)
const books = [
  {
    id: 1,
    title: "O Nome do Vento",
    author: "Patrick Rothfuss",
    publisher: "Arqueiro",
    year: 2009,
    pages: 656,
    category: "Fantasia",
    price: 64.90,
    featured: true,
    cover: "imagens/ONomeDoVento.jpg",
    synopsis: "Kvothe narra sua própria trajetória desde a infância em uma trupe itinerante até se tornar o mais notório mago e músico de seu tempo."
  },
  {
    id: 2,
    title: "Orgulho e Preconceito",
    author: "Jane Austen",
    publisher: "Martin Claret",
    year: 2018,
    pages: 424,
    category: "Romance",
    price: 39.90,
    featured: true,
    cover: "imagens/OrgulhoEPreconceito.jpg",
    synopsis: "Na Inglaterra do século XIX, Elizabeth Bennet e Fitzwilliam Darcy enfrentam julgamentos apressados e diferenças sociais para descobrir o amor verdadeiro."
  },
  {
    id: 3,
    title: "Código Limpo",
    author: "Robert C. Martin",
    publisher: "Alta Books",
    year: 2009,
    pages: 425,
    category: "Técnicos",
    price: 89.90,
    featured: true,
    cover: "imagens/CodigoLimpo.jpg",
    synopsis: "Manual essencial com princípios, padrões e boas práticas para escrever código legível, testável e fácil de manter."
  },
  {
    id: 4,
    title: "O Hobbit",
    author: "J.R.R. Tolkien",
    publisher: "HarperCollins",
    year: 2019,
    pages: 336,
    category: "Fantasia",
    price: 49.90,
    featured: true,
    cover: "imagens/OHobbit.jpg",
    synopsis: "Bilbo Bolseiro deixa a tranquilidade do Condado para acompanhar treze anões e o mago Gandalf na missão de recuperar o reino de Erebor."
  },
  {
    id: 5,
    title: "A Biblioteca da Meia-Noite",
    author: "Matt Haig",
    publisher: "Bertrand Brasil",
    year: 2021,
    pages: 308,
    category: "Fantasia",
    price: 44.50,
    featured: false,
    cover: "imagens/ABibliotecaDaMeiaNoite.jpg",
    synopsis: "Entre a vida e a morte, Nora Seed encontra uma biblioteca infinita onde cada livro permite experimentar uma versão diferente da sua própria vida."
  },
  {
    id: 6,
    title: "Os Sete Maridos de Evelyn Hugo",
    author: "Taylor Jenkins Reid",
    publisher: "Paralela",
    year: 2019,
    pages: 360,
    category: "Romance",
    price: 47.90,
    featured: false,
    cover: "imagens/EvelynHugo.jpg",
    synopsis: "Lendária estrela de Hollywood decide finalmente contar toda a verdade sobre sua carreira glamourosa e seus sete casamentos."
  },
  {
    id: 7,
    title: "Estruturas de Dados e Algoritmos com JavaScript",
    author: "Loiane Groner",
    publisher: "Novatec",
    year: 2019,
    pages: 408,
    category: "Técnicos",
    price: 78.00,
    featured: false,
    cover: "imagens/EstruturaDeDados.jpg",
    synopsis: "Guia prático para dominar pilhas, filas, listas ligadas, árvores, grafos e algoritmos de ordenação usando JavaScript moderno."
  },
  {
    id: 8,
    title: "Dom Casmurro",
    author: "Machado de Assis",
    publisher: "Penguin-Companhia",
    year: 2016,
    pages: 256,
    category: "Romance",
    price: 32.90,
    featured: false,
    cover: "imagens/DomCasmurro.jpg",
    synopsis: "Bentinho revisita suas memórias de juventude e o romance com Capitu, levantando um dos maiores enigmas da literatura brasileira."
  },
  {
    id: 9,
    title: "O Programador Pragmático",
    author: "Andrew Hunt & David Thomas",
    publisher: "Bookman",
    year: 2010,
    pages: 344,
    category: "Técnicos",
    price: 94.00,
    featured: false,
    cover: "imagens/OProgramadorPragmatico.jpg",
    synopsis: "Conselhos atemporais sobre carreira, arquitetura de software, automação e responsabilidade profissional no desenvolvimento."
  },
  {
    id: 10,
    title: "A Guerra dos Tronos",
    author: "George R.R. Martin",
    publisher: "Suma",
    year: 2019,
    pages: 600,
    category: "Fantasia",
    price: 69.90,
    featured: false,
    cover: "imagens/GameOfThrones.jpg",
    synopsis: "Intrigas políticas, alianças frágeis e ameaças sobrenaturais colocam as grandes casas de Westeros em rota de colisão pelo Trono de Ferro."
  },
  {
    id: 11,
    title: "Tudo é Rio",
    author: "Carla Madeira",
    publisher: "Record",
    year: 2021,
    pages: 210,
    category: "Romance",
    price: 42.00,
    featured: false,
    cover: "imagens/TudoERio.jpg",
    synopsis: "Com prosa poética e intensa, a obra acompanha o triângulo amoroso entre Dalva, Venâncio e Lucy sob a metáfora das águas de um rio."
  },
  {
    id: 12,
    title: "Entendendo Algoritmos",
    author: "Aditya Y. Bhargava",
    publisher: "Novatec",
    year: 2017,
    pages: 264,
    category: "Técnicos",
    price: 68.50,
    featured: false,
    cover: "imagens/EntendendoAlgoritmos.jpg",
    synopsis: "Introdução ilustrada e acessível aos principais algoritmos de busca, ordenação, recursão e programação dinâmica."
  }
];

// Estado persistido no localStorage
let cart = JSON.parse(localStorage.getItem('entrelinhas_cart')) || [];
let favorites = JSON.parse(localStorage.getItem('entrelinhas_favorites')) || [];
let activeCategory = "Todos";
let searchTerm = "";
let sortOption = "padrao";
let appliedCoupon = null;

// Capa fallback SVG caso falte internet ao carregar Open Library
function handleCoverError(imgElement) {
  imgElement.onerror = null;
  imgElement.src = "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="420" viewBox="0 0 300 420">
      <rect width="300" height="420" fill="#D7CCC8"/>
      <text x="50%" y="48%" dominant-baseline="middle" text-anchor="middle" fill="#3E2723" font-family="sans-serif" font-size="20" font-weight="bold">Livraria EntreLinhas</text>
      <text x="50%" y="56%" dominant-baseline="middle" text-anchor="middle" fill="#6D4C41" font-family="sans-serif" font-size="14">Capa do Livro</text>
    </svg>`
  );
}

const formatPrice = (price) => `R$ ${price.toFixed(2).replace('.', ',')}`;

// 2. RENDERIZAÇÃO DE CARDS (DESTAQUES E CATÁLOGO)
function createBookCard(book) {
  const isFav = favorites.includes(book.id);
  const article = document.createElement('article');
  article.classList.add('product-card');

  article.innerHTML = `
    <button class="fav-btn" onclick="toggleFavorite(${book.id})" aria-label="Favoritar ${book.title}">
      ${isFav ? "❤️" : "🤍"}
    </button>
    <div>
      <div class="book-cover-link" onclick="openBookDetails(${book.id})">
        <img src="${book.cover}" alt="Capa do livro ${book.title}, de ${book.author}" onerror="handleCoverError(this)">
      </div>
      <div class="category-tag">${book.category}</div>
      <h3 onclick="openBookDetails(${book.id})">${book.title}</h3>
      <p class="book-author">${book.author}</p>
    </div>
    <div>
      <div class="price">${formatPrice(book.price)}</div>
      <div class="card-actions">
        <button class="btn-checkout" onclick="addToCart(${book.id})">Adicionar ao carrinho</button>
        <button class="btn-secondary" onclick="openBookDetails(${book.id})">Ver detalhes</button>
      </div>
    </div>
  `;
  return article;
}

function renderFeatured() {
  const featuredContainer = document.getElementById('featured-list');
  featuredContainer.innerHTML = "";
  books.filter(b => b.featured).forEach(book => {
    featuredContainer.appendChild(createBookCard(book));
  });
}

function renderCatalog() {
  const productList = document.getElementById('product-list');
  productList.innerHTML = "";

  // Filtro por categoria ou favoritos
  let filtered = books.filter(book => {
    if (activeCategory === "Favoritos") return favorites.includes(book.id);
    if (activeCategory !== "Todos") return book.category === activeCategory;
    return true;
  });

  // Busca em tempo real por título ou autor
  if (searchTerm.trim() !== "") {
    const query = searchTerm.toLowerCase();
    filtered = filtered.filter(book =>
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query)
    );
  }

  // Ordenação
  if (sortOption === "preco-asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortOption === "preco-desc") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortOption === "titulo-asc") {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  }

  if (filtered.length === 0) {
    productList.innerHTML = `<p>Nenhum livro encontrado para os filtros selecionados.</p>`;
    return;
  }

  filtered.forEach(book => {
    productList.appendChild(createBookCard(book));
  });
}

// 3. FAVORITOS E DETALHES DO LIVRO
function toggleFavorite(id) {
  if (favorites.includes(id)) {
    favorites = favorites.filter(favId => favId !== id);
    showToast("Removido dos favoritos.");
  } else {
    favorites.push(id);
    showToast("Adicionado aos favoritos!");
  }
  localStorage.setItem('entrelinhas_favorites', JSON.stringify(favorites));
  renderFeatured();
  renderCatalog();
}

function openBookDetails(id) {
  const book = books.find(b => b.id === id);
  if (!book) return;

  const detailContainer = document.getElementById('book-detail-content');
  detailContainer.innerHTML = `
    <img src="${book.cover}" alt="Capa ampliada do livro ${book.title}" onerror="handleCoverError(this)">
    <div>
      <div class="category-tag">${book.category}</div>
      <h2 id="detail-title">${book.title}</h2>
      <p><strong>Autor(a):</strong> ${book.author}</p>
      <div class="book-meta">
        <span><strong>Editora:</strong> ${book.publisher}</span>
        <span><strong>Ano:</strong> ${book.year}</span>
        <span><strong>Páginas:</strong> ${book.pages}</span>
      </div>
      <p class="book-synopsis">${book.synopsis}</p>
      <div class="price">${formatPrice(book.price)}</div>
      <div class="card-actions">
        <button class="btn-checkout" onclick="addToCart(${book.id}); closeBookModal();">Adicionar ao carrinho</button>
        <button class="btn-secondary" onclick="closeBookModal()">Voltar ao catálogo</button>
      </div>
    </div>
  `;

  document.getElementById('book-modal').classList.remove('hidden');
}

function closeBookModal() {
  document.getElementById('book-modal').classList.add('hidden');
}

document.getElementById('close-book-modal').addEventListener('click', closeBookModal);
document.getElementById('book-modal').addEventListener('click', (e) => {
  if (e.target.id === 'book-modal') closeBookModal();
});

// 4. CARRINHO DE COMPRAS, CUPOM E TOAST
function showToast(mensagem) {
  const toast = document.getElementById('toast');
  toast.innerText = mensagem;
  toast.classList.remove('hidden');

  setTimeout(() => {
    toast.classList.add('hidden');
  }, 3000);
}

function addToCart(id) {
  const book = books.find(b => b.id === id);
  const existingItem = cart.find(item => item.id === id);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ ...book, quantity: 1 });
  }
  updateCart();
  showToast(`"${book.title}" adicionado ao carrinho!`);
}

function updateQuantity(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.id !== id);
  }
  updateCart();
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  updateCart();
  showToast("Item removido do carrinho.");
}

function getCartTotals() {
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = appliedCoupon === 'LIVRO10' ? subtotal * 0.10 : 0;
  const total = subtotal - discount;
  return { subtotal, discount, total };
}

function updateCart() {
  localStorage.setItem('entrelinhas_cart', JSON.stringify(cart));

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById('cart-count').innerText = totalItems;

  const cartItemsContainer = document.getElementById('cart-items');
  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `<p style="color: var(--slate);">Seu carrinho está vazio.</p>`;
  } else {
    cart.forEach(item => {
      const itemSubtotal = item.price * item.quantity;
      cartItemsContainer.innerHTML += `
        <div class="cart-item">
          <div>
            <strong>${item.title}</strong><br>
            <small>Unitário: ${formatPrice(item.price)} | Subtotal: <strong>${formatPrice(itemSubtotal)}</strong></small>
          </div>
          <div class="cart-item-controls">
            <button class="btn-icon" onclick="updateQuantity(${item.id}, -1)" aria-label="Diminuir quantidade">-</button>
            <span style="margin: 0 6px; font-weight:bold;">${item.quantity}</span>
            <button class="btn-icon" onclick="updateQuantity(${item.id}, 1)" aria-label="Aumentar quantidade">+</button>
            <button class="btn-remove-item" onclick="removeFromCart(${item.id})">Remover</button>
          </div>
        </div>
      `;
    });
  }

  const { subtotal, discount, total } = getCartTotals();
  document.getElementById('cart-subtotal-price').innerText = formatPrice(subtotal);
  document.getElementById('cart-total-price').innerText = formatPrice(total);

  const discountRow = document.getElementById('cart-discount-row');
  if (discount > 0) {
    discountRow.classList.remove('hidden');
    document.getElementById('cart-discount-price').innerText = `- ${formatPrice(discount)}`;
  } else {
    discountRow.classList.add('hidden');
  }
}

// Cupom de desconto LIVRO10
document.getElementById('apply-coupon-btn').addEventListener('click', () => {
  const code = document.getElementById('coupon-input').value.trim().toUpperCase();
  const msg = document.getElementById('coupon-feedback');
  msg.classList.remove('hidden');

  if (code === 'LIVRO10') {
    appliedCoupon = 'LIVRO10';
    msg.style.color = 'var(--price)';
    msg.innerText = 'Cupom LIVRO10 aplicado (10% de desconto)!';
  } else {
    appliedCoupon = null;
    msg.style.color = '#C62828';
    msg.innerText = 'Cupom inválido. Tente LIVRO10.';
  }
  updateCart();
});

// 5. INTERFACE, MENU MOBILE E DARK MODE PERSISTIDO
document.getElementById('cart-open').addEventListener('click', () => {
  document.getElementById('cart-drawer').classList.remove('hidden');
  document.getElementById('cart-overlay').classList.remove('hidden');
});

function closeCart() {
  document.getElementById('cart-drawer').classList.add('hidden');
  document.getElementById('cart-overlay').classList.add('hidden');
}

document.getElementById('cart-close').addEventListener('click', closeCart);
document.getElementById('cart-overlay').addEventListener('click', closeCart);

// Menu hambúrguer no mobile
const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main-nav');

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

// Busca, Filtros e Ordenação
document.getElementById('search-input').addEventListener('input', (e) => {
  searchTerm = e.target.value;
  renderCatalog();
});

document.getElementById('sort-select').addEventListener('change', (e) => {
  sortOption = e.target.value;
  renderCatalog();
});

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    activeCategory = e.target.dataset.category;
    renderCatalog();
  });
});

// Dark Mode salvo no localStorage
if (localStorage.getItem('entrelinhas_theme') === 'dark') {
  document.body.classList.add('dark-mode');
}

document.getElementById('theme-toggle').addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-mode');
  localStorage.setItem('entrelinhas_theme', isDark ? 'dark' : 'light');
});

// 6. VALIDAÇÃO DO FORMULÁRIO DE CONTATO (SEM ALERT)
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('contact-name').value.trim();
  const email = document.getElementById('contact-email').value.trim();
  const subject = document.getElementById('contact-subject').value.trim();
  const message = document.getElementById('contact-message').value.trim();
  const feedback = document.getElementById('contact-feedback');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  feedback.classList.remove('hidden', 'error', 'success');

  if (!name || !email || !subject || !message) {
    feedback.classList.add('error');
    feedback.innerText = 'Por favor, preencha todos os campos obrigatórios.';
    return;
  }

  if (!emailRegex.test(email)) {
    feedback.classList.add('error');
    feedback.innerText = 'Por favor, informe um endereço de e-mail válido.';
    return;
  }

  feedback.classList.add('success');
  feedback.innerText = `Obrigado, ${name}! Sua mensagem sobre "${subject}" foi enviada com sucesso.`;
  e.target.reset();
});

// 7. CHECKOUT
document.getElementById('btn-open-checkout').addEventListener('click', () => {
  if (cart.length === 0) {
    showToast("Seu carrinho está vazio!");
    return;
  }

  const { total } = getCartTotals();
  document.getElementById('checkout-final-price').innerText = formatPrice(total);

  document.getElementById('step-payment').classList.remove('hidden');
  document.getElementById('step-success').classList.add('hidden');

  closeCart();
  document.getElementById('checkout-modal').classList.remove('hidden');
});

document.getElementById('btn-cancel-checkout').addEventListener('click', () => {
  document.getElementById('checkout-modal').classList.add('hidden');
});

document.getElementById('payment-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const btn = document.getElementById('btn-process-payment');
  btn.innerText = "Processando pagamento...";
  btn.disabled = true;

  setTimeout(() => {
    document.getElementById('step-payment').classList.add('hidden');
    document.getElementById('step-success').classList.remove('hidden');

    cart = [];
    appliedCoupon = null;
    document.getElementById('coupon-input').value = "";
    document.getElementById('coupon-feedback').classList.add('hidden');
    updateCart();

    btn.innerText = "Confirmar Pagamento";
    btn.disabled = false;
  }, 1500);
});

document.getElementById('close-modal-btn').addEventListener('click', () => {
  document.getElementById('checkout-modal').classList.add('hidden');
});

// Inicialização
renderFeatured();
renderCatalog();
updateCart();