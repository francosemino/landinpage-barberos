# BarberosControl — landing renovada

La entrega es una web estática completa: HTML + CSS + JavaScript. No necesita npm, React ni compilación. No modifica el sistema de gestión, su backend ni su base de datos.

## 1. Probar en tu computadora

Descomprimí el ZIP. Abrí la carpeta que contiene `index.html` en VS Code y ejecutá en PowerShell:

```powershell
py -m http.server 5500 --bind 127.0.0.1
```

Abrí http://localhost:5500. Si tu instalación utiliza `python` en lugar de `py`, usá `python -m http.server 5500 --bind 127.0.0.1`.

También podés usar Live Server de VS Code. Para revisar favicons, serví esta carpeta como raíz del sitio; abrir el HTML con doble clic no reproduce el comportamiento de las rutas del servidor.

## 2. Qué reemplazar

Guardá una copia de tu landing anterior. Copiá a la raíz pública de la landing:

- `index.html`
- La carpeta `assets` completa (combiná carpetas y reemplazá los archivos del paquete).
- `favicon.ico`, `android-chrome-192x192.png`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`.
- `site.webmanifest`, `robots.txt` y `sitemap.xml`.

La carpeta `docs` es para vos; no es necesario publicarla.
No copies esta landing dentro del frontend del sistema de gestión. Es para el sitio público `www.barberoscontrol.com`.
Si el alojamiento publica una subcarpeta, colocá todos estos archivos allí. El ZIP recibido no incluye configuración del hosting, por eso no cambié redirecciones ni configuraciones del proveedor.
Si el servidor ya tiene un robots.txt con reglas adicionales, combiná las reglas en lugar de reemplazarlo sin revisarlo.

## 3. Qué incluye

- Mensaje principal y acceso directo al registro existente.
- Demo local de servicios, agenda, caja y reportes, identificada como ilustrativa.
- Registro simulado con efectivo/transferencia, valores actualizados y reinicio.
- Planes y sus prestaciones conservados del HTML enviado.
- Navegación móvil, preguntas frecuentes, botón móvil de registro y soporte por WhatsApp.
- Integración opcional de video real. Ver `VIDEO.md`.
- Favicon rastreable, manifest, sitemap, robots y datos estructurados sin valoraciones ficticias.
- Eventos de interacción preparados para medición. Ver `ESTRATEGIA.md`.

La demo no usa APIs ni guarda información en tu sistema. No es una copia funcional del software completo ni promete reproducir todas sus pantallas. Sus datos desaparecen al recargar.

## 4. Datos comerciales conservados del archivo recibido

| Plan | Precio publicado | Alcance |
| --- | --- | --- |
| Básico | ARS 17.000 / mes | Prestaciones originales |
| Premium | ARS 37.000 / mes | Prestaciones originales |
| Salón Avanzado | ARS 48.000 / mes | Prestaciones originales |

Se conserva `PRUEBAMES` y 30 días de prueba, tal como figuran en el archivo enviado. No se validó el cupón contra el backend ni se creó una cuenta. Comprobá que esos valores y las prestaciones publicadas coincidan con tu oferta vigente antes de publicar, en particular WhatsApp ilimitado y los límites de usuarios. No se modificaron estas condiciones comerciales.

Si cambiás un precio, actualizá tanto su tarjeta visible en `index.html` como `offers` dentro de `#structured-data` en el mismo archivo.

Se retiraron reseñas que el código identificaba como ejemplos, la puntuación 4.9/47 sin respaldo y enlaces vacíos. Los logos de barberías se conservaron del material original. No se agregaron promesas de cifrado, backups o migración automática sin verificar la infraestructura. Cuando tengas las URLs reales de términos y privacidad, agregalas al footer; no incluí páginas legales inventadas.

## 5. Google

Leé `GOOGLE-FAVICON.md`. El código está preparado, pero no fue publicado en tu servidor. La aparición del ícono requiere rastreo y procesamiento por Google y no se puede garantizar.

## 6. Validación

Pruebas locales con Chromium: registro simulado, totales por pago, agenda → servicio, reinicio, tabs con teclado, menú móvil, FAQ, imágenes, reducción de movimiento y ausencia de desborde entre 320 y 1440 px. HTML y archivos SEO comprobados localmente. No se enviaron formularios al backend ni se realizaron registros reales.

Las capturas en `docs/vistas` son del código implementado. No son imágenes generadas para simular el resultado.

## Actualización: Agenda, Reportes y capturas

La demo incluye agenda por profesional con grilla horaria, vistas Día/Semana, navegación por fecha, filtro de profesional y detalle seleccionable. En celular la vista diaria usa tarjetas. El botón Hoy vuelve al día de ejemplo, 18/09/2026. Registrar realizado lleva al formulario; confirmar el formulario actualiza caja, reportes y estado del turno.

Reportes permite ver Hoy o los últimos siete días de ejemplo, con ingresos, servicios, ticket promedio y distribución por profesional. Las cifras iniciales son ficticias y los nuevos servicios de la demo se agregan a ellas.

La sección de la fotografía fue reemplazada por cinco funciones y tres marcos de dispositivos. Ver CAPTURAS.md para colocar tus imágenes.

Si ya instalaste la versión anterior, reemplazá solamente index.html, assets/css/landing.css, assets/js/landing.js y assets/js/config.js. Si ya configuraste un video en config.js, conservá sus rutas al incorporar el bloque screenshots. El resto de los archivos, incluidos los favicons, permanece igual.
