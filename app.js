/**
 * ROCKET PIZZA LUNAR — LÓGICA DE INTERACCIÓN CLIENTE (JS VANILLA ES6+)
 * Ingesta Visual & Flujo de Pantallas Figma Wireframe
 * Master Context: docs/contexto/arquitectura.md, convenciones.md & decisiones.md
 */

// 1. Claves canónicas de LocalStorage
const STORAGE_KEYS = {
  THEME: 'rocket_pizza_theme',
  CART: 'rocket_pizza_cart',
  ORDERS: 'rocket_pizza_orders',
  ACTIVE_VIEW: 'rocket_pizza_view'
};

// 2. Catálogo Oficial de Productos (Figma Wireframe & Master Context)
const PRODUCTS = [
  {
    id: 'p1',
    name: 'Pizza Especial Lunar',
    price: 18000,
    priceCL: 12500,
    category: 'especial',
    description: 'Mozzarella presurizada, jamón cocido seleccionado y orégano orbital.',
    imageIcon: '🍕',
    speciesLabel: 'Apto Humanos',
    badgeClass: 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-500/30'
  },
  {
    id: 'p2',
    name: 'Meteorito Pepperoni',
    price: 20000,
    priceCL: 13800,
    category: 'especial',
    description: 'Rodajas crocantes de pepperoni interestelar y queso fundido a alta presión.',
    imageIcon: '☄️',
    speciesLabel: 'Apto Humanos',
    badgeClass: 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-500/30'
  },
  {
    id: 'p3',
    name: 'Supernova 4 Quesos',
    price: 22000,
    priceCL: 14500,
    category: 'clasica',
    description: 'Mozzarella lunar, gorgonzola espacial, provolone y lluvia fina de parmesano.',
    imageIcon: '🧀',
    speciesLabel: 'Multiespecie',
    badgeClass: 'bg-purple-500/20 text-purple-600 dark:text-purple-400 border-purple-500/30'
  },
  {
    id: 'p4',
    name: 'Veggie Cero Gravedad',
    price: 17500,
    priceCL: 11200,
    category: 'veggie',
    description: 'Espinacas hidropónicas de Domo 4, hongos bioluminiscentes y queso vegetal.',
    imageIcon: '🌱',
    speciesLabel: 'Bio-compatible',
    badgeClass: 'bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 border-cyan-500/30'
  },
  {
    id: 'p5',
    name: 'Bebida Cósmica Cola 1.5L',
    price: 3500,
    priceCL: 2500,
    category: 'bebida',
    description: 'Refresco gasificado presurizado con extracto natural de bayas estelares.',
    imageIcon: '🥤',
    speciesLabel: 'Bio-compatible',
    badgeClass: 'bg-amber-500/20 text-amber-600 dark:text-amber-400 border-amber-500/30'
  },
  {
    id: 'p6',
    name: 'Cerveza Espacial Artesanal',
    price: 4500,
    priceCL: 3200,
    category: 'bebida',
    description: 'Cerveza rubia elaborada con lúpulos hidropónicos del Cráter Tycho.',
    imageIcon: '🍺',
    speciesLabel: 'Apto Humanos',
    badgeClass: 'bg-amber-500/20 text-amber-600 dark:text-amber-400 border-amber-500/30'
  }
];

// 3. Métodos de Pago Disponibles
const PAYMENT_METHODS = [
  {
    id: 'transferencia',
    name: 'Transferencia Bancaria',
    details: 'Alias: RocketPizza.\nCBU: 12345678987654321',
    icon: '🏦',
    infoNote: 'Envía tu comprobante y el cohete despegará de inmediato.'
  },
  {
    id: 'creditos',
    name: 'Créditos Lunares (CL)',
    details: 'Billetera Órbita: TYCHO-9924-CL\nRed: LunarMesh Direct',
    icon: '⚡',
    infoNote: 'Débito instantáneo con 5% de descuento en gravedad cero.'
  },
  {
    id: 'mercadopago',
    name: 'Mercado Pago / QR',
    details: 'CVU: 00000031000987654321\nTitular: Rocket Pizza SRL',
    icon: '📱',
    infoNote: 'Acreditación en el acto mediante escaneo de código.'
  },
  {
    id: 'efectivo',
    name: 'Efectivo en Esclusa',
    details: 'Pago contra entrega en Domo Lunar',
    icon: '💵',
    infoNote: 'Ten a mano el importe exacto para el dron de reparto.'
  }
];

let currentPaymentIndex = 0;
let currentOrderNumber = 129;

