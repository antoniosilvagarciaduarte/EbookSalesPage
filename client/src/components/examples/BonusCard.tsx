import BonusCard from '../BonusCard';

export default function BonusCardExample() {
  const bonuses = [
    "Guia Rápido de Negociação de Dívidas",
    "Como Limpar Seu Nome em 30 Dias",
    "Estratégias de Uso do Cartão",
    "Checklist de Saúde Financeira",
    "Template de Orçamento Pessoal",
    "Glossário Financeiro Completo"
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto p-6">
      {bonuses.map((bonus, index) => (
        <BonusCard key={index} title={bonus} index={index} />
      ))}
    </div>
  );
}
