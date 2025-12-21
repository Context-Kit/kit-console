import { ReactNode, useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { AppSidebar, SidebarTrigger } from './AppSidebar';
import { ProfileModal } from '@/components/profile/ProfileModal';
import { useAuth } from '@/hooks/useAuth';
import { useTheme } from '@/hooks/useTheme';
import { useSidebar } from '@/hooks/useSidebar';
import { cn } from '@/lib/utils';

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const navigate = useNavigate();
  const { user, logout, isAuthenticated } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { isCollapsed, currentView, toggleCollapsed } = useSidebar();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  const handleSwitchView = (view: 'console' | 'docs') => {
    if (view === 'docs') {
      navigate('/docs/intro');
    } else {
      navigate('/dashboard');
    }
  };

  const handleLogout = () => {
    logout();
    setIsProfileOpen(false);
    navigate('/auth');
  };

  return (
    <div className="min-h-screen bg-background">
      <AppSidebar
        currentView={currentView}
        isCollapsed={isCollapsed}
        onToggleCollapse={toggleCollapsed}
        onSwitchView={handleSwitchView}
        onProfileClick={() => setIsProfileOpen(true)}
        userName={user?.name}
      />

      <div
        className={cn(
          "min-h-screen transition-sidebar",
          isCollapsed ? "ml-0" : "ml-[280px]"
        )}
      >
        {/* Top bar with sidebar trigger when collapsed */}
        {isCollapsed && (
          <header className="sticky top-0 z-30 flex items-center h-14 px-4 border-b border-border bg-background/80 backdrop-blur-sm">
            <SidebarTrigger onClick={toggleCollapsed} />
            <span className="ml-4 font-heading font-semibold gradient-text">
              {currentView === 'console' ? 'Kit Console' : 'Kit Docs'}
            </span>
          </header>
        )}

        <main className="p-6 md:p-8 lg:p-10">
          {children}
        </main>
      </div>

      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        userName={user?.name || 'User'}
        userEmail={user?.email || ''}
        theme={theme}
        onToggleTheme={toggleTheme}
        onLogout={handleLogout}
      />
    </div>
  );
}