// 4. Gestión del Carrito (LocalStorage)
function getCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEYS.CART));
    if (Array.isArray(saved) && saved.length > 0) return saved;
  } catch (e) {
    // ignore
  }
  // Muestra inicial coherente con la Pantalla 6 de Figma: "Pizza especial x2, Bebida x2"
  return [
    { id: 'p1', name: 'Pizza especial', price: 18000, quantity: 2 },
    { id: 'p5', name: 'Bebida', price: 2000, quantity: 2 }
  ];
}

function saveCart(cart) {
  localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
  updateCartUI();
}

function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const cart = getCart();
  const existing = cart.find(item => item.id === productId);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1
    });
  }

  saveCart(cart);
  showToast(`¡Agregado! ${product.name} (+1)`);
}

function calculateTotal() {
  const cart = getCart();
  return cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
}

function updateCartUI() {
  const cart = getCart();
  const total = calculateTotal();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Actualizar indicadores del header de Figma: "Orden N° 129: $40.000"
  const orderAmountEl = document.getElementById('header-order-amount');
  const headerTotalEl = document.getElementById('header-cart-total');
  const cartBadgeEl = document.getElementById('cart-badge');
  const summaryTotalEl = document.getElementById('summary-total-amount');

  if (orderAmountEl) orderAmountEl.textContent = `$${total.toLocaleString('es-AR')}`;
  if (headerTotalEl) headerTotalEl.textContent = `$${total.toLocaleString('es-AR')}`;
  if (cartBadgeEl) cartBadgeEl.textContent = totalItems;
  if (summaryTotalEl) summaryTotalEl.textContent = `$${total.toLocaleString('es-AR')}`;

  // Actualizar lista de items en Pantalla 6 (Tu Pedido)
  renderSummaryItems();
}

// 5. Router SPA — Conmutación Fluida entre las Pantallas del Wireframe
const SCREENS = ['home', 'face-scan', 'catalog', 'payment', 'order-summary'];

