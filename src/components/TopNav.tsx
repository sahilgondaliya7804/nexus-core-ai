import React from 'react';
import { Tab } from '../types';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface TopNavProps {
  currentTab: Tab;
  setCurrentTab: (tab: Tab) => void;
}

export function TopNav({ currentTab, setCurrentTab }: TopNavProps) {
  const tabs: {id: Tab, label: string}[] = [
    { id: 'command', label: 'Command Center' },
    { id: 'intelligence', label: 'Intelligence' },
    { id: 'playbooks', label: 'Playbooks' },
    { id: 'activity', label: 'Activity' },
    { id: 'workspace', label: 'Workspace' },
    { id: 'settings', label: 'Settings' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none">
      <div className="bg-[#0A1024]/80 backdrop-blur-2xl border border-white/5 shadow-2xl rounded-full px-2 py-2 flex items-center gap-1 pointer-events-auto ring-1 ring-white/5">
        <div 
          onClick={() => setCurrentTab('command')}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 cursor-pointer hover:bg-white/10 transition-colors mr-2 ml-1"
        >
          <Sparkles className="w-4 h-4 text-[#A78BFA]" />
        </div>
        
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setCurrentTab(tab.id)}
            className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              currentTab === tab.id 
                ? 'text-white' 
                : 'text-white/50 hover:text-white/80 hover:bg-white/5'
            }`}
          >
            <span className="relative z-10">{tab.label}</span>
            {currentTab === tab.id && (
              <motion.div
                layoutId="nav-indicator"
                className="absolute inset-0 bg-white/10 rounded-full"
                initial={false}
                transition={{ type: "spring", stiffness: 500, damping: 35 }}
              />
            )}
          </button>
        ))}
        
        <div className="ml-4 mr-2">
           <img 
            alt="User Profile" 
            className="w-8 h-8 rounded-full border border-white/10 object-cover opacity-80 hover:opacity-100 transition-opacity cursor-pointer" 
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=128&q=80&fit=crop&auto=format" 
          />
        </div>
      </div>
    </nav>
  );
}

