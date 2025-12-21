import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Key, 
  BookOpen, 
  Rocket, 
  PanelLeftClose,
  PanelLeft,
  FileText
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { consoleNavigation, docsNavigation } from '@/data/navigation';
import { Button } from '@/components/ui/button';
import type { AppView } from '@/types';

interface AppSidebarProps {
  currentView: AppView;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  onSwitchView: (view: AppView) => void;
  onProfileClick: () => void;
  userName?: string;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  LayoutDashboard,
  Key,
  BookOpen,
  Rocket,
};

export function AppSidebar({
  currentView,
  isCollapsed,
  onToggleCollapse,
  onSwitchView,
  onProfileClick,
  userName = 'User',
}: AppSidebarProps) {
  const location = useLocation();
  const navigation = currentView === 'console' ? consoleNavigation : docsNavigation;
  const siteName = currentView === 'console' ? 'Kit Console' : 'Kit Docs';
  const switchToView = currentView === 'console' ? 'docs' : 'console';
  const switchToName = currentView === 'console' ? 'Kit Docs' : 'Kit Console';

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 h-screen flex flex-col transition-all duration-300 ease-in-out",
        "glass border-r border-glass-border",
        isCollapsed ? "w-0 opacity-0 pointer-events-none -translate-x-full" : "w-[280px] opacity-100"
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-glass-border">
        <h1 className="font-heading font-bold text-xl gradient-text">
          {siteName}
        </h1>
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggleCollapse}
          className="h-8 w-8"
        >
          <PanelLeftClose className="h-4 w-4" />
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-6">
        {navigation.map((section) => (
          <div key={section.heading}>
            <h2 className="text-xs font-semibold text-muted-foreground tracking-wider mb-3">
              {section.heading}
            </h2>
            <ul className="space-y-1">
              {section.items.map((item) => {
                const Icon = item.icon ? iconMap[item.icon] : null;
                const isActive = location.pathname === item.href;
                
                return (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                      )}
                    >
                      {Icon && <Icon className="h-4 w-4" />}
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-glass-border space-y-2">
        {/* Switch View Button */}
        <button
          onClick={() => onSwitchView(switchToView)}
          className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-200"
        >
          <FileText className="h-4 w-4" />
          {switchToName}
        </button>

        {/* Profile */}
        <button
          onClick={onProfileClick}
          className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-accent/50 transition-all duration-200"
        >
          <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
            {userName.charAt(0).toUpperCase()}
          </div>
          <div className="flex-1 text-left">
            <p className="font-medium">{userName}</p>
            <p className="text-xs text-muted-foreground">Personal Account</p>
          </div>
        </button>
      </div>
    </aside>
  );
}

export function SidebarTrigger({ onClick }: { onClick: () => void }) {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={onClick}
      className="h-9 w-9"
    >
      <PanelLeft className="h-5 w-5" />
    </Button>
  );
}
