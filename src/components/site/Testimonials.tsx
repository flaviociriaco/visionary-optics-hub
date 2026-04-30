import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mariana Alves",
    role: "Cliente desde 2021",
    text: "Atendimento impecável! A consultoria de estilo me ajudou a escolher a armação perfeita para o meu rosto.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces",
  },
  {
    name: "Carlos Henrique",
    role: "Cliente desde 2019",
    text: "Lentes de altíssima qualidade e entrega muito rápida. Voltarei sempre que precisar de óculos novos.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces",
  },
  {
    name: "Beatriz Souza",
    role: "Cliente desde 2023",
    text: "Ambiente sofisticado e profissionais que realmente entendem do assunto. Recomendo de olhos fechados.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="text-xs tracking-[0.2em] uppercase text-accent">Depoimentos</span>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl text-primary">Histórias de quem enxerga melhor</h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className="reveal relative rounded-2xl bg-background border border-border p-8 shadow-card"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Quote className="absolute -top-4 left-6 h-10 w-10 text-accent fill-accent/20" strokeWidth={1} />
              <div className="flex gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 font-serif text-lg leading-relaxed text-primary italic">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  loading="lazy"
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-accent/30"
                />
                <div>
                  <div className="text-sm font-medium text-primary">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
