import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/hooks/useAuth';
import { useTheme } from '@/hooks/useTheme';
import { Mail, Loader2, ExternalLink } from 'lucide-react';

export function AuthPage() {
  const navigate = useNavigate();
  const { login, isLoading } = useAuth();
  const { theme } = useTheme();
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    
    await login(email);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4">
        <h1 className="font-heading font-bold text-xl gradient-text flex items-center gap-2">
          <span className="text-primary">✦</span>
          Kit Console
        </h1>
        <Button variant="outline" className="gap-2" asChild>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Chat with Kit
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </header>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md animate-fade-in">
          <div className="text-center mb-8">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Build on the Kit
              <br />
              <span className="gradient-text">Developer Platform</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Sign in or create a developer account to build with the Kit API
            </p>
          </div>

          <Card glass className="animate-slide-in-left">
            <CardHeader className="text-center pb-2">
              <CardTitle className="sr-only">Sign In</CardTitle>
              <CardDescription className="sr-only">
                Enter your email to sign in
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Google Sign In */}
              <Button
                variant="secondary"
                className="w-full h-12 text-base gap-3"
                onClick={() => {}}
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continue with Google
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">Or</span>
                </div>
              </div>

              {/* Email Sign In */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  glass
                  className="h-12"
                  required
                />
                <Button
                  type="submit"
                  variant="gradient"
                  className="w-full h-12 text-base"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Signing in...
                    </>
                  ) : (
                    <>
                      <Mail className="h-5 w-5" />
                      Continue with email
                    </>
                  )}
                </Button>
              </form>

              <p className="text-center text-xs text-muted-foreground pt-2">
                By continuing, you agree to Kit's{' '}
                <a href="#" className="text-primary hover:underline">
                  Commercial Terms
                </a>{' '}
                and{' '}
                <a href="#" className="text-primary hover:underline">
                  Usage Policy
                </a>
                , and acknowledge our{' '}
                <a href="#" className="text-primary hover:underline">
                  Privacy Policy
                </a>
                .
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
