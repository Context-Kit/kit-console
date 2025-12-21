import { useState, useCallback, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import type { AppView } from '@/types';

export function useSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const currentView = useMemo<AppView>(() => {
    return location.pathname.startsWith('/docs') ? 'docs' : 'console';
  }, [location.pathname]);

  const toggleCollapsed = useCallback(() => {
    setIsCollapsed(prev => !prev);
  }, []);

  return {
    isCollapsed,
    currentView,
    toggleCollapsed,
  };
}
