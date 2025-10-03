import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  ctaText: string;
  highlighted?: boolean;
  onPurchase?: () => void;
}

export default function PricingCard({
  title,
  price,
  features,
  ctaText,
  highlighted = false,
  onPurchase,
}: PricingCardProps) {
  const handlePurchase = () => {
    console.log(`Purchase ${title} triggered`);
    onPurchase?.();
  };

  return (
    <Card
      className={`relative ${highlighted ? "border-ring shadow-xl" : ""}`}
      data-testid={`card-pricing-${title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge className="bg-ring text-white" data-testid="badge-popular">
            Mais Popular
          </Badge>
        </div>
      )}
      
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-2xl font-heading font-bold" data-testid="text-pricing-title">
          {title}
        </CardTitle>
        <CardDescription className="text-4xl font-heading font-bold text-foreground mt-4" data-testid="text-pricing-price">
          {price}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3" data-testid={`text-feature-${index}`}>
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-ring/20 flex items-center justify-center mt-0.5">
                <Check className="w-3 h-3 text-ring" />
              </div>
              <span className="text-sm text-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter>
        <Button
          className="w-full bg-ring hover:bg-primary text-white py-6"
          onClick={handlePurchase}
          data-testid="button-pricing-cta"
        >
          {ctaText}
        </Button>
      </CardFooter>
    </Card>
  );
}

import { Badge } from "@/components/ui/badge";
