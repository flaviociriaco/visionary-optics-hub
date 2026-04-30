import { ArrowUpRight } from "lucide-react";
import solar from "@/assets/product-solar.jpg";
import grau from "@/assets/product-grau.jpg";
import tech from "@/assets/product-tech.jpg";

const items = [
  { img: solar, title: "Coleção Solar", desc: "Proteção UV e estilo para todas as estações." },
  { img: grau, title: "Grau Moderno", desc: "Armações leves para o uso diário com sofisticação." },
  { img: tech, title: "Lentes de Tecnologia", desc: "Filtro de luz azul, transitions e antirreflexo premium." },
];

export function Products() {
  return (
    <section id="colecoes" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl reveal">
          <span className="text-xs tracking-[0.2em] uppercase text-accent">Vitrine</span>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl text-primary">Coleções selecionadas a dedo</h2>
          <p className="mt-4 text-muted-foreground">Peças escolhidas por especialistas, das marcas mais desejadas do mundo.</p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {items.map((it, i) => (
            <a
              key={it.title}
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener"
              className="group relative reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-secondary shadow-card aspect-[4/5]">
                <img
                  src={it.img}
                  alt={it.title}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute top-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-background/90 text-primary opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
              <div className="mt-5">
                <h3 className="font-serif text-2xl text-primary">{it.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
