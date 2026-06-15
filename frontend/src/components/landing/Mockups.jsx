import { motion } from "framer-motion";
import {
  Calendar,
  Users,
  Wallet,
  TrendingUp,
  Scissors,
  CreditCard,
  Wifi,
  CheckCircle2,
  BarChart3,
} from "lucide-react";

/**
 * Pure-CSS realistic mockups (notebook + phone) showing a fictional
 * BarberosControl dashboard. User will later swap with real screenshots,
 * but in the meantime this looks polished and on-brand.
 */
export default function Mockups() {
  return (
    <div className="relative w-full max-w-[640px] mx-auto" data-testid="hero-mockups">
      {/* Glow background */}
      <div className="absolute -inset-10 bg-[#FF5500]/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Notebook */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative float-anim"
      >
        {/* Screen */}
        <div className="relative rounded-t-2xl bg-[#1a1a1a] border border-[#2a2a2a] p-2 shadow-2xl">
          <div className="absolute top-2 left-1/2 -translate-x-1/2 h-1 w-16 bg-[#0a0a0a] rounded-full" />
          <div className="rounded-lg overflow-hidden bg-[#0e0e0e] aspect-[16/10]">
            <DashboardUI />
          </div>
        </div>
        {/* Base */}
        <div className="h-3 bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] rounded-b-[24px] mx-[-12px] relative">
          <div className="absolute top-1 left-1/2 -translate-x-1/2 h-1 w-20 bg-[#0a0a0a] rounded-full" />
        </div>
        <div className="h-1 bg-[#0a0a0a] mx-[-20px] rounded-b-lg" />
      </motion.div>

      {/* Phone */}
      <motion.div
        initial={{ opacity: 0, x: 40, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.9, delay: 0.65 }}
        className="absolute -right-2 sm:-right-6 -bottom-10 w-[140px] sm:w-[180px] float-anim-delay"
      >
        <div className="rounded-[28px] bg-[#1a1a1a] border border-[#2a2a2a] p-1.5 shadow-2xl">
          <div className="rounded-[22px] overflow-hidden bg-[#0e0e0e] aspect-[9/19]">
            <PhoneUI />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function DashboardUI() {
  return (
    <div className="h-full w-full flex">
      {/* Sidebar */}
      <div className="w-1/5 bg-[#0a0a0a] border-r border-[#1f1f1f] p-2 flex flex-col gap-2">
        <div className="flex items-center gap-1.5">
          <div className="h-4 w-4 rounded bg-[#FF5500]/20 border border-[#FF5500]/40 flex items-center justify-center">
            <Scissors className="h-2 w-2 text-[#FF5500]" />
          </div>
          <div className="h-2 w-10 bg-zinc-700 rounded" />
        </div>
        <div className="mt-2 space-y-1.5">
          {[Calendar, Users, Wallet, TrendingUp, BarChart3].map((Icon, i) => (
            <div
              key={i}
              className={`flex items-center gap-1.5 p-1 rounded ${
                i === 0 ? "bg-[#FF5500]/10 border border-[#FF5500]/30" : ""
              }`}
            >
              <Icon className={`h-2.5 w-2.5 ${i === 0 ? "text-[#FF5500]" : "text-zinc-600"}`} />
              <div className={`h-1 w-8 rounded ${i === 0 ? "bg-[#FF5500]/60" : "bg-zinc-700"}`} />
            </div>
          ))}
        </div>
      </div>
      {/* Main */}
      <div className="flex-1 p-3 space-y-2 overflow-hidden">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="h-2 w-20 bg-zinc-700 rounded" />
            <div className="h-1.5 w-32 bg-zinc-800 rounded" />
          </div>
          <div className="h-5 w-5 rounded-full bg-[#FF5500]/30" />
        </div>
        {/* Stat cards */}
        <div className="grid grid-cols-3 gap-1.5">
          {[
            { label: "Cortes hoy", val: "32", up: true },
            { label: "Caja", val: "$48k", up: true },
            { label: "Socios", val: "126", up: false },
          ].map((s, i) => (
            <div key={i} className="bg-[#141414] border border-[#1f1f1f] rounded p-1.5">
              <div className="h-1 w-8 bg-zinc-700 rounded mb-1" />
              <div className="text-[10px] font-bold text-white">{s.val}</div>
              <div className="text-[7px] text-[#FF5500]">{s.up ? "▲ 12%" : "▼ 3%"}</div>
            </div>
          ))}
        </div>
        {/* Chart */}
        <div className="bg-[#141414] border border-[#1f1f1f] rounded p-2">
          <div className="flex items-end justify-between h-12 gap-1">
            {[40, 55, 35, 70, 45, 80, 60, 90, 55, 75, 65, 85].map((h, i) => (
              <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: i % 2 === 0 ? "#FF5500" : "#FF550066" }} />
            ))}
          </div>
        </div>
        {/* List */}
        <div className="bg-[#141414] border border-[#1f1f1f] rounded p-1.5 space-y-1">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-1.5">
              <div className="h-3 w-3 rounded-full bg-zinc-800" />
              <div className="flex-1 space-y-0.5">
                <div className="h-1 w-16 bg-zinc-700 rounded" />
                <div className="h-0.5 w-10 bg-zinc-800 rounded" />
              </div>
              <CheckCircle2 className="h-2.5 w-2.5 text-[#FF5500]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PhoneUI() {
  return (
    <div className="h-full w-full flex flex-col bg-[#0a0a0a]">
      <div className="h-4 flex items-center justify-center">
        <div className="h-1 w-8 bg-[#1f1f1f] rounded-full" />
      </div>
      <div className="px-2 py-2 flex items-center justify-between">
        <div>
          <div className="h-1 w-10 bg-zinc-700 rounded mb-1" />
          <div className="h-2 w-14 bg-zinc-200 rounded" />
        </div>
        <div className="h-5 w-5 rounded-full bg-[#FF5500]/30 border border-[#FF5500]/50" />
      </div>
      <div className="px-2 space-y-1.5 flex-1">
        <div className="bg-[#141414] border border-[#FF5500]/30 rounded-lg p-2 glow-orange">
          <div className="h-1 w-6 bg-[#FF5500] rounded mb-1" />
          <div className="h-2 w-16 bg-white rounded mb-1" />
          <div className="h-1 w-12 bg-zinc-600 rounded" />
        </div>
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-[#141414] border border-[#1f1f1f] rounded-lg p-1.5 flex items-center gap-1.5">
            <div className="h-5 w-5 rounded-full bg-zinc-800 flex items-center justify-center">
              <Wifi className="h-2 w-2 text-[#FF5500]" />
            </div>
            <div className="flex-1 space-y-0.5">
              <div className="h-1 w-12 bg-zinc-700 rounded" />
              <div className="h-0.5 w-8 bg-zinc-800 rounded" />
            </div>
            <CreditCard className="h-2 w-2 text-zinc-600" />
          </div>
        ))}
      </div>
      <div className="px-2 pb-2">
        <div className="h-5 bg-[#FF5500] rounded-md flex items-center justify-center">
          <div className="h-1 w-10 bg-white/80 rounded" />
        </div>
      </div>
    </div>
  );
}
