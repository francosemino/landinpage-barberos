import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { REGISTER_URL, WHATSAPP_URL } from "@/lib/constants";
import { trackMetaLead } from "@/lib/utils";

export default function FinalCTA() {
  return (
    <section
      data-testid="final-cta-section"
      className="relative py-20 md:py-32 overflow-hidden border-t border-[#171717]"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FF5500]/15 blur-[150px] rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">
          Empezá a controlar tu barbería{" "}
          <span className="text-[#FF5500] text-glow">como un negocio profesional.</span>
        </h2>
        <p className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto">
          Probá BarberosControl y descubrí todo lo que podés mejorar desde el primer día.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackMetaLead("final_cta_register_button")}
            data-testid="final-register-btn"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#FF5500] hover:bg-[#FF7733] text-white font-semibold py-4 px-8 transition-all shadow-[0_0_40px_-8px_rgba(255,85,0,0.7)] hover:shadow-[0_0_60px_-8px_rgba(255,85,0,0.9)] hover:-translate-y-0.5"
          >
            Registrarme ahora
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="final-whatsapp-btn"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#141414] border border-[#262626] hover:border-[#25D366]/60 text-white font-semibold py-4 px-8 transition-all"
          >
            <MessageCircle className="h-4 w-4 text-[#25D366]" />
            Hablar por WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  );
}
