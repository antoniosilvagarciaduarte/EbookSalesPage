import PricingCard from '../PricingCard';

export default function PricingCardExample() {
  return (
    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto p-6">
      <PricingCard
        title="eBook: Transforme Seu Score"
        price="R$19,99"
        features={[
          "Plano completo de 90 dias",
          "Guia passo a passo testado",
          "Checklists e ferramentas práticas",
          "Acesso imediato após compra",
        ]}
        ctaText="Comprar Agora"
      />
      
      <PricingCard
        title="Pacote Completo: Ebook + 6 Mini eBooks"
        price="R$39,99"
        features={[
          "eBook principal completo",
          "6 mini-eBooks bônus exclusivos",
          "Ferramentas extras de aceleração",
          "Suporte prioritário",
          "Valor real: R$297",
        ]}
        ctaText="Comprar Pacote Completo"
        highlighted
      />
    </div>
  );
}
