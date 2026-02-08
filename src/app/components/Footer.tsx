import logoImage from "@/assets/fd95fcd217588548f855d61dc3ee1725e7da1a34.png";
import { Linkedin, Instagram } from "lucide-react";

export function Footer() {
  const services = [
    "Gestão de Cultura",
    "Liderança Transformacional",
    "Promova-se em 6 Meses",
    "Universidade Corporativa",
  ];

  const company = ["Sobre", "Método DNA", "Depoimentos", "Blog"];

  return (
    <footer className="w-full" style={{ backgroundColor: "#002130" }}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-8 sm:py-12 lg:py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 sm:mb-12 pb-8 sm:pb-12 border-b border-opacity-20" style={{ borderColor: "#3CC8C8" }}>
          {/* Logo and Tagline */}
          <div className="sm:col-span-2 text-center sm:text-left">
            <img 
              src={logoImage} 
              alt="Artemus Alachev" 
              className="w-64 sm:w-80 lg:w-96 h-auto mb-3 sm:mb-4 mx-auto sm:mx-0" 
            />
            <p
              className="mb-4 sm:mb-6"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(0.875rem, 1.5vw, 0.9375rem)",
                lineHeight: "1.6",
                color: "#DADADA",
              }}
            >
              Transformando culturas organizacionais e desenvolvendo líderes
              extraordinários
            </p>

            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4 justify-center sm:justify-start">
              <a
                href="#linkedin"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
                style={{ backgroundColor: "#2D5589" }}
              >
                <Linkedin size={20} style={{ color: "#FFFFFF" }} />
              </a>

              <a
                href="#instagram"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
                style={{ backgroundColor: "#2D5589" }}
              >
                <Instagram size={20} style={{ color: "#FFFFFF" }} />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className="text-center sm:text-left">
            <h4
              className="mb-3 sm:mb-4"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
                color: "#FFFFFF",
              }}
            >
              Serviços
            </h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={`#${service.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:underline"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "clamp(0.875rem, 1.5vw, 0.9375rem)",
                      color: "#DADADA",
                    }}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="text-center sm:text-left">
            <h4
              className="mb-3 sm:mb-4"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
                color: "#FFFFFF",
              }}
            >
              Empresa
            </h4>
            <ul className="space-y-2 mb-4 sm:mb-6">
              {company.map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:underline"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "clamp(0.875rem, 1.5vw, 0.9375rem)",
                      color: "#DADADA",
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <h4
              className="mb-3 sm:mb-4"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
                color: "#FFFFFF",
              }}
            >
              Contato
            </h4>
            <div className="space-y-2">
              <a
                href="mailto:artemus@alachev.com.br"
                className="block hover:underline"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(0.875rem, 1.5vw, 0.9375rem)",
                  color: "#DADADA",
                }}
              >
                artemus@alachev.com.br
              </a>
              <a
                href="tel:+5515997228600"
                className="block hover:underline"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(0.875rem, 1.5vw, 0.9375rem)",
                  color: "#DADADA",
                }}
              >
                +55 (15) 99722-8600
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-center sm:text-left order-2 sm:order-1"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(0.8125rem, 1.5vw, 0.875rem)",
              color: "#7D7D7D",
            }}
          >
            © 2025 Artemus Alachev. Todos os direitos reservados.
          </p>

          <button
            className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg transition-opacity hover:opacity-90 order-1 sm:order-2"
            style={{
              backgroundColor: "#FFCA38",
              color: "#002130",
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              fontSize: "clamp(0.9375rem, 1.5vw, 1rem)",
            }}
          >
            Agendar Consulta
          </button>
        </div>
      </div>
    </footer>
  );
}
