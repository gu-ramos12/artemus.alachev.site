import { Quote } from "lucide-react";

interface TestimonialCardProps {
  text: string;
  name: string;
  role: string;
  company: string;
}

function TestimonialCard({ text, name, role, company }: TestimonialCardProps) {
  return (
    <div
      className="rounded-2xl p-6 sm:p-8 h-full"
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid #E6E6E6",
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
      }}
    >
      {/* Quote Icon */}
      <div className="mb-3 sm:mb-4">
        <Quote size={40} style={{ color: "#3CC8C8", opacity: 0.5 }} />
      </div>

      {/* Testimonial Text */}
      <p
        className="mb-4 sm:mb-6"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "clamp(0.9375rem, 1.5vw, 1rem)",
          lineHeight: "1.7",
          color: "#414141",
        }}
      >
        {text}
      </p>

      {/* Author Info */}
      <div>
        <div
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 600,
            fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
            color: "#002130",
          }}
        >
          {name}
        </div>
        <div
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(0.875rem, 1.5vw, 0.9375rem)",
            color: "#7D7D7D",
          }}
        >
          {role}
        </div>
        <div
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(0.8125rem, 1.5vw, 0.875rem)",
            color: "#2D5589",
            fontWeight: 600,
          }}
        >
          {company}
        </div>
      </div>
    </div>
  );
}

interface MetricCardProps {
  value: string;
  label: string;
}

function MetricCard({ value, label }: MetricCardProps) {
  return (
    <div className="text-center">
      <div
        style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 700,
          fontSize: "clamp(2rem, 5vw, 3rem)",
          color: "#2D5589",
          marginBottom: "8px",
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
          color: "#414141",
        }}
      >
        {label}
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const testimonials = [
    {
      text: "A transformação que vivenciamos foi extraordinária. O Método DNA não apenas identificou nossa essência, mas nos guiou para uma cultura organizacional autêntica que gerou resultados impressionantes em produtividade e engajamento.",
      name: "Maria Silva",
      role: "CEO",
      company: "Rede Bom Lugar",
    },
    {
      text: "Artemus tem uma capacidade única de entender a alma da empresa. Seu trabalho transformou completamente nossa liderança e a forma como nos comunicamos. Os resultados foram além de nossas expectativas.",
      name: "Carlos Oliveira",
      role: "Diretor de RH",
      company: "Doce Veneno",
    },
    {
      text: "O programa 'Promova-se em 6 Meses' revolucionou minha carreira. As ferramentas e metodologias apresentadas por Artemus me deram a confiança e competência para assumir novos desafios de liderança.",
      name: "Ana Rodrigues",
      role: "Gerente Geral",
      company: "Excellence Automotive",
    },
  ];

  const metrics = [
    { value: "98%", label: "Taxa de Satisfação" },
    { value: "85%", label: "Aumento de Produtividade" },
    { value: "92%", label: "Melhoria no Engajamento" },
    { value: "6", label: "Meses Médios de ROI" },
  ];

  return (
    <section className="w-full relative overflow-hidden" style={{ backgroundColor: "#F0F0F5" }}>
      {/* Decorative circles */}
      <div
        className="absolute rounded-full hidden sm:block"
        style={{
          width: "clamp(200px, 30vw, 300px)",
          height: "clamp(200px, 30vw, 300px)",
          backgroundColor: "#3CC8C8",
          opacity: 0.1,
          top: "-100px",
          right: "-50px",
        }}
      />

      <div
        className="absolute rounded-full hidden sm:block"
        style={{
          width: "clamp(250px, 40vw, 400px)",
          height: "clamp(250px, 40vw, 400px)",
          backgroundColor: "#2D5589",
          opacity: 0.1,
          bottom: "-150px",
          left: "-100px",
        }}
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-12 sm:py-16 lg:py-24 relative z-10">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 lg:mb-16 text-center">
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
            O que Dizem Nossos Clientes
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>
      </div>
    </section>
  );
}