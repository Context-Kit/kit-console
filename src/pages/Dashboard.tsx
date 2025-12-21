import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MainLayout } from '@/components/layout/MainLayout';
import { Key, ArrowRight, Zap, Shield, Globe } from 'lucide-react';

export function DashboardPage() {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto animate-fade-in">
        {/* Header */}
        <div className="mb-10">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Welcome to <span className="gradient-text">Kit Console</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Build powerful applications with the Kit API. Get started by generating your API keys.
          </p>
        </div>

        {/* CTA Card */}
        <Card glass className="mb-10">
          <CardContent className="flex flex-col md:flex-row items-center justify-between gap-6 p-8">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-xl bg-primary/20 flex items-center justify-center">
                <Key className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h2 className="font-heading text-xl font-semibold">Get Started with API Keys</h2>
                <p className="text-muted-foreground">
                  Generate your first API key to start building
                </p>
              </div>
            </div>
            <Button
              variant="gradient"
              size="lg"
              className="gap-2 min-w-[180px]"
              onClick={() => navigate('/api-keys')}
            >
              Get API Keys
              <ArrowRight className="h-5 w-5" />
            </Button>
          </CardContent>
        </Card>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card glass>
            <CardHeader>
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="text-lg">Fast Integration</CardTitle>
              <CardDescription>
                Simple REST API with comprehensive SDKs for all major languages
              </CardDescription>
            </CardHeader>
          </Card>

          <Card glass>
            <CardHeader>
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="text-lg">Secure by Default</CardTitle>
              <CardDescription>
                Enterprise-grade security with encrypted API keys and rate limiting
              </CardDescription>
            </CardHeader>
          </Card>

          <Card glass>
            <CardHeader>
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <Globe className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="text-lg">Global Scale</CardTitle>
              <CardDescription>
                Built on edge infrastructure for low latency worldwide
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}
