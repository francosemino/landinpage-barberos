# Tu logo en la pestaña y en Google

Actualización: 23/09/2026. Se usan exactamente los archivos que enviaste, sin redibujar el logo.

## Qué quedó listo
- Favicon ICO original de 16×16 y PNG de 16×16, 32×32 y 192×192, declarados en el HTML.
- PNG de 192×192 como ícono de alta resolución rastreable para Google.
- Apple touch icon y manifest con tus PNG de 192 y 512.
- Logo visible del encabezado y pie, logo de Organization y previews Open Graph/Twitter actualizados.
- Logo grande en /logo.png y copia en /assets/images/logo.png.
- Canonical https://www.barberoscontrol.com/, robots.txt y sitemap.xml.
- Los antiguos icon-192.png e icon-512.png también contienen tus nuevos íconos para compatibilidad.

## Lo que tenés que hacer, paso a paso
1. Hacé una copia de tu landing actual. Descomprimí este ZIP y copiá su contenido a la carpeta que publicás como landing: index.html y assets deben conservar su ubicación. Conservá tus capturas y los enlaces de video que hayas configurado en assets/js/config.js. No reemplaces el frontend de app.barberoscontrol.com: este paquete es la landing.
2. Publicá los cambios con tu proceso habitual de hosting. Si lo publicás desde Git, subí los cambios y esperá que termine el despliegue. No alcanza con abrir localhost. Los archivos de íconos, robots.txt, sitemap.xml y site.webmanifest deben quedar en la raíz pública, al lado de index.html.
3. Si el hosting/CDN guarda versiones anteriores, purgá su caché. Abrí la web en incógnito para comprobar el ícono de la pestaña.
4. Abrí estas URLs: deben devolver los archivos reales sin iniciar sesión, sin error y sin mostrar el HTML de la landing en lugar de la imagen:
   - https://www.barberoscontrol.com/android-chrome-192x192.png
   - https://www.barberoscontrol.com/favicon.ico
   - https://www.barberoscontrol.com/logo.png
   - https://www.barberoscontrol.com/robots.txt
   - https://www.barberoscontrol.com/sitemap.xml
5. En el código fuente de la página publicada buscá android-chrome-192x192.png. Debe aparecer como rel="icon". Mantené la redirección de barberoscontrol.com a www.barberoscontrol.com. El hosting no debe bloquear Googlebot ni Googlebot-Image con reglas de robots, autenticación o desafíos del firewall.
6. Entrá a https://search.google.com/search-console/ y seleccioná la propiedad del dominio. Si todavía no existe, agregá la propiedad Dominio barberoscontrol.com y verificá el registro TXT que Google te indique en el proveedor DNS. Si ya está verificada, no repitas este paso.
7. En Inspección de URLs pegá https://www.barberoscontrol.com/. Pulsá Probar URL publicada. Si la prueba indica que se permite indexar, pulsá Solicitar indexación. Si detecta un bloqueo, resolvé la causa que indique antes de solicitarlo.
8. En Sitemaps enviá https://www.barberoscontrol.com/sitemap.xml si todavía no está enviado. Si ya figura correctamente, no necesitás borrarlo ni reenviarlo cada día.
9. Esperá el nuevo rastreo. Google indica que puede tardar de días a semanas. No cambies repetidamente el nombre del favicon ni solicites indexación a diario: no garantiza acelerar el proceso.

## Alcance
El ícono pequeño al lado del nombre del sitio es el favicon. El logo de Organization ayuda a identificar la marca. Open Graph/Twitter configura imágenes para servicios que leen esos metadatos; no obliga a Google a mostrar una foto grande o captura del sistema en el resultado. Google decide qué imágenes muestra y no garantiza siquiera el favicon aunque se cumplan sus pautas.

Este ZIP está preparado y validado localmente; no publica el sitio ni solicita indexación en tu cuenta. El subdominio app.barberoscontrol.com tiene su propia configuración de favicon y no se modifica con esta landing.

## Fuentes oficiales
- https://developers.google.com/search/docs/appearance/favicon-in-search
- https://developers.google.com/search/docs/appearance/structured-data/organization
- https://support.google.com/webmasters/answer/9012289
