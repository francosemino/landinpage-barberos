import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mateo Álvarez",
    role: "Dueño · Mateo's Barber",
    city: "Rosario",
    img: "https://images.unsplash.com/photo-1507081323647-4d250478b919?w=200&h=200&fit=crop&crop=faces&q=80",
    quote:
      "Pasé de anotar turnos en una libreta a tener todo el negocio en el celular. Subí un 30% los turnos en dos meses.",
    metric: "+30% turnos",
  },
  {
    name: "Lucas Pereyra",
    role: "Socio · La Calle Barber Club",
    city: "Bahía Blanca",
    img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=200&h=200&fit=crop&crop=faces&q=80",
    quote:
      "La liquidación de cada barbero se calcula sola. Antes me llevaba dos horas, ahora son dos clicks.",
    metric: "−95% tiempo en cuentas",
  },
  {
    name: "Brian Sosa",
    role: "Dueño · Sosa Studio",
    city: "Mar del Plata",
    img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&fit=crop&crop=faces&q=80",
    quote:
      "El BarberClub me cambió el negocio. Hoy tengo socios fijos todos los meses, ingresos recurrentes.",
    metric: "+80 socios activos",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      data-testid="testimonials-section"
      className="relative py-16 md:py-28 border-t border-[#171717]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF5500]">
            Casos reales
          </span>
          <h2 className="font-display mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Barberías que ya{" "}
            <span className="text-[#FF5500]">crecen con BarberosControl.</span>
          </h2>
        </motion.div>

        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f] p-6 hover:border-[#FF5500]/40 hover:-translate-y-1 transition-all duration-300"
              data-testid={`testimonial-card-${i}`}
            >
              <Quote className="absolute top-4 right-4 h-6 w-6 text-[#FF5500]/20" />

              <div className="flex items-center gap-0.5 mb-4">
                {[0, 1, 2, 3, 4].map((s) => (
                  <Star key={s} className="h-3.5 w-3.5 fill-[#FF5500] text-[#FF5500]" />
                ))}
              </div>

              <p className="font-display text-base md:text-lg text-white leading-relaxed">
                “{t.quote}”
              </p>

              <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#FF5500]/10 border border-[#FF5500]/25 px-3 py-1 text-xs font-bold text-[#FF5500]">
                {t.metric}
              </div>

              <div className="mt-6 pt-5 border-t border-[#1f1f1f] flex items-center gap-3">
                <img
                  src={t.img}
                  alt={t.name}
                  className="h-10 w-10 rounded-full object-cover border border-[#262626]"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-zinc-500">
                    {t.role} · {t.city}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-zinc-600 italic">
          * Casos ilustrativos. Reemplazá fotos y datos por testimonios reales cuando quieras.
        </p>
      </div>
    </section>
  );
}
