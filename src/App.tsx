import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";

// ✅ IMPORT FROM src/services

import ThreePL from "./services/3PL";
import ProjectCargo from "./services/ProjectCargo";
import AirFreight from "./services/AirFreight";
import LiquidTransportation from "./services/LiquidTransportation";
import Warehousing from "./services/Warehousing";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />

          
          <Route path="/services/3pl" element={<ThreePL />} />
          <Route path="/services/project-cargo" element={<ProjectCargo />} />
          <Route path="/services/air-freight" element={<AirFreight />} />
          <Route
            path="/services/liquid-transportation"
            element={<LiquidTransportation />}
          />
          <Route path="/services/warehousing" element={<Warehousing />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
