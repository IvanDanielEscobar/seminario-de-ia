# Glosario del Dominio y Rotulado UX (Labeling) — Rocket Pizza Lunar

Este documento define el vocabulario del producto y los componentes de interfaz, asegurando un rotulado en lenguaje natural comprensible para el usuario final (Clase 7 de UX).

---

## 📖 Términos del Dominio del Producto
- **Rocket Pizza Lunar**: Pizzería interestelar con base operativa en el Cráter Tycho, especializada en el aprovisionamiento de alimentos nutritivos horneados para gravedad lunar reducida ($0.166\text{g}$).
- **Pizzas Espaciales**: Especialidades gastronómicas bio-compatibles horneadas a alta presión con masa madre lunar y vegetales hidropónicos cultivados en domos agrícolas.
- **Crédito Lunar (CL)**: Moneda fiat digital oficial utilizada para transacciones, cotizaciones y cálculo reactivo de pedidos en la colonia lunar.
- **Domo de Entrega**: Estación habitacional presurizada geodésica seleccionada por el usuario como punto de desembarco (Domo Alpha, Domo Beta, Base Minera Tycho, Domo Agrícola Kepler).
- **Bio-compatibilidad**: Calificación biológica obligatoria de cada pizza según la especie consumidora (Apto Humanos, Apto Marcianos, Multiespecie).

---

## 🏷️ Rotulado de Interfaz (UX Mindset vs Dev Mindset)
| Rotulado Erróneo (Dev Jargon) | Rotulado Correcto (UX Natural / Espacial) | Ubicación / Componente | Justificación UX |
| :--- | :--- | :--- | :--- |
| `Execute_User_Order_V2` | **Lanzar Pedido** | Botón Principal (Hero y Formulario) | Acción clara, empática y temática en lugar de jerga de base de datos. |
| `Item_Array_Grid_Render` | **Hangar de Pizzas** | Encabezado de Catálogo (`#hangar`) | Sitúa al usuario en el entorno temático de la base lunar. |
| `Módulo_Transacciones_Log` | **Historial de Vuelo** | Barra de Navegación / Carrito | Hace amigable y narrativo el registro de pedidos previos. |
| `User_Delivery_Destination_Input` | **Estación de Teletransporte** | Encabezado de Formulario (`#teletransporte`) | Reduce la fricción cognitiva del proceso de checkout. |
| `Show_Product_Details_Modal` | **Ver Ficha** | Botón Secundario de Tarjeta | Directo, conciso y accionable con un solo toque de guante para Kevin. |
| `Theme_Toggle_State_Boolean` | **Espacio Profundo / Nebulosa Solar** | Switch en Barra Superior (Navbar) | Humaniza el cambio de tema para la sensibilidad visual de Xylar. |
| `Validation_Error_Alert` | **Alerta de Radiación / Incompatible** | Mensajes de Error de Formulario | Comunica el problema de forma inmediata sin tecnicismos. |

---

## 🧩 Componentes de Interfaz de Usuario
- **Hero Section**: Portada principal de impacto visual con propuesta de valor, promesa de entrega en 15 minutos luz y botón CTA de alto contraste *"Lanzar Pedido"*.
- **Navbar**: Barra superior fija con logo de cohete espacial, enlaces ancla, switch accesible de tema (*Espacio Profundo / Nebulosa Solar*) y badge reactivo del carrito en Créditos Lunares (CL).
- **Card (Tarjeta)**: Bloque visual que agrupa imagen superior, badge de especie consumidora, título en `<h3>`, descripción breve de ingredientes, precio en CL y botón de acción *"Ver Ficha"*, aplicando la Ley de Proximidad y Región Común de Gestalt.
- **Modal**: Ventana emergente flotante con información detallada de Bio-compatibilidad, resumen del vuelo espacial, foco atrapado y botón accesible de cierre compatible con tecla `Escape`.
- **Feedback Toast / Alert**: Aviso visual de confirmación con fondo verde esmeralda (Bio-Éxito) que notifica el despacho exitoso del pedido sin recargar la página.
