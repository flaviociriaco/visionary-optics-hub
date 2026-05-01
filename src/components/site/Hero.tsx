import { ArrowRight, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-glasses.jpg";

export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-1.5 text-xs tracking-widest uppercase text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Coleção Premium 2026
          </span>
          <h1 className="mt-6 font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-primary">
            Onde o olhar <br />
            encontra a <span className="text-gradient-gold italic">elegância</span>.
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
            Armações exclusivas, lentes de alta tecnologia e um atendimento sob medida. Descubra a
            ótica que valoriza cada detalhe do seu estilo.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="https://wa.me/5511983434920?text=Olá!%20Quero%20agendar%20um%20exame."
              target="_blank"
              rel="noopener"
              className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 text-sm font-medium shadow-elegant hover:shadow-gold hover:-translate-y-0.5 transition-all"
            >
              Agendar Exame Gratuito
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#colecoes"
              className="text-sm font-medium text-primary border-b border-accent/50 hover:border-accent pb-1 transition-colors"
            >
              Ver coleções
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8 text-xs text-muted-foreground">
            <div>
              <div className="font-serif text-2xl text-primary">+15</div>anos de experiência
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <div className="font-serif text-2xl text-primary">+8k</div>clientes atendidos
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <div className="font-serif text-2xl text-primary">5★</div>avaliação Google
            </div>
          </div>
        </div>

        <div className="relative reveal">
          <div className="absolute -inset-8 bg-linear-to-tr from-accent/20 via-transparent to-primary/10 rounded-[3rem] blur-2xl" />
          <div className="relative rounded-4xl overflow-hidden shadow-elegant bg-cream">
            <img
              src={heroImg}
              alt="Óculos de luxo em armação acetato e dourado"
              width={1280}
              height={1280}
              className="w-full h-auto animate-float-slow"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 rounded-2xl bg-background shadow-card px-5 py-4 border border-border">
            <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-accent" />
            </div>
            <div className="text-xs">
              <div className="font-serif text-base text-primary">Lentes anti-reflexo</div>
              <div className="text-muted-foreground">incluídas em toda compra</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
