# Registro de Decisiones de Arquitectura y UX (ADRs) — Rocket Pizza Lunar

Este documento es una bitácora cronológica con Fecha y Hora de todas las decisiones técnicas y de experiencia de usuario acordadas para este proyecto.

> ✋ **Regla de Autorización Obligatoria**: Si una instrucción del usuario implica un cambio estructural en el diseño, la navegación SPA, la paleta semántica o el stack, el agente **debe solicitar autorización explícita antes de ejecutarlo** y luego registrar el ADR correspondiente.

---

## 📌 Formato de Registro de ADRs

### [ADR-001] · [2026-08-20 10:00] Elección del Framework CSS y Sistema de Diseño
- **Contexto**: Se requiere maquetar rápidamente una SPA responsiva y moderna sin generar hojas de estilo gigantes.
- **Decisión**: Utilizar TailwindCSS v3 vía CDN con configuración extendida de colores semánticos y tipografías Google Fonts.
- **Consecuencias / Descartado**: Se descartan frameworks JS pesados (React/Vue) y hojas de estilo CSS desorganizadas.

---

### [ADR-002] · [2026-08-20 10:30] Arquitectura SPA Multi-sección sin Recarga
- **Contexto**: El usuario necesita navegar fluidamente entre Inicio, Catálogo y Formulario de Pedido.
- **Decisión**: Implementar una arquitectura Single Page Application (SPA) en un solo archivo `index.html` gestionada mediante funciones de visualización en `app.js`.
- **Consecuencias**: Cero tiempo de recarga, mejor experiencia de usuario y persistencia de estado con `localStorage`.

---

### [ADR-003] · [2026-08-20 11:00] Soporte de Accesibilidad Universal (WCAG AA) y 5 Estados
- **Contexto**: Se necesita garantizar que personas con discapacidad visual o motora puedan navegar el prototipo.
- **Decisión**: Implementar ratio de contraste mínimo 4.5:1, navegación completa por teclado con `:focus-visible` y los 5 estados obligatorios en todos los componentes interactivos.
- **Consecuencias**: Cumplimiento de los principios POUR y evaluación exitosa en el Desafío de la Mano Atada.

---

### [ADR-004] · [2026-10-07 20:28] Adopción del Operating System Gentle-AI y Mentalidad Senior Product Engineer
- **Contexto**: Se requiere un protocolo riguroso de ingeniería de producto que garantice el *Why antes del How*, calidad visual superior y trazabilidad documental.
- **Decisión**: Integrar el Operating System de Gentle-AI con reglas `always_on`, ciclo SDD estructurado y Master Context centralizado en `docs/contexto/`.
- **Consecuencias**: Ninguna decisión se toma sin justificación previa y se prohíbe la dispersión de archivos sueltos.

---

### [ADR-005] · [2026-10-07 21:10] Identidad del Producto y Arquetipos ("Personas" Kevin y Xylar)
- **Contexto**: El sistema debe resolver dolores específicos de usuarios en contextos espaciales adversos.
- **Decisión**: Diseñar "Rocket Pizza Lunar" (entregas en 15 min luz) optimizado para **Kevin** (minero con guantes en tablet industrial, requiriendo áreas táctiles $\ge 48\text{px}$) y **Xylar** (marciano fotosensible, requiriendo modo oscuro de alto contraste sin brillos agresivos).
- **Consecuencias**: Se priorizan botones grandes, espaciados cómodos y un tema oscuro por defecto.

---

### [ADR-006] · [2026-10-07 21:11] Paleta Semántica Espacial con Modos "Espacio Profundo" y "Nebulosa Solar"
- **Contexto**: Establecer una personalidad visual inmersiva que cumpla estrictamente la norma WCAG AA en modo oscuro y claro.
- **Decisión**: Definir tokens: Morado Propulsión (`#9333ea`), Cyan Rayo Láser (`#06b6d4`), Ámbar Créditos Lunares (`#fbbf24`), Bio-Éxito (`#10b981`) y Peligro (`#ef4444`). Modos: Espacio Profundo (`#020617`) y Nebulosa Solar (`#f8fafc`) con ratio $\ge 4.5:1$.
- **Consecuencias**: Contraste garantizado en ambos temas mediante la clase de seguridad `.force-text-white`.

---

### [ADR-007] · [2026-10-07 21:12] Prohibición Estricta de Backend, Bases de Datos y Frameworks SPA Pesados
- **Contexto**: Limitar el alcance a las herramientas autorizadas del módulo frontend y evitar sobreingeniería.
- **Decisión**: 
  - ❌ PROHIBIDO crear servidores backend en Node.js, Express, Python o PHP.
  - ❌ PROHIBIDO conectar bases de datos externas como SQL, MongoDB o Firebase.
  - ❌ PROHIBIDO utilizar frameworks pesados como React, Vue o Angular.
