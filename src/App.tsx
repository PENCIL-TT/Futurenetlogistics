import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import Services from "./pages/Services";
import ThreePL from "./pages/3PL";
import AirFreight from "./pages/AirFreight";
import Fcl from "./pages/Fcl";
import Lcl from "./pages/Lcl";
import LiquidTransportation from "./pages/LiquidTransportation";
import ProjectCargo from "./pages/ProjectCargo";
import Warehousing from "./pages/Warehousing";
import NotFound from "./pages/NotFound";

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

          {/* Services Main */}
          <Route path="/services" element={<Services />} />

          {/* Individual Services */}
          <Route path="/services/3pl" element={<ThreePL />} />
          <Route path="/services/air-freight" element={<AirFreight />} />
          <Route path="/services/fcl" element={<Fcl />} />
          <Route path="/services/lcl" element={<Lcl />} />
          <Route
            path="/services/liquid-transportation"
            element={<LiquidTransportation />}
          />
          <Route
            path="/services/project-cargo"
            element={<ProjectCargo />}
          />
          <Route
            path="/services/warehousing"
            element={<Warehousing />}
          />

          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
