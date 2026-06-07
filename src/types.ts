export type Tab = 'command' | 'intelligence' | 'playbooks' | 'activity' | 'workspace' | 'settings';

export interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
}


export interface StatCard {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: string;
  suffix?: string;
}

export interface EmailHistoryItem {
  id: string;
  date: string;
  time: string;
  prospectName: string;
  prospectInitials: string;
  prospectColor: string;
  company: string;
  goal: string;
  aiScore: number;
  scoreLabel: string;
  status: 'Sent' | 'Draft';
}

export interface TemplateVariant {
  id: string;
  title: string;
  subtitle: string;
  matchScore: number;
  content: string[];
  icon: string;
}
