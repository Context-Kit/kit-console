import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Terminal, Key, Code2, CheckCircle2 } from 'lucide-react';

export function DocsQuickstartPage() {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto animate-fade-in">
        {/* Header */}
        <div className="mb-10">
          <p className="text-sm text-muted-foreground mb-2">FIRST STEPS</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Quickstart</h1>
          <p className="text-lg text-muted-foreground">
            Get up and running with the Kit API in under 5 minutes
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {/* Step 1 */}
          <Card glass>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <span className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">1</span>
                Get your API key
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                First, you'll need an API key to authenticate your requests. You can create one in the Kit Console.
              </p>
              <Button variant="outline" className="gap-2" onClick={() => navigate('/api-keys')}>
                <Key className="h-4 w-4" />
                Go to API Keys
                <ArrowRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card glass>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <span className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">2</span>
                Install the SDK
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Install our official SDK for your preferred language:
              </p>
              <div className="bg-background/50 rounded-lg p-4 font-mono text-sm border border-glass-border">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <Terminal className="h-4 w-4" />
                  npm
                </div>
                <code className="text-primary">npm install @kit/sdk</code>
              </div>
            </CardContent>
          </Card>

          {/* Step 3 */}
          <Card glass>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <span className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">3</span>
                Make your first request
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Here's a simple example to get you started:
              </p>
              <div className="bg-background/50 rounded-lg p-4 font-mono text-sm border border-glass-border overflow-x-auto">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <Code2 className="h-4 w-4" />
                  JavaScript
                </div>
                <pre className="text-foreground">
{`import Kit from '@kit/sdk';

const kit = new Kit({
  apiKey: 'your-api-key'
});

const response = await kit.chat.create({
  model: 'kit-2.0',
  messages: [
    { role: 'user', content: 'Hello, Kit!' }
  ]
});

console.log(response.message);`}
                </pre>
              </div>
            </CardContent>
          </Card>

          {/* Success */}
          <Card glass className="border-primary/30">
            <CardContent className="flex items-center gap-4 p-6">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold mb-1">You're all set!</h3>
                <p className="text-muted-foreground">
                  You've made your first API call. Explore the docs to learn more about what you can build.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}
