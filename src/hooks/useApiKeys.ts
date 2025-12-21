import { useState, useCallback } from 'react';
import type { ApiKey } from '@/types';

// Mock API keys hook
export function useApiKeys() {
  const [apiKeys, setApiKeys] = useState<ApiKey[]>(() => {
    const stored = localStorage.getItem('apiKeys');
    return stored ? JSON.parse(stored) : [];
  });

  const generateKey = (): string => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const prefix = 'kit_';
    let key = prefix;
    for (let i = 0; i < 32; i++) {
      key += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return key;
  };

  const createApiKey = useCallback((name: string) => {
    const newKey: ApiKey = {
      id: Date.now().toString(),
      name,
      key: generateKey(),
      createdAt: new Date(),
    };
    
    const updated = [...apiKeys, newKey];
    setApiKeys(updated);
    localStorage.setItem('apiKeys', JSON.stringify(updated));
    return newKey;
  }, [apiKeys]);

  const deleteApiKey = useCallback((id: string) => {
    const updated = apiKeys.filter(k => k.id !== id);
    setApiKeys(updated);
    localStorage.setItem('apiKeys', JSON.stringify(updated));
  }, [apiKeys]);

  return { apiKeys, createApiKey, deleteApiKey };
}
