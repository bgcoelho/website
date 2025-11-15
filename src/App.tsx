import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PromptLibrary from "./pages/PromptLibrary";
import EarningsCalculator from "./pages/EarningsCalculator";
import UnderwritingRisk from "./pages/UnderwritingRisk";
import AlphaAnalytics from "./pages/AlphaAnalytics";
import DataExtractor from "./pages/DataExtractor";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/about">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prompts" element={<PromptLibrary />} />
          <Route path="/earnings-calculator" element={<EarningsCalculator />} />
          <Route path="/underwriting-risk" element={<UnderwritingRisk />} />
          <Route path="/alpha-analytics" element={<AlphaAnalytics />} />
          <Route path="/data-extractor" element={<DataExtractor />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
