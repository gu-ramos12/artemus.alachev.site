import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "5515997228600"; // Formato internacional sem símbolos
  const message = "Olá! Gostaria de saber mais sobre os serviços de consultoria.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 group"
      aria-label="Contato via WhatsApp"
    >
      <div
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl"
        style={{
          backgroundColor: "#11A766",
        }}
      >
        <MessageCircle 
          size={28} 
          className="sm:w-8 sm:h-8" 
          style={{ color: "#FFFFFF" }} 
        />
      </div>

      {/* Tooltip - Desktop apenas */}
      <div
        className="hidden lg:block absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none"
      >
        <div
          className="px-4 py-2 rounded-lg shadow-lg"
          style={{
            backgroundColor: "#002130",
            fontFamily: "var(--font-body)",
            fontSize: "0.875rem",
            color: "#FFFFFF",
          }}
        >
          Fale conosco no WhatsApp
        </div>
        {/* Seta do tooltip */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0"
          style={{
            borderTop: "6px solid transparent",
            borderBottom: "6px solid transparent",
            borderLeft: "6px solid #002130",
          }}
        />
      </div>

      {/* Pulse animation */}
      <div
        className="absolute inset-0 rounded-full animate-ping opacity-75"
        style={{
          backgroundColor: "#11A766",
          animationDuration: "2s",
        }}
      />
    </a>
  );
}
