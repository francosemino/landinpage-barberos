import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Registrás tu barbería",
    desc: "Configurás barberos, servicios y reglas en minutos.",
  },
  {
    n: "02",
    title: "Cargás turnos y cortes",
    desc: "Usás la agenda y registrás servicios, clientes y pagos.",
  },
  {
    n: "03",
    title: "Controlás todo",
    desc: "Ingresos, ganancias, socios y reportes en tiempo real.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      data-testid="how-section"
      className="relative py-16 md:py-28 border-t border-[#171717]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF5500]">
            Cómo funciona
          </span>
          <h2 className="font-display mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Tres pasos. <span className="text-[#FF5500]">Cero complicaciones.</span>
          </h2>
        </motion.div>

        <div className="mt-10 md:mt-14 grid md:grid-cols-3 gap-4 md:gap-6 relative">
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-[#FF5500]/40 to-transparent" />
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f] p-6 md:p-7 hover:border-[#FF5500]/40 hover:bg-[#131313] transition-all duration-300"
              data-testid={`step-${i + 1}`}
            >
              <div className="font-display text-4xl md:text-5xl font-extrabold text-[#FF5500]/20 leading-none">
                {s.n}
              </div>
              <h3 className="font-display mt-3 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-zinc-400 leading-relaxed text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
