import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

interface PromptCardProps {
  title: string;
  tags: string[];
  body: string;
}

export const PromptCard = ({ title, tags, body }: PromptCardProps) => {
  return (
    <Card className="hover:shadow-md transition-all duration-300 bg-card border-border">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold text-primary mb-3">{title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap">
          {body}
        </p>
      </CardContent>
    </Card>
  );
};
