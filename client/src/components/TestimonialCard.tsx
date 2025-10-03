import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  quote: string;
  avatar?: string;
}

export default function TestimonialCard({ name, quote, avatar }: TestimonialCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <Card data-testid="card-testimonial">
      <CardContent className="p-6 space-y-4">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-ring text-ring" data-testid="icon-star" />
          ))}
        </div>

        <p className="text-foreground leading-relaxed italic" data-testid="text-testimonial-quote">
          "{quote}"
        </p>

        <div className="flex items-center gap-3 pt-2">
          <Avatar>
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback className="bg-ring/20 text-ring font-medium">{initials}</AvatarFallback>
          </Avatar>
          
          <div>
            <p className="font-medium text-foreground" data-testid="text-testimonial-name">
              {name}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
