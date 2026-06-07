import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, Sparkles, Building2, TrendingUp, AlertCircle, CheckCircle2, RotateCcw, Copy, Navigation, Zap } from 'lucide-react';
import { AbstractNetwork } from './AbstractNetwork';

export function TemplatesView({ onNavigate }: { onNavigate?: (tab: any) => void }) {
  const [generationState, setGenerationState] = useState<'idle' | 'processing' | 'complete'>('idle');

  const startGeneration = () => {
    setGenerationState('processing');
    setTimeout(() => {
      setGenerationState('complete');
    }, 4000);
  };

  return (
    <div className="w-full h-[calc(100vh-140px)] flex gap-6">
      
      {/* LEFT PANE: Prospect Intelligence */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-1/4 min-w-[320px] glass-panel rounded-[28px] p-6 flex flex-col h-full overflow-y-auto scrollbar-hide"
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-full bg-[#1e1b4b] border border-[#8B5CF6]/30 flex items-center justify-center font-display font-medium text-[#A78BFA]">
            ER
          </div>
          <div>
            <h3 className="text-base font-medium text-white leading-tight">Elena Rostova</h3>
            <p className="text-xs text-white/50">VP Growth @ Stripe</p>
          </div>
        </div>

        <div className="space-y-6 flex-1">
          <div>
             <h4 className="text-xs font-mono tracking-wider text-white/30 uppercase mb-3 flex items-center gap-2"><Building2 className="w-3 h-3" /> Company Signals</h4>
             <div className="bg-white/5 border border-white/5 rounded-[16px] p-4">
               <p className="text-sm text-white/80 leading-relaxed mb-2">Announced major expansion into APAC markets last quarter. Heavy focus on localization workflows.</p>
               <span className="inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-sm bg-[#34C759]/10 text-[#34C759]">High relevance</span>
             </div>
          </div>
          
          <div>
             <h4 className="text-xs font-mono tracking-wider text-white/30 uppercase mb-3 flex items-center gap-2"><TrendingUp className="w-3 h-3" /> Recent Activity</h4>
             <div className="bg-white/5 border border-white/5 rounded-[16px] p-4">
               <p className="text-sm text-white/80 leading-relaxed">"Struggling to maintain data consistency across 14 new regions. Looking for headless solutions." — LinkedIn Post, 2 days ago.</p>
             </div>
          </div>

          <div>
             <h4 className="text-xs font-mono tracking-wider text-white/30 uppercase mb-3 flex items-center gap-2"><AlertCircle className="w-3 h-3" /> Identified Pain Point</h4>
             <div className="bg-[#FC5C65]/5 border border-[#FC5C65]/10 rounded-[16px] p-4">
               <p className="text-sm text-[#FC5C65]/90 leading-relaxed">Cross-regional data latency and compliance fragmentation.</p>
             </div>
          </div>
        </div>

        <button 
           onClick={startGeneration}
           disabled={generationState !== 'idle'}
           className="mt-6 w-full py-4 rounded-[16px] bg-[#8B5CF6] hover:bg-[#7C3AED] disabled:opacity-50 disabled:hover:bg-[#8B5CF6] text-white font-medium transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] flex items-center justify-center gap-2"
        >
          {generationState === 'idle' ? (
            <>Synthesize Outreach <Sparkles className="w-4 h-4" /></>
          ) : generationState === 'processing' ? (
            <>Processing Intelligence...</>
          ) : (
            <>Regenerate <RotateCcw className="w-4 h-4" /></>
          )}
        </button>
      </motion.div>

      {/* CENTER PANE: AI Processing */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 rounded-[32px] border border-white/5 bg-[#050816]/50 relative overflow-hidden flex flex-col items-center justify-center"
      >
        <div className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none">
           <AbstractNetwork />
        </div>
        
        <AnimatePresence mode="wait">
          {generationState === 'idle' && (
            <motion.div 
              key="idle"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
              className="relative z-10 flex flex-col items-center text-center max-w-md p-8"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                 <Brain className="w-8 h-8 text-white/30" />
              </div>
              <h2 className="text-2xl font-display font-medium text-white mb-2">Engine Idle</h2>
              <p className="text-white/40 text-sm">System is ready to ingest prospect signals and synthesize personalized outreach.</p>
            </motion.div>
          )}
          
          {generationState === 'processing' && (
            <motion.div 
              key="processing"
              initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="relative mb-8">
                 <div className="w-24 h-24 rounded-full border border-[#8B5CF6]/30 flex items-center justify-center animate-pulse">
                   <div className="w-16 h-16 rounded-full border border-[#8B5CF6]/50 bg-[#8B5CF6]/10 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-[#A78BFA]" />
                   </div>
                 </div>
                 {/* Orbital rings */}
                 <div className="absolute inset-[-20px] border border-white/10 rounded-full animate-[spin_4s_linear_infinite]" style={{ borderTopColor: 'transparent', borderLeftColor: 'transparent' }}></div>
                 <div className="absolute inset-[-40px] border border-[#8B5CF6]/30 rounded-full animate-[spin_6s_linear_infinite_reverse]" style={{ borderBottomColor: 'transparent', borderRightColor: 'transparent' }}></div>
              </div>
              <h2 className="text-xl font-display font-medium text-white mb-1">Synthesizing Profile...</h2>
              <p className="text-[#A78BFA] text-sm animate-pulse">Aligning pain points with value proposition</p>
            </motion.div>
          )}

          {generationState === 'complete' && (
             <motion.div 
               key="complete"
               initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
               animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
               className="relative z-10 flex flex-col items-center text-center bg-[#070B1A]/80 backdrop-blur-md px-8 py-6 rounded-[24px] border border-[#34C759]/20 shadow-[0_0_30px_rgba(52,199,89,0.1)]"
             >
               <div className="w-12 h-12 rounded-full bg-[#34C759]/10 border border-[#34C759]/30 flex items-center justify-center mb-4 text-[#34C759]">
                  <CheckCircle2 className="w-6 h-6" />
               </div>
               <h2 className="text-lg font-display font-medium text-white mb-1">Synthesis Complete</h2>
               <p className="text-white/50 text-sm">Draft generated with 94% relevance confidence.</p>
               
               <button onClick={() => setGenerationState('idle')} className="mt-4 text-xs text-white/30 hover:text-white/70 transition-colors">Reset Engine</button>
             </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* RIGHT PANE: Generated Canvas */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="w-1/3 min-w-[400px] glass-panel rounded-[28px] p-8 flex flex-col relative h-full"
      >
        <div className="flex justify-between items-center mb-10 pb-4 border-b border-white/5">
          <h3 className="text-lg font-display font-medium text-white tracking-wide">Output Canvas</h3>
          <div className="flex gap-2">
            <button className="p-2 rounded-full hover:bg-white/5 text-white/50 hover:text-white transition-colors">
              <Copy className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-hide text-[15px] leading-[1.8] text-white/80 font-light flex flex-col relative">
           {generationState === 'complete' ? (
             <motion.div 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5 }}
               className="space-y-6"
             >
               <p><span className="text-white/40">Subject:</span> Resolving APAC layout latency (from your LI post)</p>
               <hr className="border-white/5" />
               <p>Hi Elena,</p>
               <p>I saw your recent LinkedIn post noting the struggles with data consistency as Stripe expands further into the APAC region.</p>
               <p>We built Nexus specifically to solve headless compliance fragmentation directly across multi-region architectures.</p>
               <p>Our platform reduces latency by 40% across distributed nodes without requiring you to rewrite your localized logic. Companies like Vercel and Linear use this architecture to maintain seamless synchronicity globally.</p>
               <p>Open to a brief technical deep dive this Thursday?</p>
               <p className="pt-4 text-white/50">Best,<br/>Alex</p>
             </motion.div>
           ) : (
             <div className="absolute inset-0 flex items-center justify-center">
               <p className="text-white/20 font-mono text-sm text-center">Awaiting System Synthesis...</p>
             </div>
           )}
        </div>

        <div className="pt-6 mt-auto border-t border-white/5">
           <button 
              disabled={generationState !== 'complete'}
              className="w-full py-4 rounded-[16px] bg-white text-[#050816] font-medium disabled:opacity-20 transition-all hover:bg-white/90 flex items-center justify-center gap-2"
           >
             Approve & Push to Hubspot <Navigation className="w-4 h-4" />
           </button>
        </div>
      </motion.div>
      
    </div>
  );
}
