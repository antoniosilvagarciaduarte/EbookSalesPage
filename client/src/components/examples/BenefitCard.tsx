import BenefitCard from '../BenefitCard';
import { Calendar, CheckSquare, TrendingUp } from 'lucide-react';

export default function BenefitCardExample() {
  return (
    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto p-6">
      <BenefitCard
        icon={Calendar}
        title="Plano de 90 Dias"
        description="Sistema completo e estruturado para aumentar seu score em 3 meses"
      />
      <BenefitCard
        icon={CheckSquare}
        title="Ferramentas Práticas"
        description="Checklists, planilhas e templates prontos para usar"
      />
      <BenefitCard
        icon={TrendingUp}
        title="Resultados Comprovados"
        description="Mais de 1.000 leitores já transformaram sua pontuação"
      />
    </div>
  );
}
