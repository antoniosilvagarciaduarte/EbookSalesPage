export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-card-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-heading font-bold text-foreground mb-4" data-testid="text-footer-brand">
              Score Master
            </h3>
            <p className="text-sm text-muted-foreground">
              Transforme seu score de crédito e conquiste suas metas financeiras.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {["Home", "Sobre", "Conteúdo", "Bônus"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-sm text-muted-foreground hover:text-ring transition-colors"
                    data-testid={`link-footer-${item.toLowerCase()}`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li data-testid="text-footer-email">contato@scoremaster.com.br</li>
              <li data-testid="text-footer-phone">(11) 98765-4321</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-ring transition-colors" data-testid="link-footer-privacy">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-ring transition-colors" data-testid="link-footer-terms">
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-card-border">
          <p className="text-xs text-center text-muted-foreground" data-testid="text-footer-disclaimer">
            © 2025 Score Master. Todos os direitos reservados. Os resultados podem variar de acordo com a situação financeira individual.
          </p>
        </div>
      </div>
    </footer>
  );
}