- **Consecuencias**: Toda la lógica de negocio y presentación se resuelve íntegramente en el cliente.

---

### [ADR-008] · [2026-10-07 21:12] Persistencia en `localStorage` y Reactividad en Créditos Lunares (CL)
- **Contexto**: Permitir que los pedidos y el carrito se mantengan localmente aun con pérdida de conectividad satelital.
- **Decisión**: Usar `localStorage` con las claves canónicas `rocket_pizza_orders` y `rocket_pizza_cart`, con cálculo reactivo inmediato de Créditos Lunares (CL) en el DOM.
- **Consecuencias**: Experiencia fluida sin latencia de red y con feedback instantáneo.

---

### [ADR-009] · [2026-10-07 21:12] Definition of Done (Rúbrica 100 Puntos) y Blindaje contra Gotchas
- **Contexto**: Asegurar los estándares de calidad requeridos para evaluación y estabilidad móvil.
- **Decisión**: Adoptar la rúbrica de 100 puntos (fidelidad a Figma, prueba de teclado, contraste WCAG AA, ergonomía móvil y persistencia). Blindar con `overflow-x: hidden`, clase `.force-text-white` y botones `<button>` nativos.
- **Consecuencias**: Cero scroll horizontal accidental y accesibilidad garantizada.

---

### [ADR-010] · [2026-10-07 21:47] Protocolo de Consulta Previa y Poda de Skills Agénticas
- **Contexto**: Mantener el agente enfocado exclusivamente en las tecnologías permitidas del proyecto.
- **Decisión**: Podar skills externas y conservar solo `tailwind-ui`, `a11y-wcag`, `vanilla-dom-reactive` y `sdd-workflow`. Exigir confirmación previa ante cualquier modificación estructural.
- **Consecuencias**: Reducción de ruido y apego estricto a las reglas del curso.

---

### [ADR-011] · [2026-10-07 22:06] Consolidación de Especificación de Arquitectura Frontend UX
- **Contexto**: Estandarizar la descripción formal del producto, stack, mapa de carpetas y mapeo con los frames de Figma.
- **Decisión**: Sincronizar formalmente `docs/contexto/arquitectura.md` con la plantilla canónica de arquitectura frontend UX.
- **Consecuencias**: Estructura de carpetas y roles de archivos perfectamente definidos.

---

### [ADR-012] · [2026-10-07 22:19] Consolidación de Convenciones de Diseño, UI Tokens y Código Accesible (WCAG POUR)
- **Contexto**: Formalizar el sistema de color semántico, escala tipográfica modular, los 5 estados de componentes y principios POUR.
- **Decisión**: Sincronizar formalmente `docs/contexto/convenciones.md` aplicando el estándar de tokens de diseño y prohibición estricta de estilos inline y controles no semánticos.
- **Consecuencias**: Consistencia estética y accesibilidad no negociable en todos los componentes.

---

### [ADR-013] · [2026-10-07 22:20] Consolidación del Glosario del Dominio y Rotulado UX (Labeling)
- **Contexto**: Estandarizar el vocabulario temático de la aplicación eliminando jerga técnica de desarrollador en favor de rotulado humano natural (Clase 7 de UX) y formalizar la definición de los componentes de interfaz.
- **Decisión**: Consolidar `docs/contexto/glosario.md` con la tabla comparativa de rotulado UX (Lanzar Pedido, Hangar de Pizzas, Historial de Vuelo, Teletransporte) y la definición canónica de Hero, Navbar, Card Gestalt, Modal y Toast de feedback.
- **Consecuencias**: Interfaz libre de tecnicismos, completamente inmersiva y orientada a la comprensión del usuario final.

---

### [ADR-014] · [2026-10-07 22:22] Integración del Ciclo DCU con Spec-Driven Development (SDD)
- **Contexto**: Se requiere articular formalmente la investigación y wireframing de Diseño Centrado en el Usuario con el ciclo de desarrollo agéntico en 6 etapas (`sdd-explore`, `sdd-propose`, `sdd-tasks`, `sdd-apply`, `sdd-verify`) y definir el Criterio de Terminado (DoD).
- **Decisión**: Consolidar `docs/contexto/flujo-de-trabajo.md` con el diagrama metodológico DCU ➔ SDD, el protocolo adaptativo Fast-Path vs SDD completo, y el checklist DoD de 6 puntos obligatorios.
- **Consecuencias**: Proceso de entrega estructurado, auditable y con cero margen de regresiones visuales o de accesibilidad.

---

