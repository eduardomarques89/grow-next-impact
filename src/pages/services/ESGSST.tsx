import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import esgImage from "@/assets/esg-services.jpg";

const ESGSST = () => {
  const services = [
    {
      icon: "🌱",
      title: "ESG Strategy",
      description: "Desenvolvimento de estratégias sustentáveis e responsabilidade social corporativa."
    },
    {
      icon: "🛡️",
      title: "Segurança do Trabalho",
      description: "Implementação de programas de segurança e saúde ocupacional."
    },
    {
      icon: "📋",
      title: "Compliance Ambiental",
      description: "Adequação às normas ambientais e certificações sustentáveis."
    },
    {
      icon: "🎯",
      title: "Auditoria ESG",
      description: "Avaliação e monitoramento de práticas ambientais, sociais e de governança."
    }
  ];

  const pillars = [
    {
      letter: "E",
      title: "Environmental",
      subtitle: "Ambiental",
      description: "Gestão de impactos ambientais, sustentabilidade e preservação dos recursos naturais."
    },
    {
      letter: "S", 
      title: "Social",
      subtitle: "Social",
      description: "Responsabilidade social, diversidade, inclusão e relacionamento com stakeholders."
    },
    {
      letter: "G",
      title: "Governance",
      subtitle: "Governança",
      description: "Práticas de governança corporativa, ética, transparência e compliance."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="relative py-32 bg-dark overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={esgImage} 
            alt="ESG/SST" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-dark/70" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="text-primary">ESG</span> & SST
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Implementamos práticas sustentáveis e programas de segurança do trabalho 
            para construir um futuro mais responsável e seguro.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Conhecer Soluções ESG
          </Button>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Os Pilares ESG
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Construindo negócios sustentáveis e responsáveis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <Card key={pillar.letter} className="p-8 hover:shadow-elegant transition-all duration-300">
                <CardContent className="pt-6 text-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl font-bold text-white">{pillar.letter}</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-lg text-primary mb-4">{pillar.subtitle}</p>
                  <p className="text-muted-foreground">
                    {pillar.description}
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
              Nossos Serviços
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="p-6 hover:shadow-elegant transition-all duration-300 bg-white/5 border-white/10">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white/70">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Construa um Futuro Sustentável
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Transforme sua empresa em uma organização mais responsável, sustentável e preparada para o futuro.
          </p>
          <Button variant="secondary" size="lg">
            Iniciar Jornada ESG
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ESGSST;