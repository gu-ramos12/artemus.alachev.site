import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";
import artemusPhoto from "@/assets/8e1824253d9ee1e962364ad4cede26976debabd5.png";

export function AboutSection() {
  return (
    <section
      className="w-full"
      style={{ backgroundColor: "#002130", color: "#FFFFFF" }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-12 sm:py-16 lg:py-24">
        {/* Section Title - Sempre no topo */}
        <h2
          className="mb-6 sm:mb-8 text-center lg:text-left"
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            fontSize: "clamp(2rem, 5vw, 3rem)",
            lineHeight: "1.2",
          }}
        >
          Sobre Artemus Alachev
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left - Image */}
          <div className="relative hidden lg:block">
            <div
              className="rounded-2xl sm:rounded-3xl overflow-hidden"
              style={{
                boxShadow: "0 4px 24px rgba(0, 0, 0, 0.3)",
              }}
            >
              <img
                src={artemusPhoto}
                alt="Artemus Alachev"
                className="w-full h-auto"
              />
            </div>

            {/* Decorative circle */}
            <div
              className="absolute rounded-full hidden sm:block"
              style={{
                width: "clamp(150px, 30vw, 250px)",
                height: "clamp(150px, 30vw, 250px)",
                backgroundColor: "#3CC8C8",
                opacity: 0.2,
                bottom: "-50px",
                right: "-50px",
                zIndex: -1,
              }}
            />
          </div>

          {/* Right - Content */}
          <div>
            {/* Image Mobile - Aparece após o título e antes da citação */}
            <div className="relative lg:hidden mb-6 sm:mb-8">
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  boxShadow: "0 4px 24px rgba(0, 0, 0, 0.3)",
                }}
              >
                <img
                  src={artemusPhoto}
                  alt="Artemus Alachev"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Quote */}
            <blockquote
              className="mb-6 sm:mb-8 pl-4 sm:pl-6 border-l-4"
              style={{
                borderColor: "#3CC8C8",
                fontFamily: "var(--font-heading)",
                fontStyle: "italic",
                fontSize: "clamp(1rem, 2vw, 1.25rem)",
                lineHeight: "1.6",
                color: "#DADADA",
              }}
            >
              "Eu acredito que o trabalho deve ser uma atividade realizadora e
              prazerosa, onde cada pessoa possa expressar seu máximo potencial e
              contribuir para um propósito maior."
            </blockquote>

            {/* Description */}
            <div
              className="mb-6 sm:mb-8 space-y-3 sm:space-y-4"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(0.9375rem, 1.5vw, 1rem)",
                lineHeight: "1.8",
                color: "#DADADA",
              }}
            >
              <p>
                Formado pela FATEC Sorocaba, com MBA pela FGV e especialização
                pela FAAP, Artemus Alachev é um dos principais especialistas em
                cultura organizacional e liderança transformacional do Brasil.
              </p>

              <p>
                Com mais de 30 anos de experiência, é o criador do revolucionário
                método <strong>DNA Organizacional</strong>, uma metodologia única
                que identifica e potencializa a essência única de cada empresa,
                transformando cultura e impulsionando resultados.
              </p>

              <p>
                Suas consultorias são conhecidas por alcançarem{" "}
                <strong style={{ color: "#FFCA38" }}>
                  redução de 50%+ no turnover
                </strong>{" "}
                e criarem um{" "}
                <strong style={{ color: "#FFCA38" }}>
                  posicionamento marcante no mercado
                </strong>
                .
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <Mail size={20} style={{ color: "#3CC8C8" }} />
                <a
                  href="mailto:artemus@alachev.com.br"
                  className="hover:underline"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
                    color: "#DADADA",
                  }}
                >
                  artemus@alachev.com.br
                </a>
              </div>

              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <Phone size={20} style={{ color: "#3CC8C8" }} />
                <a
                  href="tel:+5515997228600"
                  className="hover:underline"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
                    color: "#DADADA",
                  }}
                >
                  +55 (15) 99722-8600
                </a>
              </div>

              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <MapPin size={20} style={{ color: "#3CC8C8" }} />
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
                    color: "#DADADA",
                  }}
                >
                  Sorocaba, SP
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="#linkedin"
                className="p-3 rounded-lg transition-opacity hover:opacity-80"
                style={{ backgroundColor: "#2D5589" }}
              >
                <Linkedin size={24} style={{ color: "#FFFFFF" }} />
              </a>

              <a
                href="#instagram"
                className="p-3 rounded-lg transition-opacity hover:opacity-80"
                style={{ backgroundColor: "#2D5589" }}
              >
                <Instagram size={24} style={{ color: "#FFFFFF" }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
