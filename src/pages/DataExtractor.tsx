import { Navigation } from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ExternalLink, Loader2, Upload, X } from "lucide-react";
import { useState } from "react";

const DataExtractor = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setUploadedFiles(prev => [...prev, ...files]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleInvoke = async () => {
    if (!input.trim()) return;
    
    setIsLoading(true);
    // Simulate API call - replace with actual implementation
    setTimeout(() => {
      setResult("Data Extraction Complete.\n\nExtracted Fields:\n• Policy Number: POL-2024-8765\n• Applicant Name: John Smith\n• Coverage Amount: $500,000\n• Effective Date: 2024-03-15\n• Premium: $2,400/year\n\nValidation Status: ✓ All fields match database records\nDiscrepancies Found: None");
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
            AI/LLM-based Data Extraction from Unstructured Documents
          </h1>
          <p className="text-xl text-muted-foreground">
            AI-based solution that reads email content/unstructured data from UWRs communications with back office support teams. Reconciles reviewed submission/bind data database data
          </p>
        </section>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Data Extraction</Badge>
          <Badge variant="secondary">NLP</Badge>
          <Badge variant="secondary">Document Processing</Badge>
          <Badge variant="secondary">LLM</Badge>
        </div>

        {/* Interactive Demo */}
        <section className="space-y-6">
          <h2 className="text-2xl font-light text-foreground">Try it out</h2>
          <Card className="bg-card border-border">
            <CardContent className="p-6 space-y-4">
              <Textarea
                placeholder="Describe what data you want to extract (e.g., policy numbers, names, dates, amounts, addresses...)"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="min-h-[120px]"
              />
              
              {/* File Upload Area */}
              <div className="space-y-3">
                <label htmlFor="file-upload" className="block text-sm font-medium text-muted-foreground">
                  Upload documents (PDFs, emails, images)
                </label>
                <div className="flex items-center gap-4">
                  <label
                    htmlFor="file-upload"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-8 border-2 border-dashed border-border rounded-lg hover:border-primary hover:bg-secondary/50 transition-all cursor-pointer"
                  >
                    <Upload className="w-5 h-5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      Click to upload or drag and drop
                    </span>
                    <input
                      id="file-upload"
                      type="file"
                      multiple
                      accept=".pdf,.msg,.eml,.jpg,.jpeg,.png,.gif,.webp"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>
                </div>
                
                {/* Uploaded Files List */}
                {uploadedFiles.length > 0 && (
                  <div className="space-y-2">
                    {uploadedFiles.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between px-4 py-2 bg-secondary/50 rounded-lg"
                      >
                        <span className="text-sm text-foreground truncate flex-1">
                          {file.name}
                        </span>
                        <button
                          onClick={() => removeFile(index)}
                          className="ml-2 text-muted-foreground hover:text-destructive transition-colors"
                          type="button"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <Button 
                onClick={handleInvoke} 
                disabled={isLoading || (!input.trim() && uploadedFiles.length === 0)}
                className="w-full"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Extracting Data...
                  </>
                ) : (
                  "Extract Data"
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
            href="https://github.com/bgcoelho/ai_data_accuracy_validator"
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

export default DataExtractor;
