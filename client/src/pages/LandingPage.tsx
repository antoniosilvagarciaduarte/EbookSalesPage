import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitCard from "@/components/BenefitCard";
import PricingCard from "@/components/PricingCard";
import BonusCard from "@/components/BonusCard";
import TestimonialCard from "@/components/TestimonialCard";
import GuaranteeSection from "@/components/GuaranteeSection";
import Footer from "@/components/Footer";
import { Calendar, CheckSquare, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import chartImage from "@assets/stock_images/financial_growth_cha_5050d652.jpg";
import avatar1 from "@assets/stock_images/professional_brazili_a17a3000.jpg";
import avatar2 from "@assets/stock_images/professional_brazili_31a4f30d.jpg";
import avatar3 from "@assets/stock_images/professional_brazili_af19c1e8.jpg";

export default function LandingPage() {
  const benefits = [
    {
      icon: Calendar,
      title: "Plano de 90 Dias",
      description: "Sistema completo e estruturado para aumentar seu score em 3 meses seguindo estratégias comprovadas.",
    },
    {
      icon: CheckSquare,
      title: "Ferramentas Práticas",
      description: "Checklists, planilhas e templates prontos para usar imediatamente no seu dia a dia.",
    },
    {
      icon: TrendingUp,
      title: "Resultados Comprovados",
      description: "Mais de 1.000 leitores já transformaram sua pontuação e conquistaram o crédito que merecem.",
    },
  ];

  const bonuses = [
    "Guia Rápido de Negociação de Dívidas",
    "Como Limpar Seu Nome em 30 Dias",
    "Estratégias de Uso do Cartão",
    "Checklist de Saúde Financeira",
    "Template de Orçamento Pessoal",
    "Glossário Financeiro Completo",
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      quote: "Meu score aumentou 150 pontos em 2 meses! Consegui financiar meu carro dos sonhos.",
      avatar: avatar1,
    },
    {
      name: "João Santos",
      quote: "Material excelente e muito prático. Já estou vendo resultados reais e mudanças positivas.",
      avatar: avatar2,
    },
    {
      name: "Ana Costa",
      quote: "Finalmente entendi como funciona o sistema de crédito. Valeu muito a pena o investimento!",
      avatar: avatar3,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <HeroSection />

      <section id="sobre" className="py-16 md:py-20 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4" data-testid="text-about-title">
              Sobre o Produto
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-about-description">
              Um guia completo com plano de 90 dias para aumentar seu score no Serasa, acompanhado de 6 mini-eBooks bônus com estratégias específicas para acelerar seus resultados.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} {...benefit} />
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src={chartImage}
                alt="Gráfico de crescimento financeiro"
                className="rounded-2xl shadow-xl w-full"
                data-testid="img-about-mockup"
              />
            </div>
            <div className="space-y-6">
              <Badge className="bg-ring/20 text-ring border-ring" data-testid="badge-social-proof">
                Mais de 1.000 leitores já transformaram sua pontuação
              </Badge>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                Sistema Completo e Comprovado
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-ring/20 flex items-center justify-center mt-0.5">
                    <CheckSquare className="w-4 h-4 text-ring" />
                  </div>
                  <span className="text-foreground">Plano de 90 dias para aumentar seu score gradualmente</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-ring/20 flex items-center justify-center mt-0.5">
                    <CheckSquare className="w-4 h-4 text-ring" />
                  </div>
                  <span className="text-foreground">Ferramentas e checklists práticos para uso imediato</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-ring/20 flex items-center justify-center mt-0.5">
                    <CheckSquare className="w-4 h-4 text-ring" />
                  </div>
                  <span className="text-foreground">Mini-eBooks bônus para acelerar resultados</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="conteudo" className="py-16 md:py-20 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4" data-testid="text-content-title">
              O Que Você Vai Aprender
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Conteúdo prático e objetivo para transformar seu score de crédito
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-card p-6 rounded-lg border border-card-border">
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">No eBook Principal</h3>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-ring">•</span>
                  <span>Como funciona o sistema de pontuação Serasa</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ring">•</span>
                  <span>Estratégias para aumentar seu score em 90 dias</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ring">•</span>
                  <span>Como negociar dívidas de forma eficaz</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ring">•</span>
                  <span>Uso inteligente do cartão de crédito</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ring">•</span>
                  <span>Ferramentas para controle financeiro</span>
                </li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg border border-card-border">
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">No Pacote Completo</h3>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-ring">•</span>
                  <span>Todo o conteúdo do eBook principal</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ring">•</span>
                  <span>6 mini-eBooks bônus especializados</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ring">•</span>
                  <span>Templates e planilhas extras</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ring">•</span>
                  <span>Checklists de acompanhamento</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ring">•</span>
                  <span>Glossário financeiro completo</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="bonus" className="py-16 md:py-20 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4" data-testid="text-bonus-title">
              Bônus Exclusivos
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              6 mini-eBooks para turbinar seus resultados
            </p>
            <div className="inline-block">
              <p className="text-sm text-muted-foreground mb-2">Valor Real do Pacote Completo:</p>
              <p className="text-2xl text-muted-foreground line-through mb-1" data-testid="text-original-value">
                R$297,00
              </p>
              <p className="text-sm font-medium text-ring">
                Disponível hoje por apenas R$39,99
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {bonuses.map((bonus, index) => (
              <BonusCard key={index} title={bonus} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="comprar" className="py-16 md:py-20 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4" data-testid="text-pricing-section-title">
              Escolha Seu Plano
            </h2>
            <p className="text-lg text-muted-foreground">
              Invista no seu futuro financeiro hoje mesmo
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <PricingCard
              title="eBook: Transforme Seu Score"
              price="R$19,99"
              features={[
                "Plano completo de 90 dias",
                "Guia passo a passo testado",
                "Checklists e ferramentas práticas",
                "Acesso imediato após compra",
                "Garantia de 7 dias",
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
                "Templates e planilhas prontas",
                "Glossário financeiro completo",
                "Garantia de 7 dias",
                "Valor real: R$297",
              ]}
              ctaText="Comprar Pacote Completo"
              highlighted
            />
          </div>
        </div>
      </section>

      <section id="depoimentos" className="py-16 md:py-20 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4" data-testid="text-testimonials-title">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-lg text-muted-foreground">
              Histórias reais de pessoas que transformaram seu score
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <GuaranteeSection />

      <Footer />
    </div>
  );
}
