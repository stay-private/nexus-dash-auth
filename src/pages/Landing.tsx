import { LoginButton } from '@/components/LoginButton';
import { Shield, Users, Zap } from 'lucide-react';

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        {/* Hero Section */}
        <div className="space-y-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-card text-sm font-medium">
            <Shield className="h-4 w-4 mr-2 text-primary" />
            Secure Authentication Platform
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Welcome to SecureApp
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Experience seamless authentication powered by Auth0. Access your personalized dashboard with enterprise-grade security.
          </p>
        </div>

        {/* CTA Section */}
        <div className="space-y-6">
          <LoginButton />
          <p className="text-sm text-muted-foreground">
            Secure, fast, and reliable authentication
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto">
          <div className="glass-card p-6 rounded-xl transition-smooth hover:scale-105">
            <Shield className="h-8 w-8 text-primary mb-4 mx-auto" />
            <h3 className="font-semibold mb-2">Enterprise Security</h3>
            <p className="text-sm text-muted-foreground">
              Auth0's industry-leading security protects your data
            </p>
          </div>
          
          <div className="glass-card p-6 rounded-xl transition-smooth hover:scale-105">
            <Zap className="h-8 w-8 text-primary mb-4 mx-auto" />
            <h3 className="font-semibold mb-2">Lightning Fast</h3>
            <p className="text-sm text-muted-foreground">
              Instant authentication with seamless user experience
            </p>
          </div>
          
          <div className="glass-card p-6 rounded-xl transition-smooth hover:scale-105">
            <Users className="h-8 w-8 text-primary mb-4 mx-auto" />
            <h3 className="font-semibold mb-2">User Profiles</h3>
            <p className="text-sm text-muted-foreground">
              Rich user data and customizable profile management
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;