function navigateTo(screenId) {
  if (!SCREENS.includes(screenId)) return;

  // Ocultar todas las pantallas
  SCREENS.forEach(id => {
    const el = document.getElementById(`screen-${id}`);
    if (el) {
      el.classList.add('hidden');
      el.setAttribute('aria-hidden', 'true');
    }

    const pill = document.getElementById(`pill-${id}`);
    if (pill) {
      pill.classList.remove('bg-purple-600', 'text-white', 'dark:bg-purple-600', 'font-bold');
      pill.classList.add('bg-slate-200', 'text-slate-700', 'dark:bg-slate-800', 'dark:text-slate-300');
      pill.setAttribute('aria-current', 'false');
    }
  });

  // Mostrar la pantalla activa
  const target = document.getElementById(`screen-${screenId}`);
  if (target) {
    target.classList.remove('hidden');
    target.setAttribute('aria-hidden', 'false');
    target.focus();
  }

  // Actualizar pill activo en el navegador del prototipo
  const activePill = document.getElementById(`pill-${screenId}`);
  if (activePill) {
    activePill.classList.remove('bg-slate-200', 'text-slate-700', 'dark:bg-slate-800', 'dark:text-slate-300');
    activePill.classList.add('bg-purple-600', 'text-white', 'dark:bg-purple-600', 'font-bold');
    activePill.setAttribute('aria-current', 'page');
  }

  // Guardar estado en localStorage
  localStorage.setItem(STORAGE_KEYS.ACTIVE_VIEW, screenId);

  // Actualizar título dinámico del header
  updateHeaderNav(screenId);

  // Scroll suave al inicio del marco
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateHeaderNav(screenId) {
  const headerRight = document.getElementById('header-right-label');
  if (!headerRight) return;

  switch (screenId) {
    case 'home':
      headerRight.innerHTML = `
        <button onclick="toggleTheme()" class="px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:brightness-110 focus-visible:outline-none">
          <span id="theme-icon">🌑</span> Modo
        </button>
      `;
      break;
    case 'face-scan':
      headerRight.innerHTML = `<span class="text-sm font-semibold text-slate-600 dark:text-slate-300">Reconocimiento facial</span>`;
      break;
    case 'catalog':
      const total = calculateTotal();
      headerRight.innerHTML = `
        <div class="flex items-center gap-2">
          <span class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200">
            Orden N° <span id="header-order-id">${currentOrderNumber}</span>: <strong id="header-order-amount" class="text-purple-600 dark:text-purple-400 font-bold">$${total.toLocaleString('es-AR')}</strong>
          </span>
        </div>
      `;
      break;
    case 'payment':
      headerRight.innerHTML = `<span class="text-sm font-semibold text-slate-600 dark:text-slate-300">Metodo de Pago</span>`;
      break;
    case 'order-summary':
      headerRight.innerHTML = `<span class="text-sm font-semibold text-slate-600 dark:text-slate-300">Tu pedido</span>`;
      break;
  }
}

// 6. Pantalla 2 — Reconocimiento Facial / Bio-escáner
function initFaceScan() {
  const scanTriggerBtn = document.getElementById('btn-start-scan');
  const scanStatusEl = document.getElementById('scan-status-text');
  const scanOvalEl = document.getElementById('scan-oval-target');
  const scanBeamEl = document.getElementById('scan-beam');

  if (scanTriggerBtn) {
    scanTriggerBtn.addEventListener('click', () => {
      scanTriggerBtn.disabled = true;
      scanTriggerBtn.innerHTML = '<span>Escaneando bio-datos...</span> <span class="animate-spin">⏳</span>';
      
      if (scanStatusEl) {
        scanStatusEl.textContent = 'Analizando biometría facial... mantén la posición';
        scanStatusEl.className = 'text-sm font-semibold text-cyan-600 dark:text-cyan-400 animate-pulse';
      }

      if (scanOvalEl) {
        scanOvalEl.classList.add('ring-4', 'ring-cyan-400', 'scale-105');
      }

      setTimeout(() => {
        if (scanStatusEl) {
          scanStatusEl.textContent = '¡Rostro reconocido con éxito! Identidad confirmada: Kevin Miller (Domo Alpha)';
          scanStatusEl.className = 'text-sm font-bold text-emerald-600 dark:text-emerald-400';
        }

        if (scanTriggerBtn) {
          scanTriggerBtn.disabled = false;
          scanTriggerBtn.innerHTML = '<span>Verificación Exitosa ✔</span>';
          scanTriggerBtn.classList.remove('btn-figma-neutral');
          scanTriggerBtn.classList.add('bg-emerald-600', 'text-white');
        }

        setTimeout(() => {
          navigateTo('catalog');
        }, 1200);
      }, 1800);
    });
  }
}

// 7. Pantalla 3 — Renderizado de Tarjetas de Catálogo (Figma Wireframe Gestalt)
function renderCatalogCards() {
  const container = document.getElementById('catalog-cards-container');
  if (!container) return;

  container.innerHTML = PRODUCTS.map(product => `
    <article class="figma-card flex flex-col justify-between" aria-label="Tarjeta de ${product.name}">
      <!-- Caja de imagen según Figma: 'Imagen del producto' -->
      <div class="w-full h-44 rounded-2xl bg-slate-300 dark:bg-slate-800 flex flex-col items-center justify-center p-4 text-center border border-slate-300 dark:border-slate-700 mb-4 relative overflow-hidden group">
        <span class="text-5xl group-hover:scale-110 transition-transform duration-300 mb-1" aria-hidden="true">${product.imageIcon}</span>
        <span class="text-xs font-semibold text-slate-600 dark:text-slate-400">Imagen del producto</span>
        <span class="absolute top-2 right-2 px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${product.badgeClass}">
          ${product.speciesLabel}
        </span>
      </div>

      <!-- Fila de Nombre y Precio según Figma: 'Nombre del producto' (izq) | 'Precio' (der) -->
      <div class="flex items-center justify-between gap-2 mb-4">
        <h3 class="text-base font-bold text-slate-900 dark:text-white">${product.name}</h3>
        <strong class="text-base font-bold text-slate-900 dark:text-amber-400 font-heading shrink-0">
          $${product.price.toLocaleString('es-AR')}
        </strong>
      </div>

      <!-- Botón de acción según Figma: 'Agregar al pedido' con los 5 estados -->
      <div class="flex justify-end pt-2 border-t border-slate-200 dark:border-slate-800">
        <button 
          type="button" 
          onclick="addToCart('${product.id}')" 
          class="btn-figma-neutral !w-auto text-sm px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          aria-label="Agregar ${product.name} al pedido"
        >
          <span>Agregar al pedido</span>
          <span aria-hidden="true">+</span>
        </button>
      </div>
    </article>
  `).join('');
}

// 8. Pantalla 4 — Métodos de Pago Interactivos
function updatePaymentMethodUI() {
  const method = PAYMENT_METHODS[currentPaymentIndex];
  const titleEl = document.getElementById('payment-method-title');
  const detailsEl = document.getElementById('payment-method-details');
  const iconEl = document.getElementById('payment-method-icon');
  const noteEl = document.getElementById('payment-method-note');

  if (titleEl) titleEl.textContent = method.name;
  if (detailsEl) detailsEl.textContent = method.details;
  if (iconEl) iconEl.textContent = method.icon;
  if (noteEl) noteEl.textContent = method.infoNote;
}

function nextPaymentMethod() {
  currentPaymentIndex = (currentPaymentIndex + 1) % PAYMENT_METHODS.length;
  updatePaymentMethodUI();
  showToast(`Método seleccionado: ${PAYMENT_METHODS[currentPaymentIndex].name}`);
}

function confirmOrderPayment() {
  const cart = getCart();
  const total = calculateTotal();
  const orderId = `N° ${currentOrderNumber}`;

  const newOrder = {
    id: orderId,
    items: cart,
    total: total,
    method: PAYMENT_METHODS[currentPaymentIndex].name,
    date: new Date().toISOString()
  };

  // Guardar en orders de localStorage
  try {
    const orders = JSON.parse(localStorage.getItem(STORAGE_KEYS.ORDERS)) || [];
    orders.unshift(newOrder);
    localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(orders));
  } catch (e) {
    // ignore
  }

  // Avanzar a la Pantalla 6 (Tu pedido / Confirmación final)
  navigateTo('order-summary');
  showToast('¡Pago registrado con éxito! Cohete despachado 🚀');
}

