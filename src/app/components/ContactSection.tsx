import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to a backend
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="w-full" style={{ backgroundColor: "#FFFFFF" }}>
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
            Entre em Contato
          </h2>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              color: "#414141",
            }}
          >
            Estamos prontos para ajudar sua empresa a alcançar novos patamares
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left - Contact Info */}
          <div>
            <h3
              className="mb-6 sm:mb-8 text-center lg:text-left"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
                color: "#002130",
              }}
            >
              Informações de Contato
            </h3>

            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
              <div className="flex items-start gap-3 sm:gap-4">
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "#3CC8C8" }}
                >
                  <Mail size={20} style={{ color: "#002130" }} />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 600,
                      fontSize: "clamp(0.9375rem, 1.5vw, 1rem)",
                      color: "#002130",
                      marginBottom: "4px",
                    }}
                  >
                    Email
                  </div>
                  <a
                    href="mailto:artemus@alachev.com.br"
                    className="hover:underline"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "clamp(0.875rem, 1.5vw, 0.9375rem)",
                      color: "#2D5589",
                    }}
                  >
                    artemus@alachev.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "#3CC8C8" }}
                >
                  <Phone size={20} style={{ color: "#002130" }} />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 600,
                      fontSize: "clamp(0.9375rem, 1.5vw, 1rem)",
                      color: "#002130",
                      marginBottom: "4px",
                    }}
                  >
                    Telefone
                  </div>
                  <a
                    href="tel:+5515997228600"
                    className="hover:underline"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "clamp(0.875rem, 1.5vw, 0.9375rem)",
                      color: "#2D5589",
                    }}
                  >
                    +55 (15) 99722-8600
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "#3CC8C8" }}
                >
                  <MapPin size={20} style={{ color: "#002130" }} />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 600,
                      fontSize: "clamp(0.9375rem, 1.5vw, 1rem)",
                      color: "#002130",
                      marginBottom: "4px",
                    }}
                  >
                    Localização
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "clamp(0.875rem, 1.5vw, 0.9375rem)",
                      color: "#414141",
                    }}
                  >
                    Sorocaba, SP
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "#3CC8C8" }}
                >
                  <Clock size={20} style={{ color: "#002130" }} />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 600,
                      fontSize: "clamp(0.9375rem, 1.5vw, 1rem)",
                      color: "#002130",
                      marginBottom: "4px",
                    }}
                  >
                    Horário de Atendimento
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "clamp(0.875rem, 1.5vw, 0.9375rem)",
                      color: "#414141",
                    }}
                  >
                    Segunda a Sexta: 9h às 18h
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 600,
                    fontSize: "clamp(0.875rem, 1.5vw, 0.9375rem)",
                    color: "#002130",
                  }}
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "clamp(0.9375rem, 1.5vw, 1rem)",
                    border: "2px solid #E6E6E6",
                    outline: "none",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#2D5589")}
                  onBlur={(e) => (e.target.style.borderColor = "#E6E6E6")}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 600,
                    fontSize: "clamp(0.875rem, 1.5vw, 0.9375rem)",
                    color: "#002130",
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "clamp(0.9375rem, 1.5vw, 1rem)",
                    border: "2px solid #E6E6E6",
                    outline: "none",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#2D5589")}
                  onBlur={(e) => (e.target.style.borderColor = "#E6E6E6")}
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 600,
                    fontSize: "clamp(0.875rem, 1.5vw, 0.9375rem)",
                    color: "#002130",
                  }}
                >
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "clamp(0.9375rem, 1.5vw, 1rem)",
                    border: "2px solid #E6E6E6",
                    outline: "none",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#2D5589")}
                  onBlur={(e) => (e.target.style.borderColor = "#E6E6E6")}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="company"
                    className="block mb-2"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 600,
                      fontSize: "clamp(0.875rem, 1.5vw, 0.9375rem)",
                      color: "#002130",
                    }}
                  >
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "clamp(0.9375rem, 1.5vw, 1rem)",
                      border: "2px solid #E6E6E6",
                      outline: "none",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#2D5589")}
                    onBlur={(e) => (e.target.style.borderColor = "#E6E6E6")}
                  />
                </div>

                <div>
                  <label
                    htmlFor="role"
                    className="block mb-2"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 600,
                      fontSize: "clamp(0.875rem, 1.5vw, 0.9375rem)",
                      color: "#002130",
                    }}
                  >
                    Cargo
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "clamp(0.9375rem, 1.5vw, 1rem)",
                      border: "2px solid #E6E6E6",
                      outline: "none",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#2D5589")}
                    onBlur={(e) => (e.target.style.borderColor = "#E6E6E6")}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block mb-2"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 600,
                    fontSize: "clamp(0.875rem, 1.5vw, 0.9375rem)",
                    color: "#002130",
                  }}
                >
                  Serviço de Interesse
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "clamp(0.9375rem, 1.5vw, 1rem)",
                    border: "2px solid #E6E6E6",
                    outline: "none",
                    cursor: "pointer",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#2D5589")}
                  onBlur={(e) => (e.target.style.borderColor = "#E6E6E6")}
                >
                  <option value="">Selecione um serviço</option>
                  <option value="cultura">Gestão de Cultura Organizacional</option>
                  <option value="lideranca">Liderança Transformacional</option>
                  <option value="promova">Promova-se em 6 Meses</option>
                  <option value="universidade">Universidade Corporativa</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 600,
                    fontSize: "clamp(0.875rem, 1.5vw, 0.9375rem)",
                    color: "#002130",
                  }}
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg resize-none"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "clamp(0.9375rem, 1.5vw, 1rem)",
                    border: "2px solid #E6E6E6",
                    outline: "none",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#2D5589")}
                  onBlur={(e) => (e.target.style.borderColor = "#E6E6E6")}
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: "#2D5589",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
                }}
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}