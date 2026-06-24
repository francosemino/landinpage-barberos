import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import Mockups from "./Mockups";
import { REGISTER_URL, PROMO_CODE } from "@/lib/constants";
import { trackMetaLead } from "@/lib/utils";

export default function Hero() {
  const trackRegisterClick = () => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead", {
        content_name: "hero_register_button",
      });

      window.fbq("track", "StartTrial", {
        content_name: "hero_register_button",
        value: 0,
        currency: "ARS",
      });
    }
  };

  return (
    <section
      id="inicio"
      data-testid="hero-section"
      className="relative pt-28 md:pt-36 pb-16 md:pb-28 overflow-hidden grain bg-orange-radial"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-[#FF5500]/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#FF5500]/30 bg-[#FF5500]/10 px-4 py-1.5 text-xs font-semibold text-[#FF7733] uppercase tracking-wider"
              data-testid="hero-promo-badge"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Código {PROMO_CODE} · Primer mes gratis
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display mt-6 text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.02]"
              data-testid="hero-title"
            >
              Tu barbería.<br />
              Tu negocio.<br />
              <span className="text-[#FF5500] text-glow">En tus manos.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-6 text-base md:text-lg text-zinc-400 max-w-xl leading-relaxed"
              data-testid="hero-subtitle"
            >
              Administrá turnos, cortes, clientes, barberos, ganancias y socios desde un solo lugar.
              <span className="block mt-2 text-zinc-300">
                Probalo con el código <span className="text-[#FF5500] font-semibold">{PROMO_CODE}</span> y obtené tu primer mes gratis.
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <a
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackMetaLead("hero_register_button")}
                data-testid="hero-register-btn"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#FF5500] hover:bg-[#FF7733] text-white font-semibold py-4 px-7 transition-all shadow-[0_0_30px_-8px_rgba(255,85,0,0.7)] hover:shadow-[0_0_50px_-8px_rgba(255,85,0,0.9)] hover:-translate-y-0.5"
              >
                Registrarme ahora
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#funciones"
                data-testid="hero-demo-btn"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#141414] border border-[#262626] hover:border-[#FF5500]/60 text-white font-semibold py-4 px-7 transition-all"
              >
                <Play className="h-4 w-4 text-[#FF5500]" fill="currentColor" />
                Ver cómo funciona
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-10 flex items-center gap-6 text-xs text-zinc-500"
            >
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#FF5500] animate-pulse" />
                Sin instalación
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#FF5500] animate-pulse" />
                Cancelás cuando quieras
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#FF5500] animate-pulse" />
                Soporte por WhatsApp
              </div>
            </motion.div>
          </div>

          <div className="relative">
            <Mockups />
          </div>
        </div>
      </div>
    </section>
  );
}