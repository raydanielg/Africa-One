import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Index } from "./pages/Index";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Redirecting from "./pages/Redirecting";
import { useState, useEffect } from "react";
const queryClient = new QueryClient();

const App = () => {
  const [selectedCountry, setSelectedCountry] = useState("Tanzania");
  const handleCountryChange = (country: string) => {
    setSelectedCountry(country);
  };

  useEffect(() => {
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index country={selectedCountry} onCountryChange={handleCountryChange} />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/about" element={<About />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/redirecting" element={<Redirecting />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </BrowserRouter>
        </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;