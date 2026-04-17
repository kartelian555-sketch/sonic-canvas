import React from 'react';
import { Home, Search, Library, PlusSquare, Heart, Music2 } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';

export function Sidebar() {
  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Search, label: 'Search', path: '/search' },
    { icon: Library, label: 'Your Library', path: '/library' },
  ];

  return (
    <div className="w-64 bg-black h-screen flex flex-col gap-6 p-6 border-r border-border shrink-0">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
          <Music2 className="text-primary-foreground w-5 h-5" />
        </div>
        <span className="text-xl font-bold tracking-tight">VibeMusic</span>
      </div>

      <nav className="flex flex-col gap-1">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) => cn(
              "flex items-center gap-4 px-3 py-2 rounded-md transition-colors text-sm font-medium",
              isActive 
                ? "bg-secondary text-secondary-foreground" 
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
            )}
          >
            <item.icon className="w-5 h-5" />
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="mt-6 flex flex-col gap-4">
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3">
          Playlists
        </h3>
        <button className="flex items-center gap-4 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group">
          <div className="w-6 h-6 bg-muted rounded-sm flex items-center justify-center group-hover:bg-accent">
            <PlusSquare className="w-4 h-4" />
          </div>
          Create Playlist
        </button>
        <button className="flex items-center gap-4 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group">
          <div className="w-6 h-6 bg-gradient-to-br from-indigo-700 to-indigo-300 rounded-sm flex items-center justify-center">
            <Heart className="w-3 h-3 text-white fill-current" />
          </div>
          Liked Songs
        </button>
      </div>

      <div className="mt-auto border-t border-border pt-4">
        <div className="px-3 text-[10px] text-muted-foreground flex flex-col gap-2">
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Cookies</a>
            <a href="#" className="hover:underline">Privacy</a>
          </div>
          <span>© 2024 VibeMusic API</span>
        </div>
      </div>
    </div>
  );
}