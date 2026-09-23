# Cómo mostrar el sistema con una grabación real

La demo interactiva ya funciona sin video. Para sumar evidencia del producto real, grabá un recorrido de entre 60 y 75 segundos y agregalo al reproductor preparado. Evitá una explicación larga de todas las pestañas.

## Qué grabar

Usá una cuenta de demostración con nombres ficticios, sin teléfonos, correos, tokens ni cifras de clientes reales. Cerrá otras pestañas y notificaciones. Capturá la ventana del navegador a 1920×1080; acercá la interfaz si la letra se ve chica. Cursor visible, movimientos tranquilos y sin música que tape tu voz.

| Tiempo orientativo | Acción en pantalla | Guion sugerido |
| --- | --- | --- |
| 0–8 s | Mostrar agenda con turnos del día | “Así podés llevar el día de tu barbería con BarberosControl.” |
| 8–28 s | Elegir profesional, servicio, cliente y medio de pago; registrar | “Terminás un corte, elegís quién atendió, el servicio y cómo te pagaron. Lo registrás desde acá.” |
| 28–45 s | Abrir caja y señalar el cobro registrado | “Después lo consultás en la caja, con los cobros separados por medio de pago.” |
| 45–58 s | Mostrar configuración real de liquidación o cambio de sucursal | “Y organizás el equipo y el reparto según cómo trabaja tu barbería.” |
| 58–70 s | Volver a una vista general y cerrar | “Creá tu cuenta y conocé el sistema con tu propia barbería.” |

El guion debe coincidir con lo que se ve y funciona en tu cuenta actual. Si una función depende de un plan, aclará el plan. No muestres una pantalla inventada como si fuera el software real.

## Archivos e integración

Exportá MP4 con H.264 + AAC, resolución 1080p, 24 o 30 fps, optimizado para web con fast start. Buscá un tamaño aproximado de 8–20 MB según duración y legibilidad. El video no se descarga completo al entrar ni se reproduce solo: se solicita al abrirlo.

1. Guardá el MP4 en `assets/videos/recorrido.mp4`.
2. Opcionalmente agregá una portada en `assets/images/video-poster.jpg`.
3. Creá subtítulos que correspondan exactamente a tu grabación en `assets/videos/recorrido.vtt`, formato WebVTT.
4. Podés agregar una transcripción en `assets/videos/transcripcion.html`.
5. Editá `assets/js/config.js`:

```js
window.BC_LANDING = {
  video: {
    src: "assets/videos/recorrido.mp4",
    poster: "assets/images/video-poster.jpg",
    captions: "assets/videos/recorrido.vtt",
    transcript: "assets/videos/transcripcion.html"
  }
};
```

Dejá `""` en los campos opcionales cuyos archivos no hayas creado. Al completar `src`, aparece “Ver recorrido en video” junto a la demo. El video abre en un modal, se pausa al cerrar y admite Escape, controles nativos y subtítulos.

Si usás un CDN, poné la URL directa HTTPS del MP4. No coloques un enlace de una página de YouTube en `src`: un iframe requiere otra integración. Los subtítulos externos pueden requerir permisos CORS del servidor.

## Qué NO hace falta

No necesitás grabar cámara ni comprar una plantilla de animaciones. Una captura legible del producto real y tu explicación concreta aportan más claridad que un montaje de interfaces falsas. No hay una grabación incluida porque todavía no la proporcionaste.
