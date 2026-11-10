# Convenciones de Diseño, UI Tokens y Código Accesible — Rocket Pizza Lunar

## 1. Sistema de Color Semántico
La paleta se rige por significados funcionales e inequívocos en la interfaz:

| Token Semántico | Valor Hex / Tailwind | Propósito en UI |
| :--- | :--- | :--- |
| **Color Primario (Brand / CTA)** | Morado Propulsión (`#9333ea` / `#c084fc`) | Botón principal "Lanzar Pedido", acentos de marca y bordes activos. |
| **Color Secundario (Acento)** | Cyan Rayo Láser (`#06b6d4`) | Anillos de foco `:focus-visible`, badges activos y resaltados futuristas. |
| **Semántico Warning (Créditos Lunares)** | Ámbar Espacial (`#fbbf24` / `#f59e0b`) | Precios transaccionales en CL, balances y tiempos de vuelo. |
| **Semántico Success (Bio-Éxito)** | Verde Esmeralda (`#10b981`) | Confirmación de teletransporte y compatibilidad de especie aprobada. |
| **Semántico Danger (Radiación / Error)** | Rojo Carmesí (`#ef4444`) | Alertas de incompatibilidad biológica y errores de formulario. |
| **Fondo Espacio Profundo (Dark)** | Slate-950 (`#020617`) | Fondo por defecto optimizado para Xylar (fotosensible). |
| **Fondo Nebulosa Solar (Light)** | Slate-50 (`#f8fafc`) | Fondo conmutable en modo claro con ratio de contraste WCAG AA. |

---

## 2. Escala Tipográfica Modular
Jerarquía visual para lectura sin esfuerzo en cualquier dispositivo lunar:

- **`h1` (Título Principal / Hero)**: `32px - 44px` (`2rem` a `2.75rem`) — Negrita (700/800) en *Space Grotesk* o *Outfit*.
- **`h2` (Títulos de Sección / Hangar)**: `24px - 32px` (`1.5rem` a `2rem`) — Seminegrita (600/700).
- **`h3` (Títulos de Tarjeta / Modal)**: `20px` (`1.25rem`) — Negrita (700) con espaciado cómodo.
- **`body` (Cuerpo de Texto y Descripciones)**: `16px` (`1rem`) — Regular (400/500) en *Plus Jakarta Sans* o *Inter* con interlineado 1.6 (`leading-relaxed`).
- **`caption` (Badges de Especie y Metadatos)**: `12px - 14px` (`0.75rem` a `0.875rem`) — Seminegrita (600) para lectura rápida.

---

## 3. Anatomía de Componentes: Los 5 Estados Obligatorios
Todo control interactivo (`<button>`, enlaces `<a>`, `<input>`, `<select>`) DEBE contemplar e implementar explícitamente sus 5 estados:

1. **Default**: Apariencia inicial en reposo, contraste nítido y elevación base (`shadow-md`).
2. **Hover**: Retroalimentación suave al posar el cursor (`brightness-110`, elevación física `-translate-y-0.5` y resplandor exterior `shadow-purple-500/40`).
3. **Active**: Sensación táctil de hundimiento al presionar (`scale-95` o `translate-y-0.5` con `brightness-95`).
4. **Focus**: Anillo de foco de alto contraste exterior con selector `:focus-visible` (`ring-2 ring-cyan-400 ring-offset-2 ring-offset-slate-950`) para navegación fluida por teclado (*Desafío Mano Atada*).
5. **Disabled**: Opacidad reducida (`opacity-50`), cursor inactivo (`cursor-not-allowed`) y supresión de eventos de puntero (`pointer-events-none`).

---

## 4. Reglas de Accesibilidad Web (WCAG - Principios POUR)
- **Perceptible — Ratio de Contraste**: Mínimo **4.5:1** (Norma AA/AAA) garantizado entre texto y superficie tanto en *"Espacio Profundo"* como en *"Nebulosa Solar"*.
- **Perceptible — Clase `.force-text-white`**: Obligatoria en botones con fondo sólido (morado, verde, rojo) para asegurar texto blanco `#ffffff` legible cuando el modo claro esté activo.
- **Operable — Áreas Táctiles Mínimas**: Botones y campos interactivos con altura mínima de **44px a 60px** (`min-h-[48px] px-6`) en móviles/tablets para operarios con guantes espaciales (Kevin).
- **Comprensible — Semántica Nativa**: 
  - Todo elemento interactivo debe usar `<button type="button">` (o `type="submit"`).
  - Toda imagen ilustrativa debe contener atributo `alt` descriptivo.
  - Todo campo de formulario debe estar asociado a su correspondiente `<label>`.
- **Robusto — Modales y Diálogos**: Diálogo con `role="dialog"`, `aria-modal="true"`, foco confinado y cierre inmediato con la tecla `Escape`.

---

## 5. Patrones Prohibidos
- ❌ **NUNCA usar `style="..."` inline** en etiquetas HTML (utilizar siempre clases de utilidad Tailwind o `styles.css`).
- ❌ **NUNCA eliminar el indicador de foco** (`outline: none` sin proveer un reemplazo visible con `ring-2`).
- ❌ **NUNCA usar `<div>` o `<span>` no semánticos como botones** sin accesibilidad de teclado ni atributos ARIA.
- ❌ **NUNCA permitir texto oscuro sobre fondos morados** en ningún modo de color.
