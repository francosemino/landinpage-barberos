import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Scissors } from "lucide-react";
import { NAV_LINKS, REGISTER_URL } from "@/lib/constants";
import { trackMetaLead } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-[#1f1f1f] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a
          href="#inicio"
          data-testid="navbar-logo"
          className="flex items-center gap-2 group"
        >
          <span className="font-display font-extrabold text-lg tracking-tight">
            Barberos<span className="text-[#FF5500]">Control</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`navbar-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-sm text-zinc-400 hover:text-white transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[#FF5500] hover:after:w-full after:transition-all"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackMetaLead("navbar_register_button")}
            data-testid="navbar-register-btn"
            className="hidden sm:inline-flex items-center justify-center rounded-xl bg-[#FF5500] hover:bg-[#FF7733] text-white text-sm font-semibold py-2.5 px-5 transition-all shadow-[0_0_25px_-8px_rgba(255,85,0,0.6)] hover:shadow-[0_0_35px_-8px_rgba(255,85,0,0.8)]"
          >
            Registrarme ahora
          </a>
          <button
            type="button"
            onClick={() => setOpen((s) => !s)}
            data-testid="navbar-mobile-toggle"
            aria-label="Abrir menú"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#262626] text-white"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-0 top-[64px] bg-[#0A0A0A]/98 backdrop-blur-xl"
            data-testid="navbar-mobile-menu"
          >
            <div className="flex flex-col gap-1 p-6">
              {NAV_LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="font-display text-3xl font-bold py-4 border-b border-[#1f1f1f] text-white hover:text-[#FF5500] transition-colors"
                  data-testid={`mobile-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {l.label}
                </motion.a>
              ))}
              <a
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackMetaLead("navbar_mobile_register_button");
                  setOpen(false);
                }}
                data-testid="mobile-register-btn"
                className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#FF5500] hover:bg-[#FF7733] text-white font-semibold py-4 px-6 transition-all"
              >
                Registrarme ahora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
