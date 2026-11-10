# Flujo de Trabajo: Ciclo DCU & Spec-Driven Development (SDD) — Rocket Pizza Lunar

Este documento describe el flujo metodológico para iterar, diseñar e implementar cambios en la aplicación web combinando el Diseño Centrado en el Usuario (DCU) con el protocolo Gentle-AI (SDD).

---

## 🔄 El Ciclo Metodológico DCU ➔ SDD

```
[ 1. Contexto & Requisitos UX ] ➔ [ 2. Wireframe Low-Fi Figma ] ➔ [ 3. SDD explore & propose ]
                                                                             │
[ 6. Software Vivo & DoD ] ⬅️ [ 5. SDD apply & verify ] ⬅️ [ 4. SDD tasks ] ⬅┘
```

1. **Investigación & DCU**: Entender necesidades de Personas (Kevin y Xylar) y sus puntos de dolor en el User Journey Map (fatiga, guantes, fotosensibilidad, latencia).
2. **Wireframing en Figma**: Definir la jerarquía visual de Gestalt (semejanza, proximidad y región común) y el flujo de navegación SPA en baja fidelidad.
3. **`sdd-explore` & `sdd-propose`**: Antigravity analiza las capturas y tokens de Figma y formula la propuesta técnica justificando el *Why antes del How*.
4. **`sdd-tasks`**: Desglose atómico de tareas de maquetado HTML5 semántico, utilidades Tailwind CSS, lógica Vanilla JS y accesibilidad.
5. **`sdd-apply`**: Generación e iteración del código en `index.html`, `styles.css` y `app.js` respetando los 5 estados y estándares de código.
6. **`sdd-verify`**: Auditoría contra especificaciones, verificación de ratio de contraste WCAG AA, persistencia en `localStorage` y prueba de la mano atada por teclado.

---

## ⚡ Flujo Adaptativo: Fast-Path vs Ciclo SDD Completo
- **Fast-Path (Fixes de 1 archivo / cambios de copia o estilo puntual)**:
  - Ejecución directa y quirúrgica.
  - Reporte conciso justificando el *Why* y el *How* en la respuesta final.
- **Ciclo SDD Completo (Nuevas funcionalidades / cambios estructurales > 2 archivos)**:
  - Requiere propuesta técnica previa con evaluación de alternativas y confirmación antes de modificar código o arquitectura.

---

## ✅ Criterio de Terminado (Definition of Done / DoD)
Antes de dar por finalizada cualquier funcionalidad o componente, se debe comprobar rigurosamente:

1. **Fidelidad Visual**: Coincide exactamente con la distribución, proporciones y jerarquía del Wireframe de Figma.
2. **Responsive Mobile-First**: Verificado en emulador móvil (F12) en anchos desde 360px hasta 1024px sin desborde horizontal (`overflow-x: hidden`).
3. **Los 5 Estados Presentes**: Todo elemento interactivo posee e implementa `Default`, `Hover`, `Active`, `Focus` y `Disabled`.
4. **Navegación por Teclado**: 100% operable con `TAB`, `Shift+TAB`, `Enter`, `Space` y cierre de modales con `Escape`, con anillo `:focus-visible` claramente visible.
5. **Contraste WCAG AA**: Ratio mínimo **4.5:1** verificado tanto en modo *"Espacio Profundo"* como en *"Nebulosa Solar"*, blindado con la clase `.force-text-white`.
6. **Memoria Engram**: Decisión registrada en `docs/contexto/decisiones.md` y guardada en memoria persistente con `mem_save`.
