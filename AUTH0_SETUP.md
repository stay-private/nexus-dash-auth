# Auth0 Setup Guide

## Quick Setup Steps

1. **Create Auth0 Account**
   - Go to [Auth0.com](https://auth0.com) and create a free account
   - Create a new application (Single Page Application)

2. **Configure Your App**
   - Set Allowed Callback URLs to: `http://localhost:8080`
   - Set Allowed Logout URLs to: `http://localhost:8080`
   - Set Allowed Web Origins to: `http://localhost:8080`

3. **Update Configuration**
   - Copy your Domain and Client ID from the Auth0 dashboard
   - Replace the placeholder values in `src/components/Auth0Provider.tsx`:
     ```typescript
     const domain = 'your-actual-domain.auth0.com';
     const clientId = 'your-actual-client-id';
     ```

4. **Enable Phone Number (Optional)**
   - In Auth0 Dashboard > User Management > Users
   - You can manually add phone numbers to user profiles
   - Or use Auth0 Rules/Actions to capture phone numbers during signup

## For Production

Create environment variables:
- `VITE_AUTH0_DOMAIN=your-domain.auth0.com`
- `VITE_AUTH0_CLIENT_ID=your-client-id`

The app will automatically use these if available.