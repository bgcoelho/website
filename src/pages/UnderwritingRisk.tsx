import { Navigation } from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const UnderwritingRisk = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-6 py-16 space-y-12">
        {/* Header */}
        <section className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-light text-foreground tracking-tight">
            AI/LLM-based Insurance Underwriting Risk Decision Engine
          </h1>
          <p className="text-xl text-muted-foreground">
            AI-based insurance Underwriting (UWR) risk engine that uses user key information, enhanced with internal databases and public information to assess risk
          </p>
        </section>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Insurance Tech</Badge>
          <Badge variant="secondary">Risk Assessment</Badge>
          <Badge variant="secondary">AI/ML</Badge>
          <Badge variant="secondary">LLM</Badge>
        </div>

        {/* GitHub Link */}
        <section>
          <a
            href="https://github.com/bgcoelho/ai-uwr-risk-predictor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-lg hover:bg-secondary hover:border-primary transition-all group"
          >
            <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="font-medium text-foreground group-hover:text-primary transition-colors">View on GitHub</span>
          </a>
        </section>

        {/* Footer */}
        <footer className="pt-12 pb-8 text-center text-sm text-muted-foreground border-t border-border">
          <p>&copy; 2025 Bruno Graca Coelho</p>
        </footer>
      </main>
    </div>
  );
};

export default UnderwritingRisk;
