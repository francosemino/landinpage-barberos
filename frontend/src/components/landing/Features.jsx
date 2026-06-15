import { motion } from "framer-motion";
import {
  Scissors,
  CalendarDays,
  Smartphone,
  Wallet,
  Crown,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: CalendarDays,
    title: "Agenda + Turnos online",
    desc: "Calendario por barbero y reservas desde el celular del cliente, 24/7. Sin pisar horarios.",
    span: "md:col-span-2",
    accent: true,
  },
  {
    icon: Scissors,
    title: "Cortes y clientes",
    desc: "Cargá servicios, métodos de pago, historial y seguimiento de cada cliente.",
  },
  {
    icon: Wallet,
    title: "Ganancias y liquidación",
    desc: "Reglas de reparto, porcentajes y montos fijos. Sabés cuánto va a cada barbero.",
  },
  {
    icon: BarChart3,
    title: "Caja y reportes",
    desc: "Ingresos del día y del mes, productos vendidos y comparativas. Decisiones con datos.",
  },
  {
    icon: Crown,
    title: "BarberClub / Socios",
    desc: "Membresías y beneficios para tus clientes frecuentes. Ingresos recurrentes.",
  },
  {
    icon: Smartphone,
    title: "Multiusuario",
    desc: "Accesos para dueño, barberos y staff con permisos por rol.",
    span: "md:col-span-2",
  },
];

export default function Features() {
  return (
    <section
      id="funciones"
      data-testid="features-section"
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
            Funciones principales
          </span>
          <h2 className="font-display mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Todo tu negocio, <span className="text-[#FF5500]">en un solo lugar.</span>
          </h2>
          <p className="mt-5 text-zinc-400 text-base md:text-lg max-w-2xl">
            Las herramientas que necesitás para ordenar el caos y crecer.
          </p>
        </motion.div>

        <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className={`group relative rounded-2xl border ${
                f.accent
                  ? "border-[#FF5500]/40 bg-gradient-to-br from-[#1a0d05] to-[#0f0f0f]"
                  : "border-[#1f1f1f] bg-[#0f0f0f] hover:border-[#FF5500]/40"
              } p-6 hover:-translate-y-1 hover:bg-[#131313] transition-all duration-300 ${f.span || ""}`}
              data-testid={`feature-card-${i}`}
            >
              <div className="flex items-center justify-center h-11 w-11 rounded-xl bg-[#FF5500]/10 border border-[#FF5500]/25 group-hover:bg-[#FF5500]/20 group-hover:scale-110 transition-all">
                <f.icon className="h-5 w-5 text-[#FF5500]" />
              </div>
              <h3 className="font-display mt-5 text-xl font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-zinc-400 leading-relaxed text-sm">{f.desc}</p>
              {f.accent && (
                <span className="absolute top-5 right-5 text-[10px] font-bold uppercase tracking-wider bg-[#FF5500] text-white rounded-full px-2.5 py-1">
                  24/7
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
