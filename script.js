const productGrid = document.getElementById("collections");
const filterButtons = Array.from(document.querySelectorAll(".chip"));
const sortSelect = document.getElementById("sortSelect");
const cartButton = document.getElementById("cartButton");
const cartDrawer = document.getElementById("cartDrawer");
const overlay = document.getElementById("overlay");
const cartItemsContainer = document.getElementById("cartItems");
const cartSubtotal = document.getElementById("cartSubtotal");
const cartCountBadge = document.getElementById("cartCount");
const exploreButton = document.getElementById("exploreButton");
const latestDropButton = document.getElementById("latestDropButton");
const searchButton = document.getElementById("searchButton");
const productModal = document.getElementById("productModal");
const modalTitle = productModal.querySelector(".modal-title");
const modalTagline = productModal.querySelector(".modal-tagline");
const modalPrice = productModal.querySelector(".modal-price");
const modalDescription = productModal.querySelector(".modal-description");
const modalMeta = productModal.querySelector(".modal-meta");
const modalImage = productModal.querySelector(".modal-image");
const modalAddToCart = document.getElementById("modalAddToCart");
const yearEl = document.getElementById("year");

const products = [
  {
    id: "arcpulse-hoodie",
    name: "ArcPulse Haptic Hoodie",
    tagline: "Adaptive thermoregulation with haptic cues",
    description:
      "Layered graphene mesh with responsive heat zoning and subtle haptic alerts to keep your physiology aligned all day.",
    category: "apparel",
    price: 160,
    image:
      "https://images.unsplash.com/photo-1451153378752-16ef2b36ad05?auto=format&fit=crop&w=800&q=80",
    details: [
      { label: "Materials", value: "Graphene-blend fleece, recycled nylon" },
      { label: "Colorways", value: "Midnight Saffron, Borealis Blue" },
      { label: "Shipping", value: "Dispatched within 24 hours" },
    ],
    featured: true,
    launchedAt: "2025-12-01",
  },
  {
    id: "ionbeam-glasses",
    name: "IonBeam Smart Glasses",
    tagline: "AR overlays with dynamic privacy tint",
    description:
      "6K micro-OLED lenses and adaptive privacy tinting deliver context-aware overlays without compromising on style.",
    category: "tech",
    price: 290,
    image:
      "https://images.unsplash.com/photo-1516542076529-1ea3854896e1?auto=format&fit=crop&w=800&q=80",
    details: [
      { label: "Display", value: "6K micro-OLED with neural focus" },
      { label: "Battery", value: "36 hours adaptive use" },
      { label: "Warranty", value: "NovaShield 2-year" },
    ],
    featured: true,
    launchedAt: "2026-01-12",
  },
  {
    id: "lumina-bottle",
    name: "Lumina Hydra Bottle",
    tagline: "Self-cleaning hydration with bio-feedback",
    description:
      "Aerospace-grade steel bottle with UV-C self-sterilization, biometric hydration coaching, and magnetic wireless charging dock.",
    category: "wellness",
    price: 98,
    image:
      "https://images.unsplash.com/photo-1526406600391-8c1996f68f23?auto=format&fit=crop&w=800&q=80",
    details: [
      { label: "Capacity", value: "750 ml" },
      { label: "Battery", value: "30 days per charge" },
      { label: "Highlights", value: "UV-C sterilization cycles every 2 hours" },
    ],
    featured: false,
    launchedAt: "2025-11-20",
  },
  {
    id: "solara-lamp",
    name: "Solara Flux Lamp",
    tagline: "Circadian lighting tuned by AI",
    description:
      "Full-spectrum lighting that syncs with your chrono profile to amplify focus by day and serenity by night.",
    category: "home",
    price: 220,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
    details: [
      { label: "Modes", value: "Focus, Recharge, Reset" },
      { label: "Connectivity", value: "Matter + NovaLink" },
      { label: "Sustainability", value: "Built with recycled aluminum" },
    ],
    featured: false,
    launchedAt: "2025-09-14",
  },
  {
    id: "atlas-sneaker",
    name: "Atlas Zero-G Sneaker",
    tagline: "Featherweight cushioning with kinetic recovery",
    description:
      "Aerogel cushioning with kinetic energy return plates for all-day elevation that adapts to each stride.",
    category: "apparel",
    price: 180,
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=80",
    details: [
      { label: "Materials", value: "Bio-knit upper, aerogel midsole" },
      { label: "Drop", value: "6 mm" },
      { label: "Highlights", value: "Kinetic plates tuned every 500 steps" },
    ],
    featured: false,
    launchedAt: "2026-02-02",
  },
  {
    id: "glyph-sling",
    name: "Glyph Urban Sling",
    tagline: "Modular sling with anti-trace pockets",
    description:
      "Modular load-out with Faraday pockets, self-healing fabric, and quick-access magnetic hardware.",
    category: "apparel",
    price: 132,
    image:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80",
    details: [
      { label: "Capacity", value: "12L expandable" },
      { label: "Security", value: "Faraday pocket + RFID shielding" },
      { label: "Weatherproof", value: "IPX4 water resistance" },
    ],
    featured: false,
    launchedAt: "2025-12-18",
  },
  {
    id: "zenwave-diffuser",
    name: "ZenWave Sonic Diffuser",
    tagline: "Sound-infused aromatherapy for mindful flow",
    description:
      "Synchronizes ambient frequencies with aromatic diffusion to dial in the mood for focus, rest, or creative flow.",
    category: "home",
    price: 150,
    image:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=800&q=80",
    details: [
      { label: "Modes", value: "Focus, Dream, Reset" },
      { label: "Runtime", value: "9 hours continuous" },
      { label: "Highlights", value: "App-controlled ambient sound bed" },
    ],
    featured: false,
    launchedAt: "2025-10-02",
  },
  {
    id: "lumen-skin-kit",
    name: "Lumen BioSkin Kit",
    tagline: "Adaptive skincare with biofeedback serums",
    description:
      "Personalized serums paired with adaptive LED masks that tune wavelengths to your skin's realtime biometrics.",
    category: "wellness",
    price: 210,
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
    details: [
      { label: "Session", value: "12-minute adaptive cycles" },
      { label: "Includes", value: "3 serum capsules, NovaLED mask" },
      { label: "Highlights", value: "Biofeedback via NovaSkin app" },
    ],
    featured: true,
    launchedAt: "2026-01-28",
  },
];

