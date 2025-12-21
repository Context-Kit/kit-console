import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Settings, Sparkles, ArrowRight, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function DocsIntroPage() {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto animate-fade-in">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Build with <span className="gradient-text">Kit</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Learn how to get started with the Kit Developer Platform and Kit API
          </p>
          
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Ask Kit about docs..."
              className="w-full h-12 pl-12 pr-4 rounded-lg bg-glass border border-glass-border backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>

        {/* Title */}
        <h2 className="font-heading text-2xl font-semibold text-center mb-8">
          Kit Developer Platform
        </h2>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <Card glass className="hover:shadow-glow transition-shadow cursor-pointer" onClick={() => navigate('/docs/quickstart')}>
            <CardHeader>
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <Play className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="text-lg text-primary">Get started</CardTitle>
              <CardDescription>
                Make your first API call in minutes.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card glass className="hover:shadow-glow transition-shadow cursor-pointer">
            <CardHeader>
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <Settings className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="text-lg">Features overview</CardTitle>
              <CardDescription>
                Explore the advanced features and capabilities now available in Kit.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card glass className="hover:shadow-glow transition-shadow cursor-pointer">
            <CardHeader>
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <Sparkles className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="text-lg text-primary">What's new in Kit 2.0</CardTitle>
              <CardDescription>
                Discover the latest advancements in Kit 2.0 models.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Quick Start CTA */}
        <Card glass>
          <CardContent className="flex items-center justify-between gap-6 p-6">
            <div>
              <h3 className="font-heading text-lg font-semibold mb-1">Ready to start building?</h3>
              <p className="text-muted-foreground">Jump into our quickstart guide and make your first API call.</p>
            </div>
            <Button variant="gradient" className="gap-2 shrink-0" onClick={() => navigate('/docs/quickstart')}>
              Quickstart
              <ArrowRight className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
