# Registro de Errores Conocidos, Gotchas de UX & Accesibilidad — Rocket Pizza Lunar

Este documento recopila las trampas frecuentes de diseño y frontend resueltas para evitar regresiones o retrocesos durante el desarrollo agéntico.

---

## 🐛 1. Trampa de Contraste en Modo Claro (Botones Ilegibles)
- **Problema**: Al alternar al modo *"Nebulosa Solar"* (Light Mode), los botones con fondo sólido (Morado Propulsión `#9333ea`, Bio-Éxito `#10b981` o Peligro `#ef4444`) heredan color de texto oscuro o gris desde las clases globales del contenedor, volviéndose ilegibles y violando el ratio mínimo 4.5:1 de la norma WCAG AA.
- **Solución Mandatoria**: Aplicar la clase de seguridad `.force-text-white { color: #ffffff !important; }` (o `!text-white` en utilidades Tailwind) en todos los botones con fondos oscuros o intensos para garantizar texto blanco nítido y legible en cualquier modo.

---

## 📱 2. Desborde Horizontal en Pantallas Móviles
- **Problema**: Uso de anchos rígidos (`width: 500px`), márgenes negativos no contenidos o cajas con padding no contemplado que generan scroll horizontal involuntario en celulares y tablets espaciales (Kevin).
- **Solución Mandatoria**: Diseñar siempre **Mobile-First**, utilizar anchos porcentuales o basados en grid fluido (`w-full`, `max-w-md`), y aplicar `overflow-x: hidden` en el elemento `body` y en el contenedor raíz `<main>`.

---

## ⌨️ 3. Pérdida del Indicador de Foco para Teclado
- **Problema**: Eliminar visualmente el contorno de foco con `outline: none` sin proveer un reemplazo visual, dejando la interfaz completamente inoperable para usuarios que navegan sin ratón (*Desafío de la Mano Atada*).
- **Solución Mandatoria**: Reemplazar siempre con clases de foco visibles y de alto contraste mediante `:focus-visible` (ej: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950`).

---

## 🚪 4. Cierre Inaccesible de Modales
- **Problema**: Ventanas modales (como la ficha de Bio-compatibilidad) que solo pueden cerrarse haciendo clic con precisión en una 'X' diminuta, atrapando a usuarios en celulares, con guantes gruesos o navegando por teclado.
- **Solución Mandatoria**:
  - Proveer un botón de cierre visible con área táctil mínima de **44px a 48px** (`min-h-[44px]`).
  - Permitir el cierre haciendo clic en el backdrop oscuro exterior.
  - Escuchar el evento nativo `keydown` en JavaScript para cerrar inmediatamente al presionar la tecla `Escape`.
  - Confinar el foco dentro del diálogo (`role="dialog"`, `aria-modal="true"`) y restaurarlo al botón de origen al cerrarlo.
