import { Navigation } from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ExternalLink, Loader2 } from "lucide-react";
import { useState } from "react";

const UnderwritingRisk = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInvoke = async () => {
    if (!input.trim()) return;
    
    setIsLoading(true);
    // Simulate API call - replace with actual implementation
    setTimeout(() => {
      setResult("Risk Assessment Complete.\n\nRisk Score: 67/100 (Medium Risk)\n\nKey Factors:\n• Credit history shows consistent payment patterns\n• Property location in moderate risk zone\n• Coverage amount within acceptable thresholds\n\nRecommendation: Approve with standard premium adjustment of +12%");
      setIsLoading(false);
    }, 2000);
  };

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

        {/* Interactive Demo */}
        <section className="space-y-6">
          <h2 className="text-2xl font-light text-foreground">Try it out</h2>
          <Card className="bg-card border-border">
            <CardContent className="p-6 space-y-4">
              <Textarea
                placeholder="Enter applicant information (name, age, location, coverage amount, etc.)..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="min-h-[120px]"
              />
              <Button 
                onClick={handleInvoke} 
                disabled={isLoading || !input.trim()}
                className="w-full"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Assessing Risk...
                  </>
                ) : (
                  "Assess Risk"
                )}
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Results */}
        {result && (
          <section className="space-y-6">
            <h2 className="text-2xl font-light text-foreground">Results</h2>
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <p className="text-base text-foreground leading-relaxed whitespace-pre-wrap">
                  {result}
                </p>
              </CardContent>
            </Card>
          </section>
        )}

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
