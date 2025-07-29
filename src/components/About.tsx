import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const stats = [
    { number: "500+", label: "Empresas Atendidas" },
    { number: "15+", label: "Anos de Experiência" },
    { number: "98%", label: "Satisfação do Cliente" },
    { number: "50+", label: "Especialistas" }
  ];

  const values = [
    {
      title: "Excelência",
      description: "Comprometimento com a qualidade e resultados excepcionais em todos os projetos."
    },
    {
      title: "Inovação",
      description: "Soluções criativas e tecnológicas para os desafios empresariais modernos."
    },
    {
      title: "Transparência",
      description: "Comunicação clara e processos transparentes em todas as etapas."
    },
    {
      title: "Sustentabilidade",
      description: "Práticas responsáveis que geram valor para negócios e sociedade."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Sobre a
            <span className="bg-gradient-primary bg-clip-text text-transparent"> ConsultPro</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Somos uma consultoria especializada que combina expertise técnica, inovação e compromisso 
            com resultados para transformar a gestão empresarial e impulsionar o crescimento sustentável.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className="text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Mission */}
          <div className="animate-fade-in-up">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Nossa Missão
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Transformar organizações através de soluções integradas em Recursos Humanos, 
              Business Process Outsourcing e ESG, promovendo crescimento sustentável e 
              excelência operacional.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Acreditamos que o sucesso empresarial está intrinsecamente ligado ao 
              desenvolvimento das pessoas, otimização de processos e responsabilidade 
              socioambiental.
            </p>
          </div>

          {/* Vision */}
          <div className="animate-fade-in-up">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Nossa Visão
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Ser reconhecida como a principal referência em consultoria empresarial 
              integrada, liderando a transformação digital e sustentável das organizações.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Buscamos criar um ecossistema onde empresas prosperam através de práticas 
              responsáveis, pessoas engajadas e processos eficientes.
            </p>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            Nossos Valores
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card 
                key={value.title} 
                className="text-center p-6 hover:shadow-elegant transition-all duration-300 border-0 shadow-card bg-card/50 backdrop-blur-sm group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-8 h-8 bg-primary-foreground rounded-full" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-3">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;