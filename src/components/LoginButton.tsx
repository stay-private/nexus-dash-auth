import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@/components/ui/button';
import { LogIn } from 'lucide-react';

export const LoginButton = () => {
  const { loginWithRedirect, isLoading } = useAuth0();

  return (
    <Button
      onClick={() => loginWithRedirect()}
      disabled={isLoading}
      size="lg"
      className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold glow-effect transition-smooth hover:scale-105"
    >
      <LogIn className="mr-2 h-5 w-5" />
      {isLoading ? 'Loading...' : 'Sign In with Auth0'}
    </Button>
  );
};