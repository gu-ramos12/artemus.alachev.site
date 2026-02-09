import { Play } from "lucide-react";
import logoImage from "@/assets/815a60be8412315e0a9158b66cd5bcb588dfb0a5.png";

export function HeroSection() {
  return (
    <section
      className="w-full relative overflow-hidden"
      style={{ backgroundColor: "#F0F0F5" }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-12 sm:py-16 lg:py-24 relative">
        <div className="max-w-3xl mx-auto text-center">
          {/* Logo */}
          <img
            src={logoImage}
            alt="Artemus Alachev - Consultoria, Treinamento e Palestras"
            className="w-72 sm:w-96 lg:w-[28rem] h-auto mb-6 sm:mb-8 mx-auto"
          />

          <h1
            className="mb-4 sm:mb-6"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              lineHeight: "1.2",
              color: "#002130",
            }}
          >
            Transforme a Cultura da Sua Empresa. Desenvolva Líderes e Equipes
            Extraordinários.
          </h1>

          <p
            className="mb-6 sm:mb-10"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              lineHeight: "1.6",
              color: "#414141",
            }}
          >
            Idealizador do DNA Organizacional e Liderança Transformacional com
            mais de 30 anos de experiência ajudando empresas a alcançarem
            resultados excepcionais.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-16 justify-center">
            
              href="#metodo-dna"
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-opacity hover:opacity-90 inline-block"
              style={{
                backgroundColor: "#2D5589",
                color: "#FFFFFF",
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
              }}
            >
              Conheça o Método DNA
            </a>

            <button
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-opacity hover:opacity-90 flex items-center justify-center gap-2"
              style={{
                backgroundColor: "transparent",
                border: "2px solid #2D5589",
                color: "#2D5589",
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
              }}
            >
              <Play size={20} />
              Assista ao Vídeo
            </button>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-x-12 sm:gap-y-6">
            <div>
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                  color: "#2D5589",
                }}
              >
                500+
              </div>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)",
                  color: "#7D7D7D",
                }}
              >
                Líderes Formados
              </div>
            </div>

            <div>
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                  color: "#2D5589",
                }}
              >
                100+
              </div>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)",
                  color: "#7D7D7D",
                }}
              >
                Empresas Transformadas
              </div>
            </div>

            <div>
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                  color: "#2D5589",
                }}
              >
                98%
              </div>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)",
                  color: "#7D7D7D",
                }}
              >
                Taxa de Sucesso
              </div>
            </div>

            <div>
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                  color: "#2D5589",
                }}
              >
                30+
              </div>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)",
                  color: "#7D7D7D",
                }}
              >
                Anos de Experiência
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