### [ADR-015] · [2026-10-07 22:23] Consolidación del Registro de Errores Conocidos, Gotchas de UX & Accesibilidad
- **Contexto**: Recopilar formalmente las 4 trampas frecuentes de diseño y frontend identificadas para evitar regresiones visuales o de accesibilidad durante la construcción de la SPA.
- **Decisión**: Consolidar `docs/contexto/errores-conocidos.md` documentando las soluciones mandatorias para: 1) trampa de contraste en modo claro (`.force-text-white`), 2) desborde horizontal móvil (`overflow-x: hidden`), 3) pérdida de foco por teclado (`:focus-visible` Cyan Láser) y 4) cierre inaccesible de modales (botón $\ge 44\text{px}$, backdrop click y tecla `Escape`).
- **Consecuencias**: Blindaje definitivo contra defectos comunes de maquetado e interacción.

---

### [ADR-016] · [2026-10-07 22:37] Implementación Completa de la SPA Rocket Pizza Lunar (Fase Apply)
- **Contexto**: Ejecutar las tareas técnicas de la fase Apply del ciclo SDD para materializar la Single Page Application de Rocket Pizza Lunar cumpliendo con el stack aprobado, las 6 especialidades de pizzas, la persistencia en `localStorage` y la accesibilidad WCAG AA.
- **Decisión**: Implementar `index.html` con los 5 bloques alineados a los frames de Figma, `styles.css` con los 5 estados obligatorios y clase `.force-text-white`, y `app.js` con el carrito reactivo en Créditos Lunares (CL), modal accesible con tecla `Escape` y switch de tema conmutable.
- **Consecuencias**: Software vivo, modular, 100% interactivo en el cliente y listo para la fase de auditoría Verify.

---

### [ADR-017] · [2026-10-07 22:53] Importación de la Biblioteca Global de Skills (agentic-awesome-skills)
- **Contexto**: Se solicita importar la biblioteca de skills comunitaria desde `https://github.com/sickn33/agentic-awesome-skills` dentro de `.agents/skills/` para disponer de herramientas avanzadas de frontend, accesibilidad, testing y diseño.
- **Decisión**: Clonar el repositorio dentro de `.agents/skills/agentic-awesome-skills/`, integrando más de 2.500 skills indexadas preservando simultáneamente las skills curadas del proyecto (`tailwind-ui`, `a11y-wcag`, `vanilla-dom-reactive`, `sdd-workflow`).
- **Consecuencias**: Catálogo masivo de capacidades agénticas disponible localmente en el proyecto.

---

### [ADR-018] · [2026-10-07 23:00] Auditoría y Poda Inteligente de Skills en .agents/skills/
- **Contexto**: El repositorio importado contiene más de 2.560 skills de backend (Node, Python, Go, Rust), bases de datos (SQL, MongoDB, Firebase), frameworks prohibidos (React, Angular, Vue, Svelte) y desarrollo móvil/cloud, las cuales violan los límites técnicos de [ADR-007], sobrecargan el contexto del agente y consumen espacio innecesario.
- **Decisión**: Ejecutar una poda inteligente conservando exclusivamente 8 skills especializadas de alta utilidad para frontend UI, accesibilidad, diseño UX, dinamismo DOM y metodología SDD (`tailwind-ui`, `tailwind-patterns`, `a11y-wcag`, `ui-a11y`, `web-design-guidelines`, `uxui-principles`, `vanilla-dom-reactive`, `sdd-workflow`), y eliminando el 100% de las carpetas incompatibles y superfluas.
- **Consecuencias**: Entorno agéntico ultraenfocado, libre de ruido y 100% alineado con el stack de Rocket Pizza Lunar.

---

### [ADR-019] · [2026-11-04 18:58] Ingesta Visual y Maquetación de Software Vivo del Wireframe Figma
- **Contexto**: Se recibe el documento PDF con las pantallas del Wireframe de baja fidelidad diseñado en Figma (Pantalla 1: Home/Astronauta surfer, Pantalla 2: Reconocimiento Facial, Pantalla 3: Catálogo con Orden N° y Agregar al pedido, Pantalla 4: Método de Pago con Transferencia/CBU/Alias, Pantallas 5 y 6: Tu Pedido con desglose, total, demora 20 minutos y botón volver al inicio).
- **Decisión**: Implementar con exactitud espacial y de Gestalt el flujo interactivo completo dentro de la SPA en `index.html`, `styles.css` / `style.css` y `app.js`, incorporando navegación paso a paso, selector de pantallas para evaluación rápida, soporte de 5 estados por componente, modo oscuro/claro y contraste WCAG AA $\ge 4.5:1$.
- **Consecuencias**: Maqueta de software vivo 100% interactiva, fiel al wireframe, operable por teclado y persistida en `localStorage`.






