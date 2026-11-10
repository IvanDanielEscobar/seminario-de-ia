# Arquitectura del Proyecto (HTML5, CSS & Stack Frontend UX) — Rocket Pizza Lunar

## En una frase
Rocket Pizza Lunar es una Single Page Application (SPA) accesible y ultraligera desarrollada en HTML5 Semántico, Tailwind CSS v3 y JavaScript Vanilla, diseñada para que colonizadores lunares (Kevin) y científicos fotosensibles (Xylar) configuren y lancen pedidos de pizzas bio-compatibles con entrega garantizada en 15 minutos luz, persistencia local y cálculo reactivo en Créditos Lunares (CL).

---

## Stack Tecnológico & UI
- **Estructura Markup**: HTML5 Semántico estricto (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<figure>`, `<footer>`, `<button>`).
- **Estilos & UI Framework**: Tailwind CSS v3 (vía CDN) con paleta espacial personalizada (Morado Propulsión, Cyan Rayo Láser, Ámbar CL), modo oscuro/claro con clase `.dark`, y clase de seguridad `.force-text-white`.
- **Tipografías**: Google Fonts — 'Space Grotesk' / 'Outfit' para títulos y encabezados; 'Plus Jakarta Sans' / 'Inter' para cuerpo de texto y etiquetas.
- **Lógica de Cliente**: JavaScript Vanilla ES6+ nativo (Manipulación directa del DOM, Router SPA ancla sin recarga, `localStorage` con claves `rocket_pizza_orders` y `rocket_pizza_cart`, y cálculo reactivo de Créditos Lunares).
- **Entorno Agéntico**: Google Antigravity 2.0 + Gentle-AI Protocol (Spec-Driven Development) + Memoria Persistente Engram (`.agents/memory/engram_memory.json`).

---

## Mapa de Carpetas y Módulos
```
seminario_antigravity/
├── index.html                  # SPA completa: Navbar fija, Hero, Hangar de Pizzas, Formulario y Modal
├── styles.css                  # Estilos complementarios, variables y utilidades de accesibilidad
├── app.js                      # Lógica de cliente: Carrito, cálculo de CL, modal accesible y dark mode
├── docs/
│   └── contexto/               # Master Context del proyecto (6 documentos vivos sincronizados)
│       ├── arquitectura.md     # Stack, router SPA, relación con Figma y límites firmes
│       ├── convenciones.md     # Paleta semántica, 5 estados, tipografía, Gestalt y WCAG AA
│       ├── decisiones.md       # ADRs cronológicos ordenados ([ADR-XXX] · [YYYY-MM-DD HH:mm])
│       ├── glosario.md         # Términos del dominio, reglas nucleares y tabla de labeling humano
│       ├── flujo-de-trabajo.md # Integración DCU + SDD adaptativo y Checklist DoD (100 pts)
│       └── errores-conocidos.md# Bitácora de prevención de gotchas (overflow, contraste, modales)
├── .agents/
│   ├── rules/
│   │   └── antigravity_rules.md# Operating System & Reglas Globales (trigger: always_on)
│   ├── memory/
│   │   └── engram_memory.json  # Memoria persistente del agente
│   └── skills/                 # Skills agénticas podadas y curadas
│       ├── tailwind-ui/        # Maquetación ágil y paleta espacial
│       ├── a11y-wcag/          # Accesibilidad WCAG AA y prueba de teclado
│       ├── vanilla-dom-reactive/# Persistencia en localStorage y cálculo reactivo
│       └── sdd-workflow/       # Protocolo SDD y rúbrica de 100 puntos
```

---

## Relación con el Prototipo de Figma (Wireframe Ingestion)
- **Pantallas Mapeadas del PDF de Figma**:
  - `Pantalla 1 (Home / Hero)`: Header "Rocket Pizza", ilustración del astronauta surfeando en una porción de pizza con queso y pepperoni, headline "Consegui la pizza mas sabrosa aqui en ¡Rocket Pizza!" y botón CTA "Pedir ahora".
  - `Pantalla 2 (Reconocimiento Facial)`: Header con etiqueta "Reconocimiento facial", visor biométrico ovalado centrado con animación láser ("Ubica tu rostro en el centro") y botón de escaneo/verificación.
  - `Pantalla 3 (Catálogo / Hangar)`: Header con orden y monto dinámico ("Orden N° 129: $..."), tarjetas Gestalt (caja "Imagen del producto", fila "Nombre del producto" / "Precio" y botón "Agregar al pedido").
  - `Pantalla 4 (Método de Pago)`: Header "Metodo de Pago", tarjeta de "Transferencia" con datos bancarios (Alias: RocketPizza., CBU: 12345678987654321), y botones en cascada ("Elegir otro metodo de pago", "Confirmar", "Cancelar").
  - `Pantalla 5 y 6 (Tu Pedido / Confirmación)`: Header "Tu pedido", desglose de raciones ("Pizza especial x2, Bebida x2"), importe "Total: $40.000", tiempo de espera "Demora 20 minutos", mensaje de éxito "Gracias por tu compra!" y botón "Volver al inicio".
- **Implementación**: Antigravity traslada con precisión milimétrica la jerarquía visual de Gestalt, los 5 estados obligatorios y los tokens de color directamente a `index.html`, `styles.css` / `style.css` y `app.js`.

---

## Lo que NO existe (y NO hay que crear)
- ❌ **NO usar librerías JS pesadas**: Prohibido usar React, Vue, Angular o Svelte.
- ❌ **NO mezclar frameworks CSS**: No importar Bootstrap ni librerías externas incompatibles con Tailwind CSS.
- ❌ **NO usar estilos inline**: Prohibido usar atributos `style="..."` dispersos en el marcado HTML.
- ❌ **NO crear backends**: Sin servidores Node.js/Express, Python, PHP ni endpoints API remotos.
- ❌ **NO usar bases de datos**: Sin SQL, MongoDB, Firebase ni Supabase; toda la persistencia se gestiona en cliente vía `localStorage`.
