import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Products } from "@/components/site/Products";
import { Features } from "@/components/site/Features";
import { Testimonials } from "@/components/site/Testimonials";
import { Footer } from "@/components/site/Footer";
import { WhatsappFab } from "@/components/site/WhatsappFab";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Ótica GuaruluxÓtica — Óculos de luxo e lentes premium em Guarulhos" },
      {
        name: "description",
        content:
          "Ótica premium em Guarulhos com armações exclusivas, lentes de tecnologia e laboratório próprio. Agende seu exame de vista pelo WhatsApp.",
      },
      { property: "og:title", content: "Ótica GuaruluxÓtica — Elegância para o seu olhar" },
      {
        property: "og:description",
        content:
          "Coleções selecionadas, lentes premium e atendimento personalizado em Guarulhos, SP.",
      },
    ],
  }),
});

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Products />
        <Features />
        <Testimonials />
      </main>
      <Footer />
      <WhatsappFab />
    </div>
  );
}
