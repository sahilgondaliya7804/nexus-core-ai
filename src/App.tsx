/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Tab } from './types';
import { TopNav } from './components/TopNav';
import { LandingView } from './components/LandingView';
import { AnalyticsView } from './components/AnalyticsView';
import { TemplatesView } from './components/TemplatesView';
import { HistoryView } from './components/HistoryView';
import { DocumentationView } from './components/DocumentationView';
import { SettingsView } from './components/SettingsView';
import { ChatBot } from './components/ChatBot';
import { AnimatePresence, motion } from 'motion/react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<Tab>('command');

  return (
    <div className="flex flex-col min-h-screen selection:bg-[#8B5CF6]/30 selection:text-white overflow-x-hidden text-white pt-24 pb-12 font-sans bg-[#050816]">
      <TopNav currentTab={currentTab} setCurrentTab={setCurrentTab} />
      
      <main className="flex-1 w-full relative z-10 px-4 md:px-8 max-w-screen-2xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab}
            initial={{ opacity: 0, y: 15, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -15, filter: 'blur(8px)' }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="w-full h-full"
          >
            {currentTab === 'command' && <LandingView onNavigate={setCurrentTab} />}
            {currentTab === 'intelligence' && <AnalyticsView />}
            {currentTab === 'playbooks' && <TemplatesView onNavigate={setCurrentTab} />}
            {currentTab === 'activity' && <HistoryView />}
            {currentTab === 'workspace' && <DocumentationView />}
            {currentTab === 'settings' && <SettingsView />}
          </motion.div>
        </AnimatePresence>
      </main>

      <ChatBot />
    </div>
  );
}



