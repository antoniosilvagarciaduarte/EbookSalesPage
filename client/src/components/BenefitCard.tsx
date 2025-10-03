import { LucideIcon } from "lucide-react";

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function BenefitCard({ icon: Icon, title, description }: BenefitCardProps) {
  return (
    <div className="flex flex-col items-center text-center space-y-4 p-6" data-testid="card-benefit">
      <div className="w-16 h-16 rounded-full bg-ring/20 flex items-center justify-center">
        <Icon className="w-8 h-8 text-ring" data-testid="icon-benefit" />
      </div>
      
      <h3 className="text-xl font-heading font-bold text-foreground" data-testid="text-benefit-title">
        {title}
      </h3>
      
      <p className="text-muted-foreground leading-relaxed" data-testid="text-benefit-description">
        {description}
      </p>
    </div>
  );
}
