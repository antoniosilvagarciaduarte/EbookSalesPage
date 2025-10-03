import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@assets/stock_images/happy_brazilian_pers_85d26692.jpg";

export default function HeroSection() {
  const handleBuyNow = () => {
    const element = document.getElementById("comprar");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadSample = () => {
    console.log("Download sample triggered");
  };

  return (
    <section id="hero" className="pt-24 pb-16 md:pt-32 md:pb-20 lg:pt-40 lg:pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-3 space-y-6">
            <Badge className="bg-destructive text-destructive-foreground" data-testid="badge-urgency">
              Oferta por Tempo Limitado
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight text-foreground" data-testid="text-hero-headline">
              Transforme seu Score de Crédito e Conquiste o Crédito que Você Merece!
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed" data-testid="text-hero-subheadline">
              Aprenda passo a passo como aumentar seu score no Serasa e alcançar suas metas financeiras sem complicação.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={handleBuyNow}
                className="bg-ring hover:bg-primary text-white text-lg py-6"
                data-testid="button-hero-buy"
              >
                Comprar Agora
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                onClick={handleDownloadSample}
                className="text-lg py-6 border-ring text-ring hover:bg-ring/10"
                data-testid="button-hero-sample"
              >
                Baixar Amostra Grátis
              </Button>
            </div>
          </div>

          <div className="lg:col-span-2">
            <img
              src={heroImage}
              alt="Pessoa sorrindo com cartão de crédito"
              className="rounded-2xl shadow-2xl w-full"
              data-testid="img-hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
