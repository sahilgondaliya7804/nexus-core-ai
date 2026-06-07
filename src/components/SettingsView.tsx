import React, { useState } from 'react';
import { motion } from 'motion/react';
import { User, Bell, Shield, Wallet, Keyboard, Fingerprint, Zap, Crown, CheckCircle2, ChevronRight, UploadCloud } from 'lucide-react';

const settingsNav = [
  { id: 'general', icon: <User className="w-4 h-4" />, label: 'General' },
  { id: 'billing', icon: <Wallet className="w-4 h-4" />, label: 'Plan & Billing' },
  { id: 'security', icon: <Fingerprint className="w-4 h-4" />, label: 'Security' },
  { id: 'data', icon: <UploadCloud className="w-4 h-4" />, label: 'Data Import' },
  { id: 'notifications', icon: <Bell className="w-4 h-4" />, label: 'Notifications' }
];

export function SettingsView() {
  const [activeTab, setActiveTab] = useState('general');
  const [toggles, setToggles] = useState({
    autoSync: true,
    weeklyDigest: false,
    aiResearch: true,
    twoFactor: true
  });

  const toggle = (key: keyof typeof toggles) => {
    setToggles(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-10 flex flex-col md:flex-row gap-12 h-full">
      {/* Left Sidebar (Settings Nav) */}
      <motion.aside 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full md:w-64 flex-shrink-0"
      >
        <div className="mb-10">
          <h1 className="text-3xl font-display font-medium text-white tracking-tight mb-2">Settings</h1>
          <p className="text-sm text-white/40">Manage your workspace preferences and account details.</p>
        </div>
        
        <nav className="flex flex-col gap-1">
          {settingsNav.map(item => (
            <button 
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-[12px] text-sm font-medium transition-all ${
                activeTab === item.id 
                 ? 'bg-white/10 text-white shadow-lg border border-white/5' 
                 : 'text-white/50 hover:bg-white/5 hover:text-white border border-transparent'
              }`}
            >
              <div className="flex items-center gap-3">
                {item.icon}
                {item.label}
              </div>
            </button>
          ))}
        </nav>
      </motion.aside>

      {/* Right Content Area */}
      <motion.main 
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex-1 flex flex-col gap-8 pb-20"
      >
        {activeTab === 'general' && (
          <>
            {/* Profile Card */}
            <div className="glass-panel p-8 rounded-[32px] flex items-center gap-8 relative overflow-hidden">
               <div className="w-24 h-24 rounded-full border border-white/10 overflow-hidden relative group cursor-pointer">
                 <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=256&q=80&fit=crop" alt="Profile" className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <UploadCloud className="w-6 h-6 text-white" />
                 </div>
               </div>
               <div className="flex-1">
                 <h2 className="text-2xl font-display font-medium text-white mb-1">Alex Chen</h2>
                 <p className="text-white/40 text-sm mb-4">alex@nexus.ai • Workspace Owner</p>
                 <div className="flex gap-3">
                   <button className="px-5 py-2.5 rounded-full bg-white text-[#050816] text-sm font-medium hover:bg-white/90 transition-colors">Edit Profile</button>
                   <button className="px-5 py-2.5 rounded-full border border-white/10 text-white text-sm font-medium hover:bg-white/5 transition-colors">Sign Out</button>
                 </div>
               </div>
            </div>

            {/* General Preferences */}
            <h3 className="text-lg font-display font-medium text-white tracking-wide mt-4 px-2">Preferences</h3>
            <div className="glass-panel rounded-[32px] overflow-hidden flex flex-col border border-white/5">
               
               <div className="flex items-center justify-between p-6 border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                 <div>
                   <h4 className="text-white font-medium mb-1">Auto-sync with CRM</h4>
                   <p className="text-sm text-white/40">Automatically push drafts and status updates to HubSpot.</p>
                 </div>
                 <button 
                  onClick={() => toggle('autoSync')}
                  className={`w-12 h-6 rounded-full relative transition-colors ${toggles.autoSync ? 'bg-[#34C759]' : 'bg-white/10'}`}
                 >
                   <motion.div 
                     layout
                     className={`w-5 h-5 rounded-full bg-white absolute top-0.5 shadow-sm`}
                     animate={{ left: toggles.autoSync ? '26px' : '2px' }}
                     transition={{ type: "spring", stiffness: 500, damping: 30 }}
                   />
                 </button>
               </div>

               <div className="flex items-center justify-between p-6 hover:bg-white/[0.02] transition-colors">
                 <div>
                   <h4 className="text-white font-medium mb-1">Background Deep Research</h4>
                   <p className="text-sm text-white/40">AI engine continuously monitors target companies for buying signals.</p>
                 </div>
                 <button 
                  onClick={() => toggle('aiResearch')}
                  className={`w-12 h-6 rounded-full relative transition-colors ${toggles.aiResearch ? 'bg-[#34C759]' : 'bg-white/10'}`}
                 >
                   <motion.div 
                     layout
                     className={`w-5 h-5 rounded-full bg-white absolute top-0.5 shadow-sm`}
                     animate={{ left: toggles.aiResearch ? '26px' : '2px' }}
                     transition={{ type: "spring", stiffness: 500, damping: 30 }}
                   />
                 </button>
               </div>
            </div>
          </>
        )}

        {activeTab === 'billing' && (
          <>
            <h3 className="text-lg font-display font-medium text-white tracking-wide px-2">Current Plan</h3>
            <div className="glass-panel rounded-[32px] p-8 relative overflow-hidden border border-[#8B5CF6]/30">
               <div className="absolute top-0 right-0 w-64 h-64 bg-[#8B5CF6]/20 blur-[80px] pointer-events-none rounded-full"></div>
               <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                 <div>
                   <div className="inline-flex items-center gap-2 mb-2">
                     <Crown className="w-5 h-5 text-[#A78BFA]" />
                     <span className="text-[#A78BFA] font-medium tracking-wide uppercase text-sm">Pro Edition</span>
                   </div>
                   <p className="text-sm text-white/50 max-w-md">You are currently using 45,200 out of 50,000 monthly inference tokens. To avoid interruption, upgrade your limit.</p>
                 </div>
                 <div className="text-right">
                   <div className="text-3xl font-display font-medium text-white mb-2">$99 <span className="text-lg text-white/40">/ mo</span></div>
                   <button className="px-6 py-2.5 rounded-full bg-white text-[#050816] text-sm font-medium hover:bg-white/90 transition-colors shadow-lg">Upgrade Capacity</button>
                 </div>
               </div>
               
               <div className="mt-8 pt-8 border-t border-white/10 w-full">
                 <div className="flex justify-between items-end mb-3">
                   <span className="text-sm font-medium text-white/70">Current Cycle Usage</span>
                   <span className="text-sm font-mono text-white/50">90.4%</span>
                 </div>
                 <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                   <div className="h-full bg-gradient-to-r from-[#8B5CF6] to-[#FC5C65] w-[90%] rounded-full shadow-[0_0_10px_rgba(252,92,101,0.5)]"></div>
                 </div>
               </div>
            </div>
            
            <h3 className="text-lg font-display font-medium text-white tracking-wide mt-4 px-2">Payment Methods</h3>
            <div className="glass-panel rounded-[32px] p-6 border border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-8 rounded border border-white/10 bg-white/5 flex items-center justify-center text-xs font-bold italic text-white/60">VISA</div>
                <div>
                  <div className="text-white font-medium">•••• •••• •••• 4242</div>
                  <div className="text-xs text-white/40">Expires 12/26</div>
                </div>
              </div>
              <button className="text-sm text-white/50 hover:text-white transition-colors">Edit</button>
            </div>
          </>
        )}

      </motion.main>
    </div>
  );
}
