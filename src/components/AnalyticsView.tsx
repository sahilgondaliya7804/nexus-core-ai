import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { motion } from 'motion/react';
import { TrendingUp, Download, BarChart2, Star, Target, Users, Zap } from 'lucide-react';
import { chartData } from '../data';

export function AnalyticsView() {
  const [isExporting, setIsExporting] = React.useState(false);

  const handleExport = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-10 py-8 flex flex-col gap-8 h-full">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/5 pb-8">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-[40px] font-display font-light text-white mb-2 tracking-tight">Intelligence Oversight</h1>
          <p className="text-[17px] text-white/50 font-light">Executive perspective on relationship velocity and generated revenue.</p>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/10 text-white hover:bg-white/5 transition-colors text-sm font-medium">
            This Quarter
          </button>
          <button 
            onClick={handleExport}
            className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-[#050816] hover:bg-white/90 transition-colors text-sm font-medium w-40 justify-center"
          >
            {isExporting ? <span className="w-4 h-4 border-2 border-[#050816] border-t-transparent rounded-full animate-spin"></span> : <Download className="w-4 h-4" />}
            {isExporting ? 'Compiling...' : 'Export Brief'}
          </button>
        </motion.div>
      </header>

      <motion.section 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <motion.div variants={itemVariants} className="glass-panel p-8 rounded-[32px] border border-white/5 relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-30 transition-opacity">
              <Target className="w-24 h-24 text-[#8B5CF6]" />
           </div>
           <h3 className="text-sm font-medium text-white/50 tracking-wider uppercase mb-8">Revenue Influenced</h3>
           <div className="text-6xl font-display font-medium text-white leading-none mb-2 tracking-tighter">
             $2.4<span className="text-3xl text-white/30">M</span>
           </div>
           <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#34C759]/10 text-[#34C759] text-sm font-medium mt-4">
             <TrendingUp className="w-4 h-4" /> +18.2% from Q2
           </div>
        </motion.div>

        <motion.div variants={itemVariants} className="glass-panel p-8 rounded-[32px] border border-white/5 relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-30 transition-opacity">
              <Users className="w-24 h-24 text-[#8B5CF6]" />
           </div>
           <h3 className="text-sm font-medium text-white/50 tracking-wider uppercase mb-8">Relationship Growth</h3>
           <div className="text-6xl font-display font-medium text-white leading-none mb-2 tracking-tighter">
             482
           </div>
           <p className="text-sm text-white/40 mt-1">Net new executive connections</p>
           <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#8B5CF6]/10 text-[#A78BFA] text-sm font-medium mt-4">
             <TrendingUp className="w-4 h-4" /> Strong conversion velocity
           </div>
        </motion.div>

        <motion.div variants={itemVariants} className="glass-panel p-8 rounded-[32px] border border-white/5 relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-30 transition-opacity">
              <Star className="w-24 h-24 text-[#8B5CF6]" />
           </div>
           <h3 className="text-sm font-medium text-white/50 tracking-wider uppercase mb-8">Response Quality</h3>
           <div className="text-6xl font-display font-medium text-white leading-none mb-2 tracking-tighter flex items-end gap-2">
             A- <span className="text-xl text-[#34C759] pb-2 font-mono">92%</span>
           </div>
           <p className="text-sm text-white/40 mt-1">Average sentiment score</p>
           <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 text-white/70 text-sm font-medium mt-4">
             <Zap className="w-4 h-4 text-[#FDBC40]" /> AI tone matching optimized
           </div>
        </motion.div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="glass-panel border border-white/5 rounded-[32px] p-8 flex flex-col gap-6"
      >
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-2xl font-display font-medium text-white tracking-wide">Engagement Trajectory</h2>
            <p className="text-sm text-white/40 mt-1">AI-synthesized outreach open vs. reply rates over the last 6 months.</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#8B5CF6] shadow-[0_0_10px_#A78BFA]"></div>
              <span className="text-sm text-white/60">Open Rate</span>
            </div>
            <div className="flex items-center gap-2">
               <div className="w-2 h-2 rounded-full bg-[#FC5C65] shadow-[0_0_10px_#FC5C65]"></div>
              <span className="text-sm text-white/60">Reply Rate</span>
            </div>
          </div>
        </div>
        
        <div className="w-full h-80 mt-4 text-xs relative">
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0A1024] to-transparent z-10 opacity-30"></div>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorOpen" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorReply" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FC5C65" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#FC5C65" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.03)" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 11 }} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 11 }} tickFormatter={(val) => `${val}%`} />
              <Area type="monotone" dataKey="open" stroke="#8B5CF6" strokeWidth={3} fillOpacity={1} fill="url(#colorOpen)" animationDuration={1500} />
              <Area type="monotone" dataKey="reply" stroke="#FC5C65" strokeWidth={3} fillOpacity={1} fill="url(#colorReply)" animationDuration={1500} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </motion.section>
    </div>
  );
}