const cart = new Map();
let activeCategory = "all";
let activeSort = "featured";
let focusedProductId = null;

yearEl.textContent = new Date().getFullYear();

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
});

function renderProducts() {
  const filtered = products.filter((product) => {
    return activeCategory === "all" || product.category === activeCategory;
  });

  const sorted = filtered.sort((a, b) => {
    if (activeSort === "price-low") {
      return a.price - b.price;
    }
    if (activeSort === "price-high") {
      return b.price - a.price;
    }
    if (activeSort === "newest") {
      return new Date(b.launchedAt) - new Date(a.launchedAt);
    }
    // featured
    if (a.featured === b.featured) {
      return new Date(b.launchedAt) - new Date(a.launchedAt);
    }
    return a.featured ? -1 : 1;
  });

  productGrid.innerHTML = "";
  sorted.forEach((product) => {
    const card = document.createElement("article");
    card.className = "product-card";
    card.innerHTML = `
      <button class="product-image" data-action="open" data-id="${product.id}" style="background-image: url('${product.image}')" aria-label="View details for ${product.name}"></button>
      <div class="product-content">
        <h3 class="product-title">${product.name}</h3>
        <p class="product-tagline">${product.tagline}</p>
        <div class="product-footer">
          <span class="price">${currency.format(product.price)}</span>
          <button class="ghost" data-action="add" data-id="${product.id}">Add to cart</button>
        </div>
      </div>
    `;
    productGrid.appendChild(card);
  });
}

function updateActiveFilter(targetCategory) {
  activeCategory = targetCategory;
  filterButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.category === activeCategory);
  });
  renderProducts();
}

function openCartDrawer() {
  cartDrawer.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");
  overlay.classList.add("show");
}

function closeCartDrawer() {
  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
  maybeHideOverlay();
}

function openModal(product) {
  productModal.setAttribute("aria-hidden", "false");
  overlay.classList.add("show");
  focusedProductId = product.id;
  modalTitle.textContent = product.name;
  modalTagline.textContent = product.tagline;
  modalPrice.textContent = currency.format(product.price);
  modalDescription.textContent = product.description;
  modalImage.style.backgroundImage = `url('${product.image}')`;
  modalMeta.innerHTML = product.details
    .map(
      (detail) => `
        <div>
          <strong>${detail.label}</strong>
          <p>${detail.value}</p>
        </div>
      `
    )
    .join("");
}

function closeModal() {
  productModal.setAttribute("aria-hidden", "true");
  focusedProductId = null;
  maybeHideOverlay();
}

function maybeHideOverlay() {
  const modalHidden = productModal.getAttribute("aria-hidden") === "true";
  const cartHidden = !cartDrawer.classList.contains("open");
  if (modalHidden && cartHidden) {
    overlay.classList.remove("show");
  }
}

