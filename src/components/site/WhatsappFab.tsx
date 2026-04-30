import { MessageCircle } from "lucide-react";

export function WhatsappFab() {
  return (
    <a
      href="https://wa.me/5511999999999?text=Olá!%20Vim%20pelo%20site%20da%20Lumière%20Ótica."
      target="_blank"
      rel="noopener"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full text-white animate-pulse-ring hover:scale-110 transition-transform"
      style={{ backgroundColor: "var(--whatsapp)" }}
    >
      <MessageCircle className="h-7 w-7" strokeWidth={2} />
    </a>
  );
}