// 9. Pantalla 6 — Resumen Final de "Tu Pedido"
function renderSummaryItems() {
  const container = document.getElementById('summary-items-list');
  if (!container) return;

  const cart = getCart();

  container.innerHTML = cart.map(item => `
    <div class="flex items-center justify-between text-base font-semibold text-slate-800 dark:text-slate-200 py-1">
      <span>${item.name} x${item.quantity}</span>
      <span class="font-bold text-slate-900 dark:text-slate-100">$${(item.price * item.quantity).toLocaleString('es-AR')}</span>
    </div>
  `).join('');
}

function resetOrderFlow() {
  // Incrementar número de orden para la siguiente iteración
  currentOrderNumber += 1;
  const orderIdEl = document.getElementById('header-order-id');
  if (orderIdEl) orderIdEl.textContent = currentOrderNumber;

  navigateTo('home');
  showToast('¡Sesión reiniciada! Listo para un nuevo pedido.');
}

// 10. Control de Tema (Espacio Profundo / Nebulosa Solar)
function initTheme() {
  const saved = localStorage.getItem(STORAGE_KEYS.THEME) || 'dark';
  applyTheme(saved);
}

function toggleTheme() {
  const isDark = document.documentElement.classList.contains('dark');
  const newTheme = isDark ? 'light' : 'dark';
  applyTheme(newTheme);
  localStorage.setItem(STORAGE_KEYS.THEME, newTheme);
  showToast(newTheme === 'dark' ? 'Espacio Profundo activado 🌑' : 'Nebulosa Solar activada ☀️');
}

function applyTheme(theme) {
  const root = document.documentElement;
  const icon = document.getElementById('theme-icon');
  const label = document.getElementById('theme-label');

  if (theme === 'dark') {
    root.classList.add('dark');
    if (icon) icon.textContent = '🌑';
    if (label) label.textContent = 'Espacio Profundo';
  } else {
    root.classList.remove('dark');
    if (icon) icon.textContent = '☀️';
    if (label) label.textContent = 'Nebulosa Solar';
  }
}

// 11. Toast de Feedback Accesible
function showToast(message) {
  let toast = document.getElementById('feedback-toast');
  if (!toast) {
    toast = document.createElement('aside');
    toast.id = 'feedback-toast';
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    toast.className = 'fixed bottom-5 right-5 z-50 bg-slate-900 dark:bg-purple-950 border border-purple-500/50 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 transition-opacity duration-300 opacity-0 pointer-events-none text-sm font-bold force-text-white';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<span>🚀</span> <span>${message}</span>`;
  toast.classList.remove('opacity-0', 'pointer-events-none');
  toast.classList.add('opacity-100');

  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => {
    toast.classList.remove('opacity-100');
    toast.classList.add('opacity-0', 'pointer-events-none');
  }, 3000);
}

// 12. Inicialización General
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderCatalogCards();
  initFaceScan();
  updatePaymentMethodUI();
  updateCartUI();

  // Recuperar pantalla activa previa o iniciar en Home
  const savedView = localStorage.getItem(STORAGE_KEYS.ACTIVE_VIEW) || 'home';
  navigateTo(savedView);
});
