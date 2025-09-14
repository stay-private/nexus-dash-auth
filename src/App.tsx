import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Auth0ProviderWrapper } from "@/components/Auth0Provider";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppRoutes = () => {
  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Routes>
      <Route path="/" element={isAuthenticated ? <Dashboard /> : <Landing />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Auth0ProviderWrapper>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </Auth0ProviderWrapper>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
