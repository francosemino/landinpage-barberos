import { motion } from "framer-motion";
import { AlertTriangle, Calculator, UserMinus } from "lucide-react";

const items = [
  {
    icon: AlertTriangle,
    title: "Turnos desordenados",
    desc: "Mensajes mezclados en WhatsApp, papelitos perdidos y horarios que se pisan.",
  },
  {
    icon: Calculator,
    title: "Cuentas a mano",
    desc: "No sabés cuánto ganó cada barbero ni cuánto te queda a vos al final del mes.",
  },
  {
    icon: UserMinus,
    title: "Clientes que no vuelven",
    desc: "Sin historial ni seguimiento, perdés a los clientes que más facturaban.",
  },
];

export default function Problem() {
  return (
    <section
      id="problema"
      data-testid="problem-section"
      className="relative py-16 md:py-28 border-t border-[#171717]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >

          <h2 className="font-display mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            ¿Seguís manejando tu barbería con{" "}
            <span className="text-[#FF5500]">papel, WhatsApp y cuentas a mano?</span>
          </h2>
        </motion.div>

        <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f] p-6 hover:border-[#FF5500]/40 hover:bg-[#131313] transition-all duration-300"
              data-testid={`problem-card-${i}`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-11 w-11 rounded-xl bg-[#FF5500]/10 border border-[#FF5500]/20 flex items-center justify-center group-hover:bg-[#FF5500]/20 group-hover:scale-110 transition-all">
                  <item.icon className="h-5 w-5 text-[#FF5500]" />
                </div>
                <div>
                  <h3 className="font-display text-lg md:text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-zinc-400 leading-relaxed text-sm">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display mt-10 md:mt-12 text-center text-xl md:text-2xl font-semibold max-w-3xl mx-auto leading-snug"
        >
          BarberosControl <span className="text-[#FF5500]">centraliza todo</span> para que tengas
          más orden, más control y más tiempo.
        </motion.p>
      </div>
    </section>
  );
}
