import { MessageCircle, Globe } from "lucide-react";
import { NAV_LINKS, APP_URL, WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      data-testid="footer"
      className="relative border-t border-[#1f1f1f] bg-[#0A0A0A] py-14"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-display font-extrabold text-lg tracking-tight">
              Barberos<span className="text-[#FF5500]">Control</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-zinc-500 leading-relaxed max-w-xs">
            Sistema de gestión para barberías, peluquerías y salones.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
            Links rápidos
          </h4>
          <ul className="mt-5 space-y-2">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-zinc-500 hover:text-[#FF5500] transition-colors"
                  data-testid={`footer-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
            Contacto
          </h4>
          <ul className="mt-5 space-y-3">
            <li>
              <a
                href={`https://${APP_URL.replace(/^https?:\/\//, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-[#FF5500] transition-colors"
                data-testid="footer-app-link"
              >
                <Globe className="h-4 w-4" />
                app.barberoscontrol.com
              </a>
            </li>
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-[#25D366] transition-colors"
                data-testid="footer-whatsapp-link"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp: {WHATSAPP_NUMBER}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pt-8 border-t border-[#1f1f1f] flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-zinc-600">
          © {year} BarberosControl. Todos los derechos reservados.
        </p>
        <p className="text-xs text-zinc-600">
          Hecho con <span className="text-[#FF5500]">♦</span> para barberías que quieren crecer.
        </p>
      </div>
    </footer>
  );
}
