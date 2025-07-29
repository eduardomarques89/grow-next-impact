import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-consulting.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-primary/80" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Transformando
            <span className="block bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              Negócios
            </span>
            através de pessoas
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Soluções completas em Recursos Humanos, BPO e ESG para empresas que buscam excelência operacional e crescimento sustentável.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" className="animate-scale-in">
              Conhecer Serviços
            </Button>
            <Button variant="outline" size="xl" className="animate-scale-in bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
              Falar Conosco
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;