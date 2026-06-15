import { motion } from "framer-motion";
import {
  TrendingUp,
  Wallet,
  CalendarDays,
  Users,
  ArrowRight,
  MessageCircle,
  Scissors,
  CheckCircle2,
  BarChart3,
} from "lucide-react";
import { REGISTER_URL, WHATSAPP_URL } from "@/lib/constants";

const bullets = [
  {
    icon: TrendingUp,
    title: "Ingresos en tiempo real",
    desc: "Visualizá ventas del día, semana y mes al instante.",
  },
  {
    icon: Wallet,
    title: "Liquidación automática",
    desc: "Cuánto cobra cada barbero y cuánto te queda a vos, en un click.",
  },
  {
    icon: CalendarDays,
    title: "Agenda en vivo",
    desc: "Turnos confirmados, próximos y ocupación de cada barbero.",
  },
  {
    icon: Users,
    title: "Clientes y socios",
    desc: "Quién vuelve, quién es nuevo y cuántos socios activos tenés.",
  },
];

export default function DashboardShowcase() {
  return (
    <section
      id="reportes"
      data-testid="dashboard-showcase-section"
      className="relative py-16 md:py-28 border-t border-[#171717] overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-1/3 w-[500px] h-[500px] bg-[#FF5500]/8 blur-[140px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Mockup grande del dashboard */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative order-2 lg:order-1"
        >
          <div className="absolute -inset-6 bg-[#FF5500]/10 blur-[80px] rounded-full pointer-events-none" />
          <BigDashboardMockup />
        </motion.div>

        {/* Copy + bullets + CTAs */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="order-1 lg:order-2"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF5500]">
            Dashboard en tiempo real
          </span>
          <h2 className="font-display mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
            Todo tu negocio,{" "}
            <span className="text-[#FF5500]">en una sola pantalla.</span>
          </h2>
          <p className="mt-5 text-base md:text-lg text-zinc-400 leading-relaxed max-w-xl">
            Datos en vivo, decisiones rápidas. Dejá de adivinar cómo te fue el mes.
          </p>

          <div className="mt-8 space-y-4">
            {bullets.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                className="flex items-start gap-4"
                data-testid={`dashboard-bullet-${i}`}
              >
                <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-[#FF5500]/10 border border-[#FF5500]/25 flex items-center justify-center">
                  <b.icon className="h-4 w-4 text-[#FF5500]" />
                </div>
                <div>
                  <h3 className="font-display text-base md:text-lg font-semibold text-white">
                    {b.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="dashboard-explore-btn"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#FF5500] hover:bg-[#FF7733] text-white font-semibold py-3.5 px-6 transition-all shadow-[0_0_30px_-8px_rgba(255,85,0,0.7)] hover:shadow-[0_0_45px_-8px_rgba(255,85,0,0.9)]"
            >
              Explorar mi dashboard
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="dashboard-demo-btn"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#141414] border border-[#262626] hover:border-[#25D366]/60 text-white font-semibold py-3.5 px-6 transition-all"
            >
              <MessageCircle className="h-4 w-4 text-[#25D366]" />
              Agendar demo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/**
 * Mockup de dashboard más grande y detallado (placeholder editable).
 * Reemplazalo por una captura real cuando la tengas.
 */
function BigDashboardMockup() {
  return (
    <div className="relative rounded-2xl bg-[#1a1a1a] border border-[#2a2a2a] p-2 shadow-2xl">
      {/* Browser bar */}
      <div className="flex items-center gap-1.5 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        <div className="ml-3 flex-1 max-w-[200px] h-5 rounded-md bg-[#0e0e0e] border border-[#222] flex items-center px-2">
          <span className="text-[9px] text-zinc-600">app.barberoscontrol.com</span>
        </div>
      </div>

      <div className="rounded-lg overflow-hidden bg-[#0a0a0a] aspect-[4/3] flex">
        {/* Sidebar */}
        <div className="w-[18%] bg-[#0e0e0e] border-r border-[#1a1a1a] p-2 flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5 px-1 py-1">
            <div className="text-[8px] font-bold">
              <span className="text-white">Barberos</span>
              <span className="text-[#FF5500]">Control</span>
            </div>
          </div>
          <div className="h-px bg-[#1a1a1a] my-1" />
          {[
            { l: "Dashboard", a: true },
            { l: "Agenda", a: false },
            { l: "Cortes", a: false },
            { l: "Clientes", a: false },
            { l: "Liquidación", a: false },
            { l: "BarberClub", a: false },
            { l: "Reportes", a: false },
            { l: "Caja", a: false },
          ].map((it, i) => (
            <div
              key={i}
              className={`flex items-center gap-1.5 px-1.5 py-1 rounded ${
                it.a ? "bg-[#FF5500]/10 border border-[#FF5500]/25" : ""
              }`}
            >
              <div className={`h-1.5 w-1.5 rounded-sm ${it.a ? "bg-[#FF5500]" : "bg-zinc-700"}`} />
              <span className={`text-[8px] ${it.a ? "text-white font-semibold" : "text-zinc-600"}`}>
                {it.l}
              </span>
            </div>
          ))}
        </div>

        {/* Main */}
        <div className="flex-1 p-3 space-y-2.5 overflow-hidden">
          {/* Topbar */}
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[10px] font-bold text-white">Resumen</div>
              <div className="text-[7px] text-zinc-500">Hoy · 12 dic 2025</div>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="h-4 px-1.5 rounded bg-[#FF5500] flex items-center">
                <span className="text-[7px] text-white font-bold">+ Nuevo turno</span>
              </div>
              <div className="h-5 w-5 rounded-full bg-zinc-800 border border-zinc-700" />
            </div>
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-4 gap-1.5">
            {[
              { l: "Cortes", v: "32", c: "+12%" },
              { l: "Caja", v: "$148k", c: "+8%" },
              { l: "Socios", v: "126", c: "+3%" },
              { l: "Ticket prom.", v: "$4.6k", c: "+5%" },
            ].map((k, i) => (
              <div
                key={i}
                className="bg-[#141414] border border-[#1f1f1f] rounded p-1.5 hover:border-[#FF5500]/30 transition-colors"
              >
                <div className="text-[6px] uppercase tracking-wider text-zinc-500">{k.l}</div>
                <div className="text-[11px] font-bold text-white mt-0.5">{k.v}</div>
                <div className="flex items-center gap-0.5 text-[6px] text-[#FF5500] font-semibold">
                  <TrendingUp className="h-1.5 w-1.5" />
                  {k.c}
                </div>
              </div>
            ))}
          </div>

          {/* Chart + Right */}
          <div className="grid grid-cols-3 gap-1.5">
            <div className="col-span-2 bg-[#141414] border border-[#1f1f1f] rounded p-2">
              <div className="flex items-center justify-between mb-1.5">
                <div className="text-[7px] font-semibold text-white">Ingresos · últimos 14 días</div>
                <BarChart3 className="h-2 w-2 text-[#FF5500]" />
              </div>
              {/* Line chart */}
              <div className="relative h-14">
                <svg viewBox="0 0 200 60" className="w-full h-full" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#FF5500" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#FF5500" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,45 L15,40 L30,42 L45,30 L60,32 L75,25 L90,28 L105,18 L120,22 L135,15 L150,20 L165,10 L180,14 L200,8 L200,60 L0,60 Z"
                    fill="url(#grad)"
                  />
                  <path
                    d="M0,45 L15,40 L30,42 L45,30 L60,32 L75,25 L90,28 L105,18 L120,22 L135,15 L150,20 L165,10 L180,14 L200,8"
                    stroke="#FF5500"
                    strokeWidth="1.2"
                    fill="none"
                  />
                </svg>
              </div>
            </div>
            <div className="bg-[#141414] border border-[#1f1f1f] rounded p-2">
              <div className="text-[7px] font-semibold text-white mb-1.5">Top barbero</div>
              <div className="flex items-center gap-1.5">
                <div className="h-5 w-5 rounded-full bg-gradient-to-br from-[#FF5500] to-[#FF7733]" />
                <div>
                  <div className="text-[7px] text-white font-bold">Mateo A.</div>
                  <div className="text-[6px] text-zinc-500">14 cortes</div>
                </div>
              </div>
              <div className="mt-2 space-y-1">
                <div className="h-1 rounded-full bg-[#1f1f1f] overflow-hidden">
                  <div className="h-full w-[80%] bg-[#FF5500] rounded-full" />
                </div>
                <div className="h-1 rounded-full bg-[#1f1f1f] overflow-hidden">
                  <div className="h-full w-[55%] bg-[#FF5500]/60 rounded-full" />
                </div>
                <div className="h-1 rounded-full bg-[#1f1f1f] overflow-hidden">
                  <div className="h-full w-[35%] bg-[#FF5500]/40 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Recent list */}
          <div className="bg-[#141414] border border-[#1f1f1f] rounded p-1.5 space-y-1">
            <div className="text-[7px] font-semibold text-white px-1 mb-0.5">Turnos de hoy</div>
            {[
              { c: "Tomás G.", t: "14:00", s: "Corte + Barba" },
              { c: "Ramiro V.", t: "14:30", s: "Corte clásico" },
              { c: "Diego F.", t: "15:00", s: "Color + Corte" },
            ].map((r, i) => (
              <div
                key={i}
                className="flex items-center gap-1.5 px-1 py-0.5 rounded hover:bg-[#1a1a1a]"
              >
                <div className="h-3 w-3 rounded-full bg-zinc-800 flex items-center justify-center">
                  <span className="text-[5px] text-zinc-500">{r.c[0]}</span>
                </div>
                <div className="flex-1">
                  <div className="text-[7px] text-white font-medium">{r.c}</div>
                  <div className="text-[6px] text-zinc-500">{r.s}</div>
                </div>
                <span className="text-[7px] text-[#FF5500] font-semibold">{r.t}</span>
                <CheckCircle2 className="h-2 w-2 text-[#FF5500]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
