import { Shield } from "lucide-react";

export default function GuaranteeSection() {
  return (
    <section className="py-16 md:py-20 bg-ring/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-ring/20 flex items-center justify-center">
            <Shield className="w-10 h-10 text-ring" data-testid="icon-guarantee" />
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4" data-testid="text-guarantee-title">
          Garantia de 7 Dias ou Seu Dinheiro de Volta
        </h2>

        <p className="text-lg text-muted-foreground mb-2" data-testid="text-guarantee-description">
          Se após 7 dias você não estiver satisfeito, devolvemos seu dinheiro sem burocracia.
        </p>

        <p className="text-base text-muted-foreground font-medium" data-testid="text-guarantee-subtitle">
          Sem perguntas, sem complicação. Risco zero para você.
        </p>
      </div>
    </section>
  );
}
