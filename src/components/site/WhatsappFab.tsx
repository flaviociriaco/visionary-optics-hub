export function WhatsappFab() {
  return (
    <a
      href="https://wa.me/5511983434920?text=Olá!%20Vim%20pelo%20site%20da%20Lumière%20Ótica."
      target="_blank"
      rel="noopener"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full text-white animate-pulse-ring hover:scale-110 transition-transform shadow-xl"
      style={{ backgroundColor: "#25D366" }} // Usei o verde oficial do WhatsApp aqui
    >
      {/* SVG oficial do WhatsApp para ficar profissional no seu portfólio */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        fill="currentColor"
        className="h-8 w-8"
      >
        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18s-8.8-2.8-12.4 2.8-14.1 18-17.2 21.6-6.3 4.1-11.7 1.4c-5.5-2.8-23.1-8.5-44-27.1-16.2-14.5-27.2-32.4-30.3-37.9s-.3-8.5 2.5-11.2c2.5-2.5 5.5-6.4 8.3-9.6s3.7-5.5 5.5-9.1.9-6.9-.5-9.6-12.4-29.9-17-40.8c-4.4-10.8-9.1-9.3-12.4-9.5H153c-3.7 0-9.6 1.4-14.7 6.9s-19.2 18.8-19.2 45.8 19.7 53.1 22.4 56.8c2.8 3.7 38.8 59.2 94.1 83.1 13.2 5.7 23.5 9.1 31.6 11.7 13.2 4.2 25.2 3.6 34.7 2.2 10.6-1.6 32.8-13.4 37.4-26.4s4.6-24.1 3.2-26.4-5.5-4.2-11-7z" />
      </svg>
    </a>
  );
}
