import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { REGISTER_URL, PROMO_CODE } from "@/lib/constants";

/**
 * Pricing cards left as editable placeholders.
 * The user requested to leave sections where they can fill in
 * "what's included" and price for each plan.
 */
const plans = [
  {
    name: "Premium",
    tagline: "Ideal para barberias",
    price: "$27.000",
    period: "/ mes",
    features: [
      "Registro de servicios y ventas",
      "Agenda de turnos",
      "Caja y liquidacion",
      "BarberClub",
      "Reportes",
    ],
    cta: "Empezar prueba",
    highlight: false,
  },
  {
    name: "Salón Avanzado",
    tagline: "Ideal si tenes mas de una sucursal o una peluqueria",
    price: "$37.000",
    period: "/ mes",
    features: [
      "Todo lo del Plan Premium ",
      "Sucursales",
      "Servicio de Mujeres o Hombres ",
      "Confirmacion de turnos por Whatsapp",
      "Beneficios ilimitados",
    ],
    cta: "Empezar prueba",
    highlight: true,
  },
];

export default function Pricing() {
  return (
    <section
      id="precios"
      data-testid="pricing-section"
      className="relative py-16 md:py-28 border-t border-[#171717]"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF5500]/8 blur-[140px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF5500]">
            Precios
          </span>
          <h2 className="font-display mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Elegí el plan que se ajusta a{" "}
            <span className="text-[#FF5500]">tu barbería.</span>
          </h2>
          <p className="mt-5 text-zinc-400 text-lg">
            Usá el código{" "}
            <span className="text-[#FF5500] font-semibold">{PROMO_CODE}</span> al
            registrarte y obtené el primer mes gratis.
          </p>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative rounded-3xl p-8 md:p-10 transition-all duration-300 hover:-translate-y-1 ${
                p.highlight
                  ? "bg-gradient-to-br from-[#1a0d05] via-[#141414] to-[#0f0f0f] border border-[#FF5500]/50 glow-orange"
                  : "bg-[#0f0f0f] border border-[#1f1f1f] hover:border-[#FF5500]/30"
              }`}
              data-testid={`pricing-card-${p.name.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-[#FF5500] text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1.5">
                  <Sparkles className="h-3 w-3" />
                  Recomendado
                </div>
              )}

              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-2xl md:text-3xl font-bold">{p.name}</h3>
              </div>
              <p className="mt-2 text-zinc-400 text-sm">{p.tagline}</p>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-5xl md:text-6xl font-extrabold tracking-tight">
                  {p.price}
                </span>
                <span className="text-zinc-500 text-sm">{p.period}</span>
              </div>

              <div className="mt-8 h-px bg-[#1f1f1f]" />

              <ul className="mt-8 space-y-3">
                {p.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300">
                    <span
                      className={`flex-shrink-0 h-5 w-5 rounded-md flex items-center justify-center ${
                        p.highlight
                          ? "bg-[#FF5500] text-white"
                          : "bg-[#FF5500]/10 border border-[#FF5500]/25 text-[#FF5500]"
                      }`}
                    >
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="italic text-zinc-500">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`pricing-cta-${p.name.toLowerCase().replace(/\s+/g, "-")}`}
                className={`mt-10 inline-flex w-full items-center justify-center rounded-xl py-3.5 px-6 font-semibold transition-all ${
                  p.highlight
                    ? "bg-[#FF5500] hover:bg-[#FF7733] text-white shadow-[0_0_30px_-8px_rgba(255,85,0,0.7)]"
                    : "bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#FF5500] text-white"
                }`}
              >
                {p.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
