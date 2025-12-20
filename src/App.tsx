import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import FCL from "./pages/services/FCL";
import LCL from "./pages/services/LCL";
import ThreePL from "./pages/services/ThreePL";
import ProjectCargo from "./pages/services/ProjectCargo";
import AirFreight from "./pages/services/AirFreight";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
           <Route path="/services" element={<Services />} />
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          <Route path="/services/fcl" element={<FCL />} />
            <Route path="/services/lcl" element={<LCL />} />
            <Route path="/services/3pl" element={<ThreePL />} />
           <Route path="/services/project-cargo" element={<ProjectLogistics />} />
          <Route path="/services/air-freight" element={<AirFreight />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
