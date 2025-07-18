import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import CreateForm from "./pages/CreateForm";
import Forms from "./pages/Forms";
import Analytics from "./pages/Analytics";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route 
            path="/dashboard" 
            element={
              <>
                <Navigation />
                <Dashboard />
              </>
            } 
          />
          <Route 
            path="/create-form" 
            element={
              <>
                <Navigation />
                <CreateForm />
              </>
            } 
          />
          <Route 
            path="/forms" 
            element={
              <>
                <Navigation />
                <Forms />
              </>
            } 
          />
          <Route 
            path="/analytics" 
            element={
              <>
                <Navigation />
                <Analytics />
              </>
            } 
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
