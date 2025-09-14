import { Auth0Provider } from '@auth0/auth0-react';
import { ReactNode } from 'react';

interface Auth0ProviderWrapperProps {
  children: ReactNode;
}

export const Auth0ProviderWrapper = ({ children }: Auth0ProviderWrapperProps) => {
  // These would typically come from environment variables
  // For demo purposes, we'll show how to configure them
  const domain = process.env.REACT_APP_AUTH0_DOMAIN || 'your-domain.auth0.com';
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID || 'your-client-id';
  const redirectUri = window.location.origin;

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
        scope: 'openid profile email phone'
      }}
    >
      {children}
    </Auth0Provider>
  );
};