import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";

// Services pages
import FCL from "./pages/services/FCL";
import LCL from "./pages/services/LCL";
import ThreePL from "./pages/services/ThreePL";
import ProjectCargo from "./pages/services/ProjectCargo";
import AirFreight from "./pages/services/AirFreight";
import LiquidTransportation from "./pages/services/LiquidTransportation";
import Warehousing from "./pages/services/Warehousing";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Index />} />

          {/* Services main page */}
          <Route path="/services" element={<Services />} />

          {/* Services detail pages */}
          <Route path="/services/fcl" element={<FCL />} />
          <Route path="/services/lcl" element={<LCL />} />
          <Route path="/services/3pl" element={<ThreePL />} />
          <Route path="/services/project-cargo" element={<ProjectCargo />} />
          <Route path="/services/air-freight" element={<AirFreight />} />
          <Route
            path="/services/liquid-transportation"
            element={<LiquidTransportation />}
          />
          <Route path="/services/warehousing" element={<Warehousing />} />

          {/* 404 – always LAST */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
