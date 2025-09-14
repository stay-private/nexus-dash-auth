import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, AlertCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="max-w-md mx-auto text-center space-y-6 animate-fade-in">
        <div className="glass-card p-8 rounded-xl space-y-6">
          <div className="mx-auto w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center">
            <AlertCircle className="h-8 w-8 text-destructive" />
          </div>
          
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">404</h1>
            <h2 className="text-xl font-semibold">Page Not Found</h2>
            <p className="text-muted-foreground">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          <Button 
            onClick={() => window.location.href = '/'}
            className="bg-primary hover:bg-primary/90 text-primary-foreground transition-smooth hover:scale-105"
          >
            <Home className="mr-2 h-4 w-4" />
            Return Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
