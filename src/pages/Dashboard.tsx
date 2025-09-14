import { useAuth0 } from '@auth0/auth0-react';
import { LogoutButton } from '@/components/LogoutButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, Calendar, Shield } from 'lucide-react';

const Dashboard = () => {
  const { user, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="glass-card p-8 rounded-xl">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
        </div>
      </div>
    );
  }

  // Extract user data with fallbacks
  const fullName = user?.name || 'Unknown User';
  const email = user?.email || 'No email provided';
  const phoneNumber = user?.phone_number || user?.['https://your-app.com/phone'] || 'No phone number provided';
  const picture = user?.picture;
  const initials = fullName.split(' ').map(n => n[0]).join('').toUpperCase();

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 animate-fade-in">
          <div>
            <h1 className="text-3xl font-bold">Welcome back!</h1>
            <p className="text-muted-foreground">Here's your personalized dashboard</p>
          </div>
          <LogoutButton />
        </div>

        {/* User Profile Card */}
        <Card className="glass-card border-0 animate-slide-up">
          <CardHeader className="pb-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Avatar className="h-20 w-20 ring-4 ring-primary/20">
                <AvatarImage src={picture} alt={fullName} />
                <AvatarFallback className="bg-primary text-primary-foreground text-xl font-bold">
                  {initials}
                </AvatarFallback>
              </Avatar>
              <div className="space-y-2">
                <CardTitle className="text-2xl">{fullName}</CardTitle>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    <Shield className="h-3 w-3 mr-1" />
                    Authenticated
                  </Badge>
                  <Badge variant="outline">Premium User</Badge>
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* User Information Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact Information */}
          <Card className="glass-card border-0 animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Email Address</label>
                <p className="text-lg font-medium">{email}</p>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Phone Number
                </label>
                <p className="text-lg font-medium">{phoneNumber}</p>
              </div>
            </CardContent>
          </Card>

          {/* Account Details */}
          <Card className="glass-card border-0 animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Account Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">User ID</label>
                <p className="text-sm font-mono bg-muted/50 p-2 rounded truncate">
                  {user?.sub || 'N/A'}
                </p>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Last Login</label>
                <p className="text-lg font-medium">
                  {user?.updated_at ? new Date(user.updated_at).toLocaleDateString() : 'N/A'}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* User Metadata */}
        {user && Object.keys(user).length > 0 && (
          <Card className="glass-card border-0 animate-slide-up">
            <CardHeader>
              <CardTitle>User Profile Data</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="text-xs bg-muted/50 p-4 rounded-lg overflow-auto max-h-60">
                {JSON.stringify(user, null, 2)}
              </pre>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Dashboard;