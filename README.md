# Tripleten web_project_around_es
## Sobre el proyecto

Este proyecto usa **JavaScript puro (vanilla JS)** para manipular el DOM, manejar eventos y trabajar con `<template>`, sin frameworks ni librerías externas.

> **Nota:** solo cubre la parte de front-end / interactividad. Los cambios (tarjetas, likes, perfil) no persisten al recargar, ya que no hay back-end.

## Funcionalidad en `scripts/index.js`

**1. Renderizado dinámico de tarjetas**
`getCardElement(data)` clona `<template id="card-template">` y usa parámetros predeterminados (`name`, `link`) para datos incompletos. `renderCard()` la antepone al contenedor. `initialCards.forEach()` pinta las tarjetas iniciales.

**2. Agregar tarjetas**
El botón "+" abre el formulario emergente. `handleCardFormSubmit(evt)` crea la tarjeta, cierra el modal y limpia el formulario.

**3. Me gusta**
`handleLikeClick(evt)` alterna la clase `card__like-button_is-active`.

**4. Eliminar tarjetas**
`handleDeleteClick(evt)` elimina la tarjeta con `.closest(".card").remove()`.

**5. Imagen ampliada**
`handleImageClick(name, link)` abre un modal con la imagen y su título como leyenda.

**Heredado:** edición de perfil (precarga y actualiza nombre/descripción) y funciones reutilizables `openModal()` / `closeModal()`.
