import logoImage from "@/assets/5d4320e1f3f1990cf4c6bd9a757a7d4db3651039.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const menuItems = [
    "Início",
    "Gestão de Cultura",
    "Liderança",
    "Promova-se em 6 Meses",
    "Universidade Corporativa",
    "Sobre",
    "Contato",
  ];

  return (
    <header className="w-full" style={{ backgroundColor: "#002130" }}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20">
        <div className="flex items-center justify-between py-3 sm:py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logoImage} alt="Artemus Alachev" className="h-10 sm:h-12 lg:h-16" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {menuItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-white text-sm hover:opacity-80 transition-opacity"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <button
              className="px-8 py-4 rounded-lg transition-opacity hover:opacity-90"
              style={{
                backgroundColor: "#FFCA38",
                color: "#002130",
                fontFamily: "var(--font-body)",
                fontWeight: 600,
              }}
            >
              Agendar Consulta
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4">
            <ul className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-white text-sm hover:opacity-80 transition-opacity block py-2"
                    style={{ fontFamily: "var(--font-body)" }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <button
                  className="w-full px-6 py-3 rounded-lg transition-opacity hover:opacity-90"
                  style={{
                    backgroundColor: "#FFCA38",
                    color: "#002130",
                    fontFamily: "var(--font-body)",
                    fontWeight: 600,
                  }}
                >
                  Agendar Consulta
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
