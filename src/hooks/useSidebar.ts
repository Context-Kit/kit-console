import { useState, useCallback } from 'react';
import type { AppView } from '@/types';

export function useSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentView, setCurrentView] = useState<AppView>('console');

  const toggleCollapsed = useCallback(() => {
    setIsCollapsed(prev => !prev);
  }, []);

  const switchView = useCallback((view: AppView) => {
    setCurrentView(view);
  }, []);

  return {
    isCollapsed,
    currentView,
    toggleCollapsed,
    switchView,
  };
}
