import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Database, Workflow, CloudCog, Shield, ChevronRight, Search, FileJson, ArrowUpRight } from 'lucide-react';

const navItems = [
  { id: 'data-lake', icon: <Database className="w-4 h-4" />, label: 'Data Lake' },
  { id: 'workflows', icon: <Workflow className="w-4 h-4" />, label: 'Automation Workflows' },
  { id: 'integrations', icon: <CloudCog className="w-4 h-4" />, label: 'Integrations Hub' },
  { id: 'security', icon: <Shield className="w-4 h-4" />, label: 'Compliance & Security' },
];

export function DocumentationView() {
  const [activeSection, setActiveSection] = useState('integrations');

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
          <h1 className="text-3xl font-display font-medium text-white tracking-tight mb-2">Workspace</h1>
          <p className="text-sm text-white/40">Connect your external architecture.</p>
        </div>
        
        <nav className="flex flex-col gap-1">
          {navItems.map(item => (
            <button 
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-[12px] text-sm font-medium transition-all ${
                activeSection === item.id 
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

      <AnimatePresence mode="wait">
        <motion.div 
          key={activeSection}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="flex-1 flex flex-col gap-8 pb-20"
        >
          {activeSection === 'integrations' ? (
            <>
              <div>
                <h1 className="text-4xl font-display font-medium text-white mb-4">Integrations Hub</h1>
                <p className="text-[17px] text-white/50 font-light leading-relaxed max-w-3xl">
                   Connect Nexus Core to your existing infrastructure. Bi-directional sync ensures all relationship intelligence and state updates are globally consistent.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                 {[
                   { name: 'Salesforce', status: 'Connected', desc: 'Sync leads, contacts, and AI sentiment scores.', active: true },
                   { name: 'HubSpot', status: 'Connected', desc: 'Bi-directional timeline and task sync.', active: true },
                   { name: 'Clearbit', status: 'Available', desc: 'Enrich prospect profiles with firmographic data.', active: false },
                   { name: 'Slack', status: 'Available', desc: 'Real-time alerts for hot buying signals.', active: false }
                 ].map((app, i) => (
                    <motion.div 
                       initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i }}
                       key={i} 
                       className="glass-panel p-6 rounded-[24px] border border-white/5 hover:bg-white/[0.02] transition-colors group cursor-pointer relative overflow-hidden"
                    >
                       <div className="flex justify-between items-start mb-4">
                         <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center font-display font-medium text-white group-hover:scale-105 transition-transform">
                           {app.name[0]}
                         </div>
                         {app.active ? (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#34C759]/10 text-[#34C759] text-[11px] font-mono border border-[#34C759]/20 tracking-wider">ACTIVE</span>
                         ) : (
                            <button className="text-white/40 hover:text-white transition-colors text-sm font-medium">Connect</button>
                         )}
                       </div>
                       <h3 className="text-white font-medium mb-1">{app.name}</h3>
                       <p className="text-sm text-white/40">{app.desc}</p>
                    </motion.div>
                 ))}
              </div>

              <div className="w-full border-t border-white/5 pt-10 mt-6">
                <h2 className="text-xl font-display font-medium text-white mb-4">Custom Endpoints</h2>
                <p className="text-sm text-white/40 mb-6">Access the raw REST API for headless integration.</p>
                <div className="glass-panel p-1 rounded-[16px] border border-white/5">
                   <div className="flex gap-2 p-3 bg-white/[0.02] border-b border-white/5">
                     <div className="w-3 h-3 rounded-full bg-[#FC5C65]"></div>
                     <div className="w-3 h-3 rounded-full bg-[#FDBC40]"></div>
                     <div className="w-3 h-3 rounded-full bg-[#34C759]"></div>
                   </div>
                   <div className="p-6 font-mono text-[13px] leading-[1.8] text-white/60">
                     <span className="text-[#8B5CF6]">curl</span> https://api.nexus.ai/v2/webhooks/intake \<br/>
                     &nbsp;&nbsp;-H <span className="text-[#34C759]">"Authorization: Bearer nx_live_xxxx"</span> \<br/>
                     &nbsp;&nbsp;-H <span className="text-[#34C759]">"Content-Type: application/json"</span> \<br/>
                     &nbsp;&nbsp;-d <span className="text-[#FDBC40]">'{`{"events": ["signal_detected"]}`}'</span>
                   </div>
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full min-h-[400px] border border-dashed border-white/10 rounded-[32px] bg-white/[0.01]">
              <div className="text-white/20 mb-4 scale-150">
                {navItems.find(i => i.id === activeSection)?.icon}
              </div>
              <h1 className="text-2xl font-display font-medium text-white mb-2">{navItems.find(i => i.id === activeSection)?.label}</h1>
              <p className="text-sm text-white/40">This module is locked.</p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
