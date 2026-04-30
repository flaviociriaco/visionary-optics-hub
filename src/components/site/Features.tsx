import { FlaskConical, Truck, ShieldCheck, Palette } from "lucide-react";

const features = [
  { icon: FlaskConical, title: "Laboratório Próprio", desc: "Lentes montadas com precisão sob nosso controle." },
  { icon: Truck, title: "Entrega Rápida", desc: "Seus óculos prontos em até 48 horas." },
  { icon: ShieldCheck, title: "Garantia de 1 Ano", desc: "Cobertura total contra defeitos de fabricação." },
  { icon: Palette, title: "Estilo Personalizado", desc: "Consultoria visagista para o seu rosto." },
];

export function Features() {
  return (
    <section id="diferenciais" className="py-24 md:py-32 bg-secondary/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="text-xs tracking-[0.2em] uppercase text-accent">Por que nos escolher</span>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl text-primary">Excelência em cada detalhe</h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="reveal group rounded-2xl bg-background p-8 border border-border hover:border-accent/40 hover:-translate-y-1 transition-all duration-500 shadow-card"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-accent group-hover:bg-accent group-hover:text-primary transition-colors duration-500">
                <f.icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <h3 className="mt-6 font-serif text-xl text-primary">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