function addToCart(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  const item = cart.get(productId) || { product, quantity: 0 };
  item.quantity += 1;
  cart.set(productId, item);
  updateCartUI();
}

function removeFromCart(productId) {
  cart.delete(productId);
  updateCartUI();
}

function updateCartUI() {
  const items = Array.from(cart.values());
  const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = items.reduce((acc, item) => acc + item.quantity * item.product.price, 0);

  cartCountBadge.textContent = totalQuantity.toString();
  cartCountBadge.style.display = totalQuantity > 0 ? "inline-grid" : "none";
  cartSubtotal.textContent = currency.format(subtotal);

  if (!items.length) {
    cartItemsContainer.innerHTML = `
      <p style="color: var(--text-muted);">Your cart is still empty. Discover something remarkable.</p>
    `;
    return;
  }

  cartItemsContainer.innerHTML = items
    .map(({ product, quantity }) => `
      <div class="cart-item" data-id="${product.id}">
        <div class="cart-item-thumb" style="background-image: url('${product.image}')"></div>
        <div class="cart-item-info">
          <p class="cart-item-title">${product.name}</p>
          <span class="cart-item-meta">${product.tagline}</span>
        </div>
        <div class="cart-item-actions">
          <span>${currency.format(product.price * quantity)}</span>
          <div class="quantity-controls">
            <button type="button" data-action="decrease" aria-label="Decrease quantity">
              <span class="material-symbol">remove</span>
            </button>
            <span aria-live="polite">${quantity}</span>
            <button type="button" data-action="increase" aria-label="Increase quantity">
              <span class="material-symbol">add</span>
            </button>
          </div>
          <button type="button" class="ghost" data-action="remove">Remove</button>
        </div>
      </div>
    `)
    .join("");
}

function handleQuantityAdjust(event) {
  const button = event.target.closest("button[data-action]");
  if (!button) return;

  const cartItemEl = button.closest(".cart-item");
  if (!cartItemEl) return;

  const productId = cartItemEl.dataset.id;
  const action = button.dataset.action;
  const item = cart.get(productId);
  if (!item) return;

  if (action === "increase") {
    item.quantity += 1;
  } else if (action === "decrease") {
    item.quantity -= 1;
    if (item.quantity <= 0) {
      cart.delete(productId);
    }
  } else if (action === "remove") {
    cart.delete(productId);
  }

  if (item.quantity > 0) {
    cart.set(productId, item);
  }
  updateCartUI();
}

function initEventListeners() {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      updateActiveFilter(button.dataset.category);
    });
  });

  sortSelect.addEventListener("change", () => {
    activeSort = sortSelect.value;
    renderProducts();
  });

  productGrid.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-action]");
    if (!trigger) return;

    const productId = trigger.dataset.id;
    const product = products.find((item) => item.id === productId);
    if (!product) return;

    if (trigger.dataset.action === "open") {
      openModal(product);
    } else if (trigger.dataset.action === "add") {
      addToCart(productId);
      openCartDrawer();
    }
  });

  productModal.addEventListener("click", (event) => {
    if (event.target.hasAttribute("data-close-modal")) {
      closeModal();
    }
  });

  modalAddToCart.addEventListener("click", () => {
    if (!focusedProductId) return;
    addToCart(focusedProductId);
    closeModal();
    openCartDrawer();
  });

  overlay.addEventListener("click", () => {
    closeModal();
    closeCartDrawer();
  });

  cartButton.addEventListener("click", () => {
    if (cartDrawer.classList.contains("open")) {
      closeCartDrawer();
    } else {
      openCartDrawer();
    }
  });

  cartDrawer.addEventListener("click", (event) => {
    if (event.target.hasAttribute("data-close-cart")) {
      closeCartDrawer();
    }
  });

  cartItemsContainer.addEventListener("click", handleQuantityAdjust);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
      closeCartDrawer();
    }
  });

  exploreButton.addEventListener("click", () => {
    document.getElementById("collections").scrollIntoView({ behavior: "smooth" });
  });

  latestDropButton.addEventListener("click", () => {
    const newestProduct = [...products].sort(
      (a, b) => new Date(b.launchedAt) - new Date(a.launchedAt)
    )[0];
    updateActiveFilter("all");
    activeSort = "newest";
    sortSelect.value = "newest";
    renderProducts();
    requestAnimationFrame(() => {
      const card = productGrid.querySelector(`[data-id="${newestProduct.id}"]`);
      card?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  });

  searchButton.addEventListener("click", () => {
    document.querySelector(".filters").scrollIntoView({ behavior: "smooth" });
  });
}

renderProducts();
updateCartUI();
initEventListeners();
updateActiveFilter("all");
