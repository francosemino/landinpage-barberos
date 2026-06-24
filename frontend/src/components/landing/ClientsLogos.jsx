import { motion } from "framer-motion";
import { Scissors } from "lucide-react";

/**
 * Logos reales (imágenes en /public/logos) + nombres ilustrativos (texto).
 * Para sumar más barberías reales, copiá la estructura `{ type: 'image', ... }`
 * y subí el archivo a /app/frontend/public/logos/.
 */
const clients = [
  {
    type: "image",
    src: "/logos/bongio.png",
    name: "Bongio Barber",
    filter: "brightness(1.4) contrast(1.05)",
    scale: 1.9,
  },
  {
    type: "image",
    src: "/logos/estilof.png",
    name: "Estilo F Peluqueros",
    filter: "brightness(1.25) contrast(1.2)",
    scale: 1.45,
  },
  {
    type: "image",
    src: "/logos/tril3x.png",
    name: "Tril3x Barbershop",
    filter: "brightness(1.25) contrast(1.2)",
    scale: 1.15,
  },
  {
    type: "text",
    name: "King's Barber Co.",
    font: "font-display font-semibold tracking-widest uppercase",
  },
];

function ClientLogo({ c }) {
  if (c.type === "image") {
    return (
      <div className="flex items-center justify-center px-8 md:px-12 py-3 shrink-0 group w-[240px] h-[90px]">
        <img
          src={c.src}
          alt={c.name}
          loading="lazy"
          className="h-[70px] w-[190px] object-contain opacity-85 group-hover:opacity-100 transition-opacity duration-300 bg-transparent"
          style={{
            mixBlendMode: c.blend || "normal",
            filter: c.filter || "brightness(1.15) contrast(1.1)",
            transform: `scale(${c.scale || 1})`,
          }}
        />
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center gap-3 px-8 md:px-12 py-3 shrink-0 group w-[240px] h-[90px]">
      <Scissors className="h-4 w-4 text-[#FF5500]/50 group-hover:text-[#FF5500] transition-colors" />
      <span
        className={`${c.font} text-xl md:text-2xl text-zinc-500 group-hover:text-white transition-colors whitespace-nowrap`}
      >
        {c.name}
      </span>
    </div>
  );
}

export default function ClientsLogos() {
  return (
    <section
      data-testid="clients-section"
      className="relative py-12 md:py-16 border-t border-[#171717] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">
            Barberías que ya confían en{" "}
            <span className="text-[#FF5500]">BarberosControl</span>
          </p>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative mt-8 md:mt-10">
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

        <div className="flex marquee-track w-max items-center">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center" aria-hidden={dup === 1}>
              {clients.map((c, i) => (
                <ClientLogo key={`${dup}-${i}`} c={c} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
