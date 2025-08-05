import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import consultoriaImage from "@/assets/hero-consulting.jpg";

const ConsultoriaEmpresarial = () => {
  const features = [
    {
      icon: "🎯",
      title: "Planejamento Estratégico",
      description: "Desenvolvimento de estratégias personalizadas para atingir seus objetivos de negócio."
    },
    {
      icon: "📊",
      title: "Análise de Mercado",
      description: "Estudos detalhados do mercado para identificar oportunidades e riscos."
    },
    {
      icon: "⚡",
      title: "Otimização de Processos",
      description: "Melhoria contínua dos processos internos para maior eficiência."
    },
    {
      icon: "💡",
      title: "Inovação Empresarial",
      description: "Implementação de soluções inovadoras para diferenciação competitiva."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-dark overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={consultoriaImage} 
            alt="Consultoria Empresarial" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-dark/70" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Consultoria <span className="text-primary">Empresarial</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Transformamos desafios em oportunidades através de soluções estratégicas 
            personalizadas para acelerar o crescimento do seu negócio.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Solicitar Consultoria
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Nossos Serviços de Consultoria
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Oferecemos uma gama completa de serviços para impulsionar seu negócio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={feature.title} className="p-6 hover:shadow-elegant transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Nosso Processo
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Metodologia comprovada para garantir resultados excepcionais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Diagnóstico", desc: "Análise completa da situação atual" },
              { step: "02", title: "Estratégia", desc: "Desenvolvimento de soluções personalizadas" },
              { step: "03", title: "Implementação", desc: "Execução e acompanhamento dos resultados" }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-6xl font-bold text-primary mb-4">{item.step}</div>
                <h3 className="text-2xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Pronto para Transformar seu Negócio?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Entre em contato conosco e descubra como nossa consultoria pode acelerar seus resultados.
          </p>
          <Button variant="secondary" size="lg">
            Falar com Consultor
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConsultoriaEmpresarial;