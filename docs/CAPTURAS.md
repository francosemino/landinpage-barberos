# Colocar tus capturas en la sección de funciones

Tenés tres espacios con marcos ya armados: computadora, celular de reservas y celular del panel del cliente. Subí solo capturas de pantalla, sin agregar marcos de dispositivos a las imágenes.

1. Guardá tus imágenes en `assets/images/`:
   - `captura-agenda.webp`: computadora, recomendado 1600 × 1000 px (16:10).
   - `captura-reservas.webp`: celular, recomendado 900 × 1950 px (9:19.5).
   - `captura-panel-cliente.webp`: celular, recomendado 900 × 1950 px (9:19.5).
   También podés usar PNG o JPG: ajustá la extensión en las rutas.
2. En `assets/js/config.js`, completá el bloque `screenshots`:

```js
screenshots: {
  desktop: {
    src: "assets/images/captura-agenda.webp",
    alt: "Agenda de BarberosControl con turnos por profesional"
  },
  booking: {
    src: "assets/images/captura-reservas.webp",
    alt: "Reserva de turnos online desde el celular"
  },
  client: {
    src: "assets/images/captura-panel-cliente.webp",
    alt: "Panel del cliente con sus turnos y beneficios"
  }
},
```

Este bloque va dentro de `window.BC_LANDING`, junto a `video`. No reemplaces el archivo con este fragmento solo. El archivo completo ya está incluido en el ZIP.

Los textos de los espacios desaparecen automáticamente cuando carga cada imagen. Si la ruta queda vacía o la imagen no carga, se conserva el espacio. No hay que tocar HTML ni CSS. Las imágenes se muestran completas con `object-fit: contain`; respetar las proporciones recomendadas evita franjas vacías.

Usá una cuenta de ejemplo y ocultá datos personales reales antes de tomar las capturas. Los marcos vacíos están preparados para editar; completalos antes de publicar la sección terminada.
