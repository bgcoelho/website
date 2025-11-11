import { Navigation } from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ExternalLink, Loader2 } from "lucide-react";
import { useState } from "react";

const AlphaAnalytics = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInvoke = async () => {
    if (!input.trim()) return;
    
    setIsLoading(true);
    // Simulate API call - replace with actual implementation
    setTimeout(() => {
      setResult("Stock Analysis Complete.\n\nAlpha: +3.2% (Outperforming market)\nBeta: 1.15 (Slightly more volatile than market)\n\nKey Insights from SEC 10-K:\n• Strong revenue growth in core business segments\n• Expanding margins due to operational efficiency\n• Strategic investments in emerging technologies\n\nInvestment Recommendation: BUY with price target of $145 (+18% upside)");
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
            AI/ML-based Stock's Alpha Analytics & Predictor
          </h1>
          <p className="text-xl text-muted-foreground">
            AI based solution that performs firm analysis and provides concise investment advice, based on public return information determines alpha and beta, reviews SEC 10Ks and strategic/market analysis
          </p>
        </section>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Finance</Badge>
          <Badge variant="secondary">Investment Analysis</Badge>
          <Badge variant="secondary">AI/ML</Badge>
          <Badge variant="secondary">Alpha Prediction</Badge>
        </div>

        {/* Interactive Demo */}
        <section className="space-y-6">
          <h2 className="text-2xl font-light text-foreground">Try it out</h2>
          <Card className="bg-card border-border">
            <CardContent className="p-6 space-y-4">
              <Input
                placeholder="Enter stock ticker (e.g., AAPL)"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="uppercase"
              />
              <Button 
                onClick={handleInvoke} 
                disabled={isLoading || !input.trim()}
                className="w-full"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Analyzing Stock...
                  </>
                ) : (
                  "Analyze stock"
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
            href="https://github.com/bgcoelho/ai-alpha-analytics"
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

export default AlphaAnalytics;
