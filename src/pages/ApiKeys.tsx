import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MainLayout } from '@/components/layout/MainLayout';
import { useApiKeys } from '@/hooks/useApiKeys';
import { Key, Plus, Copy, Trash2, Eye, EyeOff, Check } from 'lucide-react';
import { toast } from 'sonner';

export function ApiKeysPage() {
  const { apiKeys, createApiKey, deleteApiKey } = useApiKeys();
  const [newKeyName, setNewKeyName] = useState('');
  const [visibleKeys, setVisibleKeys] = useState<Set<string>>(new Set());
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCreateKey = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newKeyName.trim()) {
      toast.error('Please enter a name for your API key');
      return;
    }
    
    const key = createApiKey(newKeyName);
    setNewKeyName('');
    toast.success('API key created successfully');
    
    // Auto-show the new key
    setVisibleKeys(prev => new Set([...prev, key.id]));
  };

  const handleCopyKey = async (key: string, id: string) => {
    await navigator.clipboard.writeText(key);
    setCopiedKey(id);
    toast.success('API key copied to clipboard');
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleDeleteKey = (id: string) => {
    deleteApiKey(id);
    toast.success('API key deleted');
  };

  const toggleKeyVisibility = (id: string) => {
    setVisibleKeys(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const maskKey = (key: string) => {
    return key.slice(0, 8) + '•'.repeat(24) + key.slice(-4);
  };

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto animate-fade-in">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-heading text-4xl font-bold mb-2">API Keys</h1>
          <p className="text-muted-foreground">
            Manage your API keys for accessing the Kit API
          </p>
        </div>

        {/* Create Key Form */}
        <Card glass className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Plus className="h-5 w-5" />
              Create New API Key
            </CardTitle>
            <CardDescription>
              Give your key a descriptive name to identify it later
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCreateKey} className="flex gap-3">
              <Input
                placeholder="e.g., Production Key, Development Key"
                value={newKeyName}
                onChange={(e) => setNewKeyName(e.target.value)}
                className="flex-1"
                glass
              />
              <Button type="submit" variant="gradient" className="gap-2">
                <Key className="h-4 w-4" />
                Create Key
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Keys List */}
        <Card glass>
          <CardHeader>
            <CardTitle className="text-lg">Your API Keys</CardTitle>
            <CardDescription>
              {apiKeys.length === 0 
                ? "You haven't created any API keys yet" 
                : `${apiKeys.length} key${apiKeys.length !== 1 ? 's' : ''} created`
              }
            </CardDescription>
          </CardHeader>
          <CardContent>
            {apiKeys.length === 0 ? (
              <div className="text-center py-10 text-muted-foreground">
                <Key className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No API keys yet. Create your first key above.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {apiKeys.map((apiKey) => (
                  <div
                    key={apiKey.id}
                    className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-lg bg-accent/30 border border-glass-border"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="font-medium mb-1">{apiKey.name}</p>
                      <code className="text-sm text-muted-foreground font-mono break-all">
                        {visibleKeys.has(apiKey.id) ? apiKey.key : maskKey(apiKey.key)}
                      </code>
                      <p className="text-xs text-muted-foreground mt-1">
                        Created {new Date(apiKey.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => toggleKeyVisibility(apiKey.id)}
                        title={visibleKeys.has(apiKey.id) ? 'Hide key' : 'Show key'}
                      >
                        {visibleKeys.has(apiKey.id) ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleCopyKey(apiKey.key, apiKey.id)}
                        title="Copy key"
                      >
                        {copiedKey === apiKey.id ? (
                          <Check className="h-4 w-4 text-green-500" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDeleteKey(apiKey.id)}
                        className="text-destructive hover:text-destructive hover:bg-destructive/10"
                        title="Delete key"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
