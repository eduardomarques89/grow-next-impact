const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: "Recursos Humanos", href: "#servicos" },
      { label: "BPO", href: "#servicos" },
      { label: "ESG", href: "#servicos" },
      { label: "Consultoria", href: "#servicos" }
    ],
    company: [
      { label: "Sobre Nós", href: "#sobre" },
      { label: "Nossa Equipe", href: "#sobre" },
      { label: "Cases de Sucesso", href: "#cases" },
      { label: "Carreiras", href: "#" }
    ],
    support: [
      { label: "Contato", href: "#contato" },
      { label: "FAQ", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Suporte", href: "#" }
    ]
  };

  const socialLinks = [
    { label: "LinkedIn", href: "#", icon: "💼" },
    { label: "Instagram", href: "#", icon: "📷" },
    { label: "Twitter", href: "#", icon: "🐦" },
    { label: "YouTube", href: "#", icon: "📺" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                ConsultPro
              </h3>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Transformando negócios através de soluções integradas em Recursos Humanos, 
                BPO e ESG. Comprometidos com a excelência e sustentabilidade empresarial.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a 
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-accent">
                Serviços
              </h4>
              <ul className="space-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      className="text-primary-foreground/70 hover:text-accent transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-accent">
                Empresa
              </h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      className="text-primary-foreground/70 hover:text-accent transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-accent">
                Suporte
              </h4>
              <ul className="space-y-2">
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      className="text-primary-foreground/70 hover:text-accent transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">
                Fique por dentro das novidades
              </h4>
              <p className="text-primary-foreground/70">
                Receba insights e tendências em gestão empresarial.
              </p>
            </div>
            <div className="flex w-full md:w-auto">
              <input 
                type="email"
                placeholder="Digite seu email"
                className="flex-1 md:w-80 px-4 py-2 rounded-l-md bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/50 focus:outline-none focus:bg-primary-foreground/20"
              />
              <button className="px-6 py-2 bg-accent text-accent-foreground rounded-r-md hover:bg-accent-light transition-colors duration-300 font-medium">
                Assinar
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
            <p>
              © {currentYear} ConsultPro. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-accent transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;