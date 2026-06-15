# BarberosControl — Landing Page

## Original Problem Statement
Landing page profesional, moderna y premium para BarberosControl (sistema SaaS de gestión de barberías). Apuntada a dueños de barberías/peluquerías. Colores: fondo oscuro/negro/gris carbón + naranja intenso, texto blanco/gris. Estilo modern barber-shop, premium. Capturas reales del sistema se incorporan luego (placeholders por ahora). Todos los CTAs son externos: registro (`app.barberoscontrol.com/register`) y WhatsApp `2914675931`. Código promo: `MESPRUEBA` (primer mes gratis). Sin sección FAQ. Sin backend.

## Architecture
- **Frontend**: React 19 + Tailwind + framer-motion + lucide-react.
- **Backend**: No se utiliza (landing estática con links externos).
- **Tipografía**: Outfit (headings) + Manrope (body) vía Google Fonts.
- **Tema**: Dark con acento `#FF5500`, grain texture, radial glow, micro-animations.

## File Structure (Frontend)
```
/app/frontend/src/
├── App.js                          # Router con ruta única "/"
├── App.css                         # mínimo
├── index.css                       # Tema, fuentes, utilidades (grain, glow, float)
├── lib/constants.js                # URLs, WhatsApp, código promo, nav links
├── pages/Landing.jsx               # Composición de la landing
└── components/landing/
    ├── Navbar.jsx                  # sticky + glassmorphism + mobile drawer
    ├── Hero.jsx                    # título + promo badge + CTAs + mockups
    ├── Mockups.jsx                 # notebook + celular pure-CSS (placeholders)
    ├── Problem.jsx                 # 4 problem cards
    ├── Features.jsx                # 10 features (bento grid)
    ├── BarberClub.jsx              # sección con imagen + 5 beneficios
    ├── HowItWorks.jsx              # 3 pasos
    ├── Benefits.jsx                # 8 beneficios con check
    ├── Pricing.jsx                 # 2 planes editables (Premium, Salón Avanzado)
    ├── FinalCTA.jsx                # CTA final dual (registro + WhatsApp)
    ├── Footer.jsx                  # contacto + links rápidos
    └── FloatingWhatsApp.jsx        # botón flotante esquina inferior derecha
```

## User Personas
- Dueños de barberías, peluquerías, salones.
- Barberos independientes que buscan profesionalizar su negocio.

## Implementation Status (2026-06)
✅ Navbar sticky con cambio glassmorphism al hacer scroll + menú hamburguesa mobile  
✅ Hero con badge MESPRUEBA, título, subtítulo, CTAs duales y mockup notebook+celular  
✅ Sección Problema (4 dolores)  
✅ Sección Funciones (10 cards en bento grid)  
✅ Sección BarberClub destacada con imagen real (Unsplash) y 5 beneficios  
✅ Cómo Funciona (3 pasos)  
✅ Beneficios (8 puntos)  
✅ Precios — 2 planes con cards editables (precio y features como placeholders)  
✅ CTA final (registro + WhatsApp)  
✅ Footer  
✅ Botón flotante WhatsApp con mensaje pre-rellenado  
✅ Responsive desktop + mobile  
✅ Animaciones framer-motion (fade/slide on scroll, hover, float)  
✅ 100% tests (18/18) — iteration_1.json

## Backlog (P1/P2)
- **P1**: Reemplazar mockups CSS por capturas reales (dueño las pasará).
- **P1**: Completar precios reales y features de cada plan (Premium / Salón Avanzado).
- **P2**: Carrusel/tabs de capturas por módulo.
- **P2**: Página /privacidad y /terminos.
- **P2**: Open Graph + favicons personalizados (logo BarberosControl).
- **P2**: Analytics (GA4 / Meta Pixel) para medir conversión a registro.

## Next Tasks
1. Pasar capturas reales del sistema y reemplazar `<DashboardUI>` / `<PhoneUI>` en `Mockups.jsx`.
2. Editar `Pricing.jsx` con precios y features finales de cada plan.
3. Agregar logo SVG real al `Navbar.jsx` y `Footer.jsx` si existe uno.
