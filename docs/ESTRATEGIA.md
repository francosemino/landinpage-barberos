# Decisiones de diseño y conversión

## Investigación de referencia

Revisión del contenido público al 23/09/2026. Es una comparación de presentación y recorridos comerciales, no un estudio de cuota de mercado ni una medición de conversión de competidores.

| Referencia | Patrón observado | Aplicación en esta landing |
| --- | --- | --- |
| Booksy | Beneficio inicial, acceso a prueba, precio visible y explicación de puesta en marcha | Acceso directo al registro, precios en pesos y tres pasos de inicio |
| Fresha | Producto visible al inicio y opción de verlo en acción | Vista de producto y demo interactiva sin registro |
| AgendaPro para barberías | Presentación por necesidades del negocio: agenda, caja, comisiones y equipo | Mensajes sobre el trabajo diario de una barbería y su gestión |

Fuentes:
- https://biz.booksy.com/es-es
- https://www.fresha.com/es/for-business
- https://agendapro.com/cl/barberia/software-para-barberias

No se copiaron afirmaciones de crecimiento, reseñas ni números de esos competidores. No demuestran qué convertiría mejor en BarberosControl. Las decisiones propuestas deben medirse con tráfico propio.

## Posicionamiento

La propuesta se enfoca en la continuidad entre trabajo y administración: del servicio realizado al cobro y al control del día. Esto permite explicar el valor con una acción concreta, además de mostrar la agenda.

Se mantiene la identidad negra y naranja. La tipografía grande y el espaciado definen la jerarquía; las listas de operaciones reemplazan la repetición de tarjetas. Una sección clara introduce contraste y los marcos de dispositivos permiten agregar capturas reales. No se generaron fotografías ni testimonios artificiales.

## Recorrido

1. Entender qué es y qué resuelve.
2. Ver una interfaz y entrar a una demostración sin dejar datos.
3. Registrar un servicio de ejemplo y comprobar el resultado.
4. Identificar necesidades y plan.
5. Resolver objeciones y crear cuenta, con ayuda por WhatsApp como alternativa.

Los botones principales llevan a la URL de registro existente, en la misma pestaña. No se agregaron formularios de captación adicionales. No se hace pasar un clic por una cuenta creada.

## Evidencia y contenido pendiente

Se eliminaron testimonios que el HTML marcaba como reemplazables, puntuación 4.9 y 47 reseñas de ejemplo, enlaces vacíos y afirmaciones técnicas de seguridad no verificadas. Los logos suministrados permanecen, sin nuevos testimonios atribuidos.

La oferta comercial se conserva del archivo recibido; no se contrastó con pagos reales ni con el backend. Una grabación real de 60–75 segundos y, más adelante, una experiencia de un cliente con su autorización completarían la evidencia. Ver `VIDEO.md`.

## Cómo medir

El JavaScript emite eventos `bc:analytics` y, si ya existe `window.dataLayer`, también los agrega allí:

- `bc_cta_click`, con `placement`: intención de registro o contacto según la ubicación.
- `bc_demo_tab`, con `tab`: interacción con el recorrido.
- `bc_demo_service_registered`: registro simulado en la demo, NO en el producto.
- `bc_demo_reset`.
- `bc_video_open` y `bc_video_complete`, si incorporás una grabación.

No se insertó un ID inventado de Google Analytics o Meta ni se agregó un tracker externo. Para obtener datos, conectá estos eventos a tu herramienta actual. El ZIP original no contenía una integración de analítica identificable.

La conversión final debe medirse cuando se crea correctamente la cuenta en `app.barberoscontrol.com`, con la configuración correspondiente entre dominios/subdominios de tu herramienta. Compará sesiones con cuentas creadas, clics al registro y uso de demo; segmentá móvil/escritorio y fuente de tráfico. No interpretes clics o registros de ejemplo como clientes ganados.

## Pruebas iniciales sugeridas

Medí primero esta versión frente a la anterior manteniendo oferta y campañas equivalentes. Después cambiá una sola variable por prueba: mensaje principal o posición del video. No hay evidencia suficiente para prometer un aumento de conversiones antes de medir.
