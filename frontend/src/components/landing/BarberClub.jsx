import { motion } from "framer-motion";
import { Crown, Heart, TrendingUp, Users2, RefreshCcw, Sparkles } from "lucide-react";
import { REGISTER_URL } from "@/lib/constants";

const benefits = [
  { icon: Heart, label: "Fidelización real" },
  { icon: RefreshCcw, label: "Clientes que vuelven más" },
  { icon: Users2, label: "Control de socios" },
  { icon: Sparkles, label: "Mejor experiencia" },
  { icon: TrendingUp, label: "Ingresos recurrentes" },
];

export default function BarberClub() {
  return (
    <section
      id="barberclub"
      data-testid="barberclub-section"
      className="relative py-16 md:py-28 overflow-hidden border-t border-[#171717]"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjh8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBzaG9wJTIwZGFyayUyMG1vZGVybnxlbnwwfHx8fDE3ODEyMjg2MzB8MA&ixlib=rb-4.1.0&q=85')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/85 to-[#0A0A0A]/70" />
        <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-[#FF5500]/15 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#FF5500]">
            <Crown className="h-4 w-4" />
            BarberClub
          </span>
          <h2 className="font-display mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.05]">
            Convertí tu barbería en un{" "}
            <span className="text-[#FF5500]">BarberClub.</span>
          </h2>
          <p className="mt-5 text-base md:text-lg text-zinc-300 leading-relaxed">
            Creá socios, beneficios y membresías. La forma más simple de generar
            ingresos recurrentes.
          </p>
        </motion.div>

        <div className="mt-8 md:mt-10 flex flex-wrap gap-2.5">
          {benefits.map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#1f1f1f] bg-[#0f0f0f]/80 backdrop-blur px-4 py-2 hover:border-[#FF5500]/40 transition-all"
              data-testid={`barberclub-benefit-${i}`}
            >
              <b.icon className="h-3.5 w-3.5 text-[#FF5500]" />
              <span className="text-sm font-medium text-white">{b.label}</span>
            </motion.div>
          ))}
        </div>

        <motion.a
          href={REGISTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="barberclub-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-[#FF5500] hover:bg-[#FF7733] text-white font-semibold py-3.5 px-6 transition-all shadow-[0_0_30px_-8px_rgba(255,85,0,0.7)]"
        >
          Activar BarberClub
        </motion.a>
      </div>
    </section>
  );
}
