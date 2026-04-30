import { Eye, Phone, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer id="contato" className="bg-navy-deep text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent text-primary">
                <Eye className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <span className="font-serif text-2xl">
                Ótica Guarulux<span className="text-gradient-gold">Ótica</span>
              </span>
            </div>
            <p className="mt-5 max-w-md text-sm text-primary-foreground/70 leading-relaxed">
              Há mais de 15 anos cuidando do seu olhar com produtos premium e atendimento
              personalizado.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Youtube].map((I, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Rede social"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 hover:bg-accent hover:text-primary hover:border-accent transition-colors"
                >
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg text-accent">Contato</h3>
            <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-accent" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-accent" />
                <span>contato@lumiereotica.com.br</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg text-accent">Endereço</h3>
            <div className="mt-5 flex items-start gap-3 text-sm text-primary-foreground/80">
              <MapPin className="h-4 w-4 mt-0.5 text-accent shrink-0" />
              <address className="not-italic leading-relaxed">
                Av. Salgado Filho, 1234
                <br />
                Centro — Guarulhos, SP
                <br />
                CEP 07115-000
              </address>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Ótica GuaruluxÓtica. Todos os direitos reservados.</p>
          <p>Feito com cuidado para você enxergar o melhor.</p>
        </div>
      </div>
    </footer>
  );
}
