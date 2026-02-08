interface StepProps {
  number: string;
  title: string;
  description: string;
  isLast?: boolean;
}

function Step({ number, title, description, isLast }: StepProps) {
  return (
    <div className="flex gap-4 sm:gap-6">
      {/* Timeline */}
      <div className="flex flex-col items-center">
        {/* Number Circle */}
        <div
          className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shrink-0"
          style={{
            backgroundColor: "#EE4C3D",
            border: "4px solid rgba(238, 76, 61, 0.2)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
              color: "#FFFFFF",
            }}
          >
            {number}
          </span>
        </div>

        {/* Vertical Line */}
        {!isLast && (
          <div
            className="w-1 flex-1 mt-2"
            style={{
              backgroundColor: "rgba(60, 200, 200, 0.3)",
              minHeight: "60px",
            }}
          />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-8 sm:pb-12">
        <h3
          className="mb-2"
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 600,
            fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
            color: "#FFFFFF",
          }}
        >
          {title}
        </h3>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(0.9375rem, 1.5vw, 1rem)",
            lineHeight: "1.6",
            color: "#DADADA",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export function MethodSection() {
  const steps = [
    {
      number: "01",
      title: "Diagnóstico Inicial",
      description:
        "Realizamos uma análise profunda da cultura atual da empresa, identificando pontos fortes, oportunidades de melhoria e o contexto organizacional único.",
    },
    {
      number: "02",
      title: "Pesquisa de Percepção",
      description:
        "Coletamos insights de todos os níveis da organização através de entrevistas, questionários e dinâmicas para compreender a percepção real da cultura.",
    },
    {
      number: "03",
      title: "Análise e Definição de Valores",
      description:
        "Identificamos os valores autênticos que formam o DNA da empresa, aqueles que realmente guiam comportamentos e decisões no dia a dia.",
    },
    {
      number: "04",
      title: "Construção da Filosofia Empresarial",
      description:
        "Desenvolvemos missão, visão e valores alinhados com a essência da empresa, criando uma filosofia que inspira e direciona.",
    },
    {
      number: "05",
      title: "Plano de Educação e Comunicação",
      description:
        "Criamos estratégias de disseminação da nova cultura através de treinamentos, campanhas e rituais que engajam toda a organização.",
    },
    {
      number: "06",
      title: "Implementação e Acompanhamento",
      description:
        "Apoiamos a execução do plano com consultoria contínua, medição de resultados e ajustes necessários para garantir o sucesso da transformação.",
    },
  ];

  return (
    <section
      className="w-full"
      style={{ backgroundColor: "#002130", color: "#FFFFFF" }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-12 sm:py-16 lg:py-24">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 lg:mb-16 max-w-3xl text-center lg:text-left mx-auto lg:mx-0">
          <h2
            className="mb-3 sm:mb-4"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "clamp(2rem, 5vw, 3rem)",
              lineHeight: "1.2",
            }}
          >
            O Método DNA Organizacional
          </h2>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              color: "#DADADA",
              lineHeight: "1.6",
            }}
          >
            Uma metodologia revolucionária que identifica e potencializa o DNA
            único da sua empresa
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="mb-8 sm:mb-12">
          {steps.map((step, index) => (
            <Step
              key={index}
              {...step}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center lg:justify-start">
          <button
            className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-lg transition-opacity hover:opacity-90"
            style={{
              backgroundColor: "#FFCA38",
              color: "#002130",
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
            }}
          >
            Solicitar Avaliação Gratuita
          </button>
        </div>
      </div>
    </section>
  );
}