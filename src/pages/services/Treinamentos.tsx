import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import trainingImage from "@/assets/leadership-communication.jpg";
import corporateTrainingImage from "@/assets/corporate-training.jpg";

const Treinamentos = () => {
  const courses = [
    {
      icon: "👔",
      title: "Liderança e Gestão",
      description: "Desenvolvimento de competências de liderança e gestão de equipes.",
      duration: "40h"
    },
    {
      icon: "💼",
      title: "Vendas e Negociação",
      description: "Técnicas avançadas de vendas e negociação empresarial.",
      duration: "32h"
    },
    {
      icon: "🎯",
      title: "Produtividade",
      description: "Metodologias para aumentar a produtividade pessoal e organizacional.",
      duration: "24h"
    },
    {
      icon: "🤝",
      title: "Atendimento ao Cliente",
      description: "Excelência no atendimento e relacionamento com clientes.",
      duration: "20h"
    }
  ];

  const modalities = [
    { icon: "🏢", title: "Presencial", desc: "Treinamentos realizados na sua empresa" },
    { icon: "💻", title: "Online", desc: "Capacitação através de plataforma digital" },
    { icon: "🔄", title: "Híbrido", desc: "Combinação de aulas presenciais e online" },
    { icon: "🎯", title: "In Company", desc: "Conteúdo personalizado para sua realidade" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="relative py-32 bg-dark overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={trainingImage} 
            alt="Treinamentos Corporativos" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-dark/70" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="text-primary">Treinamentos</span> Corporativos
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Desenvolvemos as competências da sua equipe através de treinamentos 
            práticos e personalizados para sua realidade empresarial.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Ver Catálogo de Cursos
          </Button>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Principais Treinamentos
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cursos desenvolvidos por especialistas para maximizar o potencial da sua equipe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course) => (
              <Card key={course.title} className="p-6 hover:shadow-elegant transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">{course.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {course.description}
                  </p>
                  <div className="text-primary font-semibold">
                    Carga horária: {course.duration}
                  </div>
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
              Modalidades de Ensino
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Flexibilidade para se adaptar à rotina da sua empresa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {modalities.map((modality) => (
              <div key={modality.title} className="text-center">
                <div className="text-6xl mb-4">{modality.icon}</div>
                <h3 className="text-2xl font-semibold text-white mb-3">{modality.title}</h3>
                <p className="text-white/70">{modality.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Invista no Conhecimento
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Capacite sua equipe e veja os resultados na produtividade e satisfação dos colaboradores.
          </p>
          <Button variant="secondary" size="lg">
            Solicitar Proposta
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Treinamentos;