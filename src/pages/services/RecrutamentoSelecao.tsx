import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const RecrutamentoSelecao = () => {
  const services = [
    {
      icon: "🔍",
      title: "Recrutamento Executivo",
      description: "Busca especializada para cargos de liderança e alta gestão."
    },
    {
      icon: "🎯",
      title: "Seleção Técnica",
      description: "Processos seletivos para vagas com competências específicas."
    },
    {
      icon: "📋",
      title: "Assessment Center",
      description: "Avaliação comportamental e técnica através de dinâmicas."
    },
    {
      icon: "⚡",
      title: "Recrutamento Express",
      description: "Processo acelerado para preenchimento urgente de vagas."
    }
  ];

  const process = [
    { step: "01", title: "Briefing", desc: "Entendimento detalhado da vaga e perfil desejado" },
    { step: "02", title: "Sourcing", desc: "Busca ativa e mapeamento de candidatos qualificados" },
    { step: "03", title: "Seleção", desc: "Triagem, entrevistas e avaliações técnicas" },
    { step: "04", title: "Apresentação", desc: "Entrega de relatório com os melhores candidatos" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="relative py-32 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Recrutamento & <span className="text-primary">Seleção</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Encontramos os melhores talentos para sua empresa através de processos 
            seletivos eficientes e personalizados.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Abrir Vaga
          </Button>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Modalidades de Recrutamento
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="p-6 hover:shadow-elegant transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Nosso Processo
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-6xl font-bold text-primary mb-4">{item.step}</div>
                <h3 className="text-2xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Encontre o Talento Ideal
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Nossa expertise em recrutamento garante que você encontre exatamente o profissional que sua empresa precisa.
          </p>
          <Button variant="secondary" size="lg">
            Iniciar Processo Seletivo
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RecrutamentoSelecao;