import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "Sobre", id: "sobre" },
    { label: "Conteúdo", id: "conteudo" },
    { label: "Bônus", id: "bonus" },
    { label: "Depoimentos", id: "depoimentos" },
    { label: "Comprar", id: "comprar" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-lg border-b border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 gap-4">
          <div className="flex-shrink-0">
            <h1 className="text-xl md:text-2xl font-heading font-bold text-primary" data-testid="text-logo">
              Score Master
            </h1>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                data-testid={`link-nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <Button
            onClick={() => scrollToSection("comprar")}
            className="hidden md:flex bg-ring hover:bg-primary text-white"
            data-testid="button-cta-header"
          >
            Comprar Agora
          </Button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-card-border" data-testid="nav-mobile-menu">
          <nav className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:bg-accent rounded-md"
                data-testid={`link-mobile-${item.id}`}
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("comprar")}
              className="w-full bg-ring hover:bg-primary text-white"
              data-testid="button-cta-mobile"
            >
              Comprar Agora
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
