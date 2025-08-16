import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Search, Eye, FileText } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  showBackButton?: boolean;
}

const Layout = ({ children, title, showBackButton = false }: LayoutProps) => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: 'Command Center' },
    { path: '/trust-check', icon: Search, label: 'Trust Check' },
    { path: '/visual-lab', icon: Eye, label: 'Visual Lab' },
    { path: '/case-summary', icon: FileText, label: 'Case Summary' },
  ];

  return (
    <div className="min-h-screen detective-gradient">
      {/* Header */}
      <header className="border-b border-border/20 bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {showBackButton && (
              <Button 
                variant="ghost" 
                size="sm" 
                asChild
                className="text-foreground hover:text-primary"
              >
                <Link to="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Link>
              </Button>
            )}
            <h1 className="text-2xl font-bold text-primary">{title}</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Button
                  key={item.path}
                  variant={isActive ? "default" : "ghost"}
                  size="sm"
                  asChild
                  className={isActive ? "glow-gold" : ""}
                >
                  <Link to={item.path}>
                    <Icon className="h-4 w-4 mr-2" />
                    {item.label}
                  </Link>
                </Button>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border/20 backdrop-blur-sm">
        <div className="flex justify-around py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Button
                key={item.path}
                variant={isActive ? "default" : "ghost"}
                size="sm"
                asChild
                className="flex-col h-auto py-2 px-3"
              >
                <Link to={item.path}>
                  <Icon className="h-4 w-4 mb-1" />
                  <span className="text-xs">{item.label.split(' ')[0]}</span>
                </Link>
              </Button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Layout;