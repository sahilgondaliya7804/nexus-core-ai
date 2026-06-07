import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Plus, Filter, MoreHorizontal, ArrowRight, CheckCircle2, Zap, Brain, MessageSquare, Mail } from 'lucide-react';
import { emailHistory } from '../data';

export function HistoryView() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-10 flex flex-col gap-8 h-full">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/5 pb-8">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-[40px] font-display font-light text-white mb-2 tracking-tight">System Activity</h1>
          <p className="text-[17px] text-white/50 font-light">A visual timeline of intelligence gathered, drafts created, and relationships managed.</p>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="flex items-center gap-3">
          <div className="relative">
             <Search className="w-4 h-4 text-white/30 absolute left-3 top-1/2 -translate-y-1/2" />
             <input 
               type="text" 
               placeholder="Search timeline..." 
               value={searchTerm}
               onChange={e => setSearchTerm(e.target.value)}
               className="bg-white/5 border border-white/10 rounded-full py-2 pl-9 pr-4 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#8B5CF6]/50 focus:bg-white/10 transition-all w-64"
             />
          </div>
          <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
            <Filter className="w-4 h-4 text-white/60" />
          </button>
        </motion.div>
      </header>

      <div className="relative pl-6 md:pl-20 mt-4 pb-24 border-l border-white/5 ml-4 md:ml-[120px]">
        {/* Timestamp axis labels */}
        <div className="hidden md:block absolute left-[-120px] top-6 text-sm text-white/30 font-mono tracking-wider w-24 text-right">TODAY</div>
        <div className="hidden md:block absolute left-[-120px] top-[400px] text-sm text-white/30 font-mono tracking-wider w-24 text-right">YESTERDAY</div>

        <div className="flex flex-col gap-16">
          {/* Timeline Node 1: Reply */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="relative group"
          >
            <div className="absolute -left-[30px] md:-left-[86px] top-1 w-3 h-3 rounded-full bg-[#10B981] shadow-[0_0_12px_#10B981] border border-[#050816]"></div>
            <div className="hidden md:block absolute -left-[140px] top-0 text-sm text-white/70">11:10 AM</div>
            
            <div className="glass-panel p-6 rounded-[24px] border-[#10B981]/20 hover:border-[#10B981]/40 transition-colors w-full max-w-2xl bg-[#0A1024]">
               <div className="flex justify-between items-start mb-4">
                 <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-[#10B981]/10 flex items-center justify-center">
                      <MessageSquare className="w-4 h-4 text-[#10B981]" />
                   </div>
                   <div>
                     <h3 className="text-white font-medium text-base">Positive Reply Received</h3>
                     <p className="text-white/40 text-sm">Elena Rostova (Stripe)</p>
                   </div>
                 </div>
                 <button className="text-white/20 hover:text-white transition-colors"><MoreHorizontal className="w-5 h-5"/></button>
               </div>
               <div className="pl-11 pr-4">
                 <p className="text-white/70 text-[15px] italic border-l-2 border-white/10 pl-4 py-1 leading-relaxed">
                   "Alex, timing couldn't be better. We are actively looking at our APAC infrastructure right now. Let's chat Thursday. Send a calendar link."
                 </p>
                 <div className="mt-4 flex gap-2">
                   <button className="px-4 py-2 rounded-lg bg-[#8B5CF6] hover:bg-[#7C3AED] text-white text-sm font-medium transition-colors shadow-[0_0_15px_rgba(139,92,246,0.3)]">Draft Meeting Proposal</button>
                 </div>
               </div>
            </div>
          </motion.div>

          {/* Timeline Node 2: Sent */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute -left-[28px] md:-left-[84px] top-1 w-2 h-2 rounded-full bg-white/20 group-hover:bg-white/40 transition-colors"></div>
            <div className="hidden md:block absolute -left-[140px] top-0 text-sm text-white/40">10:48 AM</div>
            
            <div className="glass-panel p-6 rounded-[24px] transition-colors w-full max-w-2xl">
               <div className="flex justify-between items-start">
                 <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-white/50" />
                   </div>
                   <div>
                     <h3 className="text-white/90 font-medium text-base">Outreach Deployed</h3>
                     <p className="text-white/40 text-sm">Target: Elena Rostova</p>
                   </div>
                 </div>
                 <span className="px-2.5 py-1 rounded-full bg-white/5 text-white/50 text-[11px] font-mono border border-white/10 uppercase tracking-wider">HubSpot Synced</span>
               </div>
            </div>
          </motion.div>

          {/* Timeline Node 3: AI Magic */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            className="relative group"
          >
            <div className="absolute -left-[30px] md:-left-[86px] top-1 w-3 h-3 rounded-full bg-[#8B5CF6] shadow-[0_0_12px_#A78BFA] border border-[#050816]"></div>
            <div className="hidden md:block absolute -left-[140px] top-0 text-sm text-white/50 font-medium">10:46 AM</div>
            
            <div className="glass-panel p-6 rounded-[24px] border-[#8B5CF6]/20 w-full max-w-2xl bg-gradient-to-br from-[#8B5CF6]/[0.02] to-transparent">
               <div className="flex justify-between items-start mb-4">
                 <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 flex items-center justify-center">
                      <Brain className="w-4 h-4 text-[#A78BFA]" />
                   </div>
                   <div>
                     <h3 className="text-[#A78BFA] font-medium text-base">Cognitive Synthesis Completed</h3>
                     <p className="text-white/40 text-sm">Draft generated based on APAC signals</p>
                   </div>
                 </div>
                 <div className="flex items-center gap-1">
                   <span className="w-1.5 h-1.5 rounded-full bg-[#34C759]"></span>
                   <span className="text-[#34C759] text-xs font-mono">94% CONFIDENCE</span>
                 </div>
               </div>
               <div className="pl-11">
                 <div className="p-4 rounded-[16px] bg-[#0A1024]/50 border border-white/5 text-[14px] text-white/60 font-light leading-relaxed mb-4">
                   System mapped the correlation between Stripe's Series G expansion press release and Elena's LinkedIn comment regarding API latency. Tone set to: Direct, Technical, brevity prioritized.
                 </div>
                 <button className="text-[#A78BFA] text-sm font-medium hover:text-white transition-colors flex items-center gap-1 bg-[#8B5CF6]/10 px-3 py-1.5 rounded-lg border border-[#8B5CF6]/20">
                   Review Output <ArrowRight className="w-3 h-3" />
                 </button>
               </div>
            </div>
          </motion.div>

          {/* YESTERDAY NODE */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
            className="relative group mt-12"
          >
            <div className="absolute -left-[28px] md:-left-[84px] top-1 w-2 h-2 rounded-full bg-white/20 group-hover:bg-white/40 transition-colors"></div>
            <div className="hidden md:block absolute -left-[140px] top-0 text-sm text-white/40">4:20 PM</div>
            
            <div className="glass-panel p-6 rounded-[24px] transition-colors w-full max-w-2xl">
               <div className="flex justify-between items-start">
                 <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-white/50" />
                   </div>
                   <div>
                     <h3 className="text-white/90 font-medium text-base">Bulk Opportunity Scan</h3>
                     <p className="text-white/40 text-sm">Processed 250 targets in 'Fintech EMEA' segment</p>
                   </div>
                 </div>
                 <span className="text-white/60 text-sm">4 Hot leads found</span>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
