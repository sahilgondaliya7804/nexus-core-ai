import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Activity, Zap, Command, Crosshair, Users, Globe2, ScanFace, Radar } from 'lucide-react';
import { AbstractNetwork } from './AbstractNetwork';

export function LandingView({ onNavigate }: { onNavigate?: (tab: any) => void }) {
  
  return (
    <div className="w-full flex gap-8">
      
      {/* LEFT COLUMN: Hero Panel + Radar */}
      <div className="flex-1 flex flex-col gap-8">
        
        {/* ACTIVE PROSPECT HERO PANEL */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[32px] bg-gradient-to-br from-[rgba(255,255,255,0.05)] to-transparent border border-white/5 p-1 overflow-hidden"
        >
          <div className="absolute inset-0 z-0 opacity-40">
             <AbstractNetwork />
          </div>
          
          <div className="relative z-10 glass-panel rounded-[28px] p-10 h-full flex flex-col justify-between overflow-hidden shadow-2xl bg-[#0A1024]/60">
            <div className="flex justify-between items-start mb-16">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
                  <ScanFace className="w-4 h-4 text-[#A78BFA]" />
                  <span className="text-xs font-medium tracking-wide text-white/70 uppercase">Active Target</span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-display font-light tracking-tight text-white mb-2">Elena Rostova</h1>
                <p className="text-xl text-white/50 font-light flex items-center gap-3">
                  VP Growth <span className="w-1 h-1 rounded-full bg-white/20"></span> Stripe
                </p>
              </div>
              <button 
                onClick={() => onNavigate?.('intelligence')}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors group bg-white/5"
              >
                <ArrowUpRight className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
              </button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="glass-panel p-5 rounded-[20px]">
                <p className="text-sm font-medium text-white/40 mb-1">Relationship Score</p>
                <div className="flex items-end gap-2 px-1">
                  <span className="text-3xl font-display font-medium">97<span className="text-lg text-white/40">%</span></span>
                </div>
              </div>
              <div className="glass-panel p-5 rounded-[20px]">
                <p className="text-sm font-medium text-white/40 mb-1">Buying Signals</p>
                <div className="flex items-end gap-2 px-1">
                  <span className="text-3xl font-display font-medium text-[#A78BFA]">6</span>
                  <Activity className="w-4 h-4 text-[#A78BFA] mb-2 font-bold" />
                </div>
              </div>
              <div className="glass-panel p-5 rounded-[20px]">
                <p className="text-sm font-medium text-white/40 mb-1">Engagement Prob.</p>
                <div className="flex items-end gap-2 px-1">
                  <span className="text-3xl font-display font-medium">92<span className="text-lg text-white/40">%</span></span>
                </div>
              </div>
              <div className="glass-panel p-5 rounded-[20px] bg-[#8B5CF6]/10 border-[#8B5CF6]/20 col-span-2 md:col-span-1">
                <p className="text-sm font-medium text-[#A78BFA] mb-1">Suggested Angle</p>
                <div className="flex items-end gap-2 px-1 h-full pb-1">
                  <span className="text-lg font-display font-medium text-white leading-tight">Strategic Expansion</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* BOTTOM ROW: Radar + Intelligence Feed */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
          {/* Opportunity Radar Visual */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel rounded-[32px] p-8 flex flex-col relative overflow-hidden"
          >
            <div className="flex justify-between items-center mb-8 relative z-10">
              <h3 className="text-lg font-display font-medium text-white">Signal Radar</h3>
              <Radar className="w-5 h-5 text-white/30" />
            </div>
            
            <div className="flex-1 flex items-center justify-center relative min-h-[250px]">
              {/* Radar Rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[100%] h-[100%] rounded-full border border-white/5 absolute"></div>
                <div className="w-[70%] h-[70%] rounded-full border border-white/[0.08] absolute"></div>
                <div className="w-[40%] h-[40%] rounded-full border border-white/[0.12] absolute"></div>
                <div className="w-1 h-1 bg-[#8B5CF6] rounded-full absolute shadow-[0_0_15px_#A78BFA]"></div>
                
                {/* Radar Sweep */}
                <div className="w-[50%] h-[50%] absolute origin-bottom-right rotate-[60deg] bg-gradient-to-tl from-[#8B5CF6]/20 to-transparent bottom-1/2 right-1/2 transform-gpu" style={{ animation: 'spin 4s linear infinite', borderTopLeftRadius: '100%' }}></div>
              </div>
              
              {/* Plot points */}
              <div className="absolute top-[25%] left-[65%] group">
                <div className="w-3 h-3 bg-[#FC5C65] rounded-full shadow-[0_0_15px_#FC5C65]"></div>
                <div className="absolute top-4 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-white/10 px-2 py-1 rounded text-xs backdrop-blur-md">Hot Lead</div>
              </div>
              <div className="absolute top-[60%] left-[30%] group">
                 <div className="w-2.5 h-2.5 bg-[#A78BFA] rounded-full opacity-60"></div>
              </div>
              <div className="absolute top-[40%] left-[45%] group">
                 <div className="w-2 h-2 bg-white/40 rounded-full"></div>
              </div>
              <div className="absolute top-[75%] left-[70%] group">
                 <div className="w-2 h-2 bg-white/30 rounded-full"></div>
              </div>
              <div className="absolute top-[35%] left-[20%] group">
                 <div className="w-3 h-3 bg-[#A78BFA] rounded-full shadow-[0_0_15px_#8B5CF6]"></div>
                 <div className="absolute top-4 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-white/10 px-2 py-1 rounded text-xs backdrop-blur-md">Warm Signal</div>
              </div>
            </div>
            
            <style>{`
              @keyframes spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
            `}</style>
          </motion.div>

          {/* Intelligence Feed */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
             className="glass-panel rounded-[32px] p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-lg font-display font-medium text-white">Intelligence Feed</h3>
              <Globe2 className="w-5 h-5 text-white/30" />
            </div>
            
            <div className="flex flex-col gap-6 flex-1 justify-center">
              <div className="flex gap-4 items-start group cursor-pointer">
                <div className="w-10 h-10 rounded-[12px] bg-white/5 border border-white/10 flex items-center justify-center mt-1 flex-shrink-0 group-hover:bg-white/10 transition-colors">
                  <Users className="w-4 h-4 text-white/60" />
                </div>
                <div>
                  <h4 className="text-base text-white/90 font-medium mb-1">Stripe announced hiring growth</h4>
                  <p className="text-sm text-white/40 leading-relaxed mb-3">Potential expansion opportunity detected in EMEA region. Signal strength elevated.</p>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 text-[#A78BFA] text-xs font-medium">
                    <Command className="w-3 h-3" /> Execute Outreach Angle
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* RIGHT COLUMN: AI Activity Stream */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="hidden xl:flex w-96 glass-panel rounded-[32px] p-8 flex-col"
      >
        <div className="flex justify-between items-center mb-10">
          <h3 className="text-lg font-display font-medium text-white">System Activity</h3>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#A78BFA] shadow-[0_0_8px_#A78BFA] animate-pulse"></span>
            <span className="text-xs font-medium text-[#A78BFA]">Live</span>
          </div>
        </div>
        
        <div className="flex flex-col gap-0 relative flex-1">
          {/* Vertical timeline line */}
          <div className="absolute left-[11px] top-2 bottom-2 w-[1px] bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
          
          {[
            { time: "11:10 AM", desc: "Reply received from Elena", type: "success" },
            { time: "10:48 AM", desc: "Email opened (Multiple views)", type: "info" },
            { time: "10:46 AM", desc: "Outreach generated asynchronously", type: "action" },
            { time: "10:44 AM", desc: "Buying signals triangulated", type: "system" },
            { time: "10:42 AM", desc: "Background research completed", type: "system" }
          ].map((item, i) => (
            <div key={i} className="flex gap-6 relative group pb-10 last:pb-0">
               <div className="w-6 flex flex-col items-center">
                 <div className={`w-[22px] h-[22px] rounded-full flex items-center justify-center bg-[#070B1A] border-2 relative z-10 transition-colors ${
                   item.type === 'success' ? 'border-[#8B5CF6] shadow-[0_0_10px_#A78BFA]' : 
                   item.type === 'info' ? 'border-white/30' : 
                   'border-white/10 group-hover:border-white/30'
                 }`}>
                   <div className={`w-1.5 h-1.5 rounded-full ${item.type === 'success' ? 'bg-[#A78BFA]' : 'bg-transparent'}`}></div>
                 </div>
               </div>
               <div className="flex flex-col pt-0.5">
                 <span className="text-[11px] font-mono text-white/30 mb-1">{item.time}</span>
                 <p className={`text-sm ${item.type === 'success' ? 'text-white font-medium' : 'text-white/60'}`}>{item.desc}</p>
               </div>
            </div>
          ))}
        </div>
        
        <button 
           onClick={() => onNavigate?.('activity')}
           className="mt-8 w-full py-4 rounded-[16px] border border-white/5 hover:bg-white/5 transition-colors text-sm text-white/50 hover:text-white flex justify-center items-center gap-2"
        >
          View Full Log <ArrowUpRight className="w-4 h-4" />
        </button>
      </motion.div>
    </div>
  );
}

