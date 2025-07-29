import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "#inicio" },
    { label: "Services", href: "#servicos" },
    { label: "Jobs", href: "#cases", hasDropdown: true },
    { label: "Page", href: "#sobre", hasDropdown: true },
    { label: "Blog", href: "#blog", hasDropdown: true },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mr-3">
              <div className="w-4 h-4 border-2 border-dark-foreground rounded-sm" />
            </div>
            <h2 className="text-xl font-bold text-dark-foreground">
              Consultoria Estratégica
            </h2>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div key={item.label} className="relative group">
                <a
                  href={item.href}
                  className={`text-dark-foreground hover:text-primary transition-colors duration-300 font-medium py-2 flex items-center ${
                    item.label === 'Home' ? 'text-primary border-b-2 border-primary' : ''
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <span className="ml-1 text-xs">▼</span>
                  )}
                </a>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button variant="default" size="sm" className="bg-primary hover:bg-primary-dark">
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-dark-foreground hover:text-primary focus:outline-none focus:text-primary"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-dark border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-dark-foreground hover:text-primary font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="px-3 py-2">
                <Button variant="default" size="sm" className="w-full bg-primary hover:bg-primary-dark">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;