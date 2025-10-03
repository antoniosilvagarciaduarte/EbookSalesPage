import TestimonialCard from '../TestimonialCard';
import avatar1 from '@assets/stock_images/professional_brazili_a17a3000.jpg';
import avatar2 from '@assets/stock_images/professional_brazili_31a4f30d.jpg';
import avatar3 from '@assets/stock_images/professional_brazili_af19c1e8.jpg';

export default function TestimonialCardExample() {
  return (
    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto p-6">
      <TestimonialCard
        name="Maria Silva"
        quote="Meu score aumentou 150 pontos em 2 meses! Consegui financiar meu carro."
        avatar={avatar1}
      />
      <TestimonialCard
        name="João Santos"
        quote="Material excelente e muito prático. Já estou vendo resultados reais."
        avatar={avatar2}
      />
      <TestimonialCard
        name="Ana Costa"
        quote="Finalmente entendi como funciona o sistema de crédito. Valeu muito a pena!"
        avatar={avatar3}
      />
    </div>
  );
}
