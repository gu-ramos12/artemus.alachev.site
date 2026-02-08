import { Users, TrendingUp, Target, GraduationCap, ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

function ServiceCard({ icon, title, items }: ServiceCardProps) {
  return (
    <div
      className="rounded-2xl p-6 sm:p-8 transition-shadow hover:shadow-xl"
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid #E6E6E6",
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
      }}
    >
      {/* Icon */}
      <div
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6"
        style={{ backgroundColor: "#3CC8C8" }}
      >
        <div style={{ color: "#002130" }}>{icon}</div>
      </div>

      {/* Title */}
      <h3
        className="mb-3 sm:mb-4"
        style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 600,
          fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
          color: "#002130",
        }}
      >
        {title}
      </h3>

      {/* Items List */}
      <ul className="mb-4 sm:mb-6 space-y-2">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-2"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(0.875rem, 1.5vw, 0.9375rem)",
              color: "#414141",
              lineHeight: "1.6",
            }}
          >
            <span style={{ color: "#2D5589", marginTop: "4px" }}>•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-opacity hover:opacity-90 flex items-center gap-2"
        style={{
          backgroundColor: "#FFCA38",
          color: "#002130",
          fontFamily: "var(--font-body)",
          fontWeight: 600,
          fontSize: "clamp(0.875rem, 1.5vw, 0.9375rem)",
        }}
      >
        Saiba Mais
        <ArrowRight size={18} />
      </button>
    </div>
  );
}

export function ServicesSection() {
  const services = [
    {
      icon: <Users size={32} />,
      title: "Gestão de Cultura Organizacional",
      items: [
        "Filosofia Organizacional",
        "Educação e Comportamento",
        "Disseminação da Nova Cultura",
        "Entrega de Valor via Processos",
        "Reconhecimentos e Recompensas",
      ],
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Liderança Transformacional",
      items: [
        "Ferramentas para Liderança",
        "Comunicação Pacificadora",
        "Desenvolvimento de Equipes",
        "Resolução de Conflitos",
      ],
    },
    {
      icon: <Target size={32} />,
      title: "Promova-se em 6 Meses",
      items: [
        "Versão Profissional",
        "Versão Empresarial",
        "Metodologia Exclusiva",
        "Resultados Garantidos",
      ],
    },
    {
      icon: <GraduationCap size={32} />,
      title: "Universidade Corporativa",
      items: [
        "Identificação de Necessidades",
        "Formação de Trilhas",
        "Produção de Treinamentos",
        "Formação de Instrutores",
      ],
    },
  ];

  return (
    <section
      className="w-full"
      style={{ backgroundColor: "#DADADA" }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-12 sm:py-16 lg:py-24">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 lg:mb-16 text-center lg:text-left">
          <h2
            className="mb-3 sm:mb-4"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "clamp(2rem, 5vw, 3rem)",
              lineHeight: "1.2",
              color: "#002130",
            }}
          >
            Serviços Principais
          </h2>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              color: "#414141",
            }}
          >
            Soluções completas para transformação organizacional
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}