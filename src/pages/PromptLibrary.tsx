import { Navigation } from "@/components/Navigation";
import { PromptCard } from "@/components/PromptCard";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Search } from "lucide-react";

const PromptLibrary = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const prompts = [
    {
      title: "AI Product Specification Generator",
      tags: ["ProductManagement", "LLM", "Strategy"],
      body: "Generate a detailed product specification for a new AI-powered tool.\nInclude: business objectives, data sources, prediction model scope, and a sample UI concept.",
    },
    {
      title: "Data Validation Assistant",
      tags: ["DataQuality", "Automation", "Python"],
      body: "Design a workflow where an LLM validates incoming datasets, identifies inconsistencies, and proposes fixes with reasoning.",
    },
    {
      title: "Investor Summary Creator",
      tags: ["Finance", "Communication", "NLP"],
      body: "Summarize a company's 10-K filing into a concise investor note.\nHighlight: strategy, risk factors, and financial trajectory in 5 sentences.",
    },
    {
      title: "To be detailed",
      tags: ["Finance", "Communication", "NLP"],
      body: "Summarize a company's 10-K filing into a concise investor note.\nHighlight: strategy, risk factors, and financial trajectory in 5 sentences.",
    },
    {
      title: "To be detailed",
      tags: ["Finance", "Communication", "NLP"],
      body: "Summarize a company's 10-K filing into a concise investor note.\nHighlight: strategy, risk factors, and financial trajectory in 5 sentences.",
    },
  ];

  const filteredPrompts = prompts.filter((prompt) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      prompt.title.toLowerCase().includes(searchLower) ||
      prompt.tags.some((tag) => tag.toLowerCase().includes(searchLower)) ||
      prompt.body.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-6 py-16 space-y-12">
        {/* Header */}
        <section className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-light text-foreground tracking-tight">
            Prompt Library
          </h1>
          <p className="text-xl text-muted-foreground">
            Curated by Bruno Graca Coelho — Product Manager / Head of Data
          </p>
        </section>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search prompts by title, tags, or content..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 py-6 text-base"
          />
        </div>

        {/* Prompts Section */}
        <section className="space-y-6">
          <div className="flex items-baseline justify-between">
            <h2 className="text-2xl font-light text-foreground">Featured Prompts</h2>
            <span className="text-sm text-muted-foreground">
              {filteredPrompts.length} {filteredPrompts.length === 1 ? "prompt" : "prompts"}
            </span>
          </div>
          <div className="space-y-4">
            {filteredPrompts.length > 0 ? (
              filteredPrompts.map((prompt, index) => (
                <PromptCard key={index} {...prompt} />
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No prompts found matching your search.</p>
              </div>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-12 pb-8 text-center text-sm text-muted-foreground border-t border-border">
          <p>&copy; 2025 Bruno Graca Coelho</p>
        </footer>
      </main>
    </div>
  );
};

export default PromptLibrary;
