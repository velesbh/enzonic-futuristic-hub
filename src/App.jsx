import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from 'next-themes';
import { navItems } from "./nav-items";
import MCTools from "./pages/MCTools";
import CustomPlan from "./pages/CustomPlan";
import AdminPanel from "./pages/AdminPanel";
import EnzonicMods from "./pages/EnzonicMods";
import ImageVideoTools from "./pages/ImageVideoTools";
import Team from "./pages/Team";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <Routes>
            {navItems.map(({ to, page }) => (
              <Route key={to} path={to} element={page} />
            ))}
            <Route path="/mc-tools" element={<MCTools />} />
            <Route path="/custom-plan" element={<CustomPlan />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/enzonic-mods" element={<EnzonicMods />} />
            <Route path="/image-video-tools" element={<ImageVideoTools />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;