import { useState, useEffect } from "react";
import { Menu, X, Eye, CalendarCheck } from "lucide-react";

const links = [
  { href: "#colecoes", label: "Coleções" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 glass">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 md:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 text-primary">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Eye className="h-5 w-5" strokeWidth={1.5} />
          </span>
          <span className="font-serif text-xl md:text-2xl tracking-tight">
            Lumière <span className="text-gradient-gold">Ótica</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-foreground/80 hover:text-foreground transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-accent hover:after:w-full after:transition-all after:duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="https://wa.me/5511999999999?text=Olá!%20Quero%20agendar%20um%20exame%20de%20vista."
          target="_blank"
          rel="noopener"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:bg-navy-deep transition-colors shadow-card"
        >
          <CalendarCheck className="h-4 w-4" />
          Agendar Exame
        </a>

        <button
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full text-primary"
        >
          <span className="relative h-5 w-5">
            <Menu className={`absolute inset-0 transition-all duration-300 ${open ? "opacity-0 rotate-90" : "opacity-100"}`} />
            <X className={`absolute inset-0 transition-all duration-300 ${open ? "opacity-100" : "opacity-0 -rotate-90"}`} />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-[max-height] duration-500 ease-out ${open ? "max-h-96" : "max-h-0"}`}>
        <div className="px-6 pb-6 pt-2 flex flex-col gap-4 bg-background/90 backdrop-blur-md border-t border-border">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-base text-foreground/90 py-1">
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-medium"
          >
            <CalendarCheck className="h-4 w-4" /> Agendar Exame
          </a>
        </div>
      </div>
    </header>
  );
}
