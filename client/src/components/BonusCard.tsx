import { Card, CardContent } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

interface BonusCardProps {
  title: string;
  index: number;
}

export default function BonusCard({ title, index }: BonusCardProps) {
  return (
    <Card className="hover-elevate transition-all" data-testid={`card-bonus-${index}`}>
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-20 h-28 bg-gradient-to-br from-primary to-ring rounded-lg flex items-center justify-center shadow-lg">
            <BookOpen className="w-10 h-10 text-white" />
          </div>
          
          <h4 className="text-sm font-medium text-foreground leading-tight" data-testid="text-bonus-title">
            {title}
          </h4>
        </div>
      </CardContent>
    </Card>
  );
}
