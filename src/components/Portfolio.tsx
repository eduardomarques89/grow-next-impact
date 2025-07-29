import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: "Transformação Digital RH",
      company: "TechCorp Brasil",
      category: "Recursos Humanos",
      description: "Implementação completa de sistema HRIS para 5.000+ funcionários",
      image: "/lovable-uploads/8e1cb53c-64b5-4407-b765-01eeeabe4590.png",
      results: "85% redução no tempo de processos"
    },
    {
      title: "Programa ESG Corporativo",
      company: "GreenIndustries",
      category: "ESG & Sustentabilidade",
      description: "Desenvolvimento de estratégia ESG completa com certificação internacional",
      image: "/lovable-uploads/42e99f14-c476-47f1-834e-5e1c034fe6e8.png",
      results: "Certificação B-Corp obtida"
    },
    {
      title: "Outsourcing Financeiro",
      company: "RetailMax",
      category: "BPO",
      description: "Terceirização completa do departamento financeiro e contábil",
      image: "/lovable-uploads/bd21d597-fccd-4a81-9994-197ec6404c28.png",
      results: "40% redução de custos operacionais"
    },
    {
      title: "Programa de Diversidade",
      company: "Innovation Hub",
      category: "Recursos Humanos",
      description: "Implementação de políticas de diversidade e inclusão",
      image: "/lovable-uploads/3729814e-1de0-4ac9-92fe-abd5e00d409a.png",
      results: "60% aumento na diversidade"
    }
  ];

  const achievements = [
    { number: "500+", label: "Projetos Concluídos" },
    { number: "98%", label: "Taxa de Sucesso" },
    { number: "2.5M+", label: "Funcionários Impactados" },
    { number: "150+", label: "Empresas Atendidas" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="mb-6">
            <span className="text-primary text-lg font-medium">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Casos de Sucesso que
            <span className="block text-primary">Transformaram Empresas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Conheça alguns dos projetos que demonstram nossa capacidade de gerar 
            resultados excepcionais para nossos clientes.
          </p>
        </div>

        {/* Featured Case Study */}
        <div className="mb-20">
          <Card className="overflow-hidden hover:shadow-elegant transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-80 lg:h-auto">
                <img 
                  src={projects[0].image}
                  alt={projects[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent" />
                <div className="absolute top-6 left-6">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    Caso em Destaque
                  </span>
                </div>
              </div>
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="text-primary font-medium text-sm uppercase tracking-wide">
                    {projects[0].category}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  {projects[0].title}
                </h3>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  {projects[0].description}
                </p>
                <div className="mb-6">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {projects[0].results}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Cliente: {projects[0].company}
                  </div>
                </div>
                <Button variant="default" className="w-fit">
                  Ver Caso Completo
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.slice(1).map((project, index) => (
            <Card 
              key={project.title}
              className="overflow-hidden hover:shadow-elegant transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-2 py-1 rounded text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-lg font-bold text-primary">{project.results}</div>
                    <div className="text-xs text-muted-foreground">{project.company}</div>
                  </div>
                  <Button variant="link" size="sm" className="p-0 text-primary">
                    Ver Mais →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-foreground mb-12">
            Resultados que Falam por Si
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.label}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {achievement.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Pronto para Transformar Sua Empresa?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Junte-se a centenas de empresas que já transformaram seus resultados com nossas soluções.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg">
              Solicitar Proposta
            </Button>
            <Button variant="outline" size="lg">
              Ver Mais Casos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;