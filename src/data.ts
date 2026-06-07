import { EmailHistoryItem, StatCard, TemplateVariant } from './types';

export const chartData = [
  { name: 'Week 1', open: 30, reply: 10 },
  { name: 'Week 2', open: 42, reply: 15 },
  { name: 'Week 3', open: 38, reply: 12 },
  { name: 'Week 4', open: 65, reply: 34 },
  { name: 'Week 5', open: 85, reply: 50 },
];

export const statCards: StatCard[] = [
  { title: 'Total Emails Sent', value: '12,450', change: '14%', trend: 'up', icon: 'send' },
  { title: 'Avg AI Score', value: '94', suffix: '/100', change: '+2 pts', trend: 'up', icon: 'psychology' },
  { title: 'Open Rate', value: '68.2%', change: '2.5%', trend: 'up', icon: 'mail-open' },
  { title: 'Reply Rate', value: '28.4%', change: '4.1%', trend: 'up', icon: 'reply' },
];

export const emailHistory: EmailHistoryItem[] = [
  {
    id: '1',
    date: 'Today',
    time: '10:42 AM',
    prospectName: 'Elena Rostova',
    prospectInitials: 'EL',
    prospectColor: 'bg-primary/20 text-primary border-primary/30',
    company: 'TechFlow Inc.',
    goal: 'Demo Request',
    aiScore: 98,
    scoreLabel: 'Excellent',
    status: 'Sent',
  },
  {
    id: '2',
    date: 'Yesterday',
    time: '15:20',
    prospectName: 'Marcus Johnson',
    prospectInitials: 'MJ',
    prospectColor: 'bg-tertiary/20 text-tertiary border-tertiary/30',
    company: 'Global Logistics',
    goal: 'Introduction',
    aiScore: 92,
    scoreLabel: 'Good',
    status: 'Draft',
  },
  {
    id: '3',
    date: 'Oct 24',
    time: '09:15 AM',
    prospectName: 'Sarah Williams',
    prospectInitials: 'SW',
    prospectColor: 'bg-secondary/20 text-secondary border-secondary/30',
    company: 'Apex Capital',
    goal: 'Follow-up',
    aiScore: 74,
    scoreLabel: 'Needs Review',
    status: 'Draft',
  },
  {
    id: '4',
    date: 'Oct 23',
    time: '14:00 PM',
    prospectName: 'David Kim',
    prospectInitials: 'DK',
    prospectColor: 'bg-primary/20 text-primary border-primary/30',
    company: 'Nexus Dynamics',
    goal: 'Partnership',
    aiScore: 95,
    scoreLabel: 'Excellent',
    status: 'Sent',
  },
];

export const variants: TemplateVariant[] = [
  {
    id: 'v1',
    title: 'Short Version',
    subtitle: 'High Impact • Low Read Time',
    matchScore: 92,
    icon: 'minimize-2',
    content: [
      'Hi [Name],',
      "Impressed by your recent work on [Project/Repo]. We're scaling our core engineering team at Nexus and your background in distributed systems is exactly what we need.",
      'Open to a quick 10-min chat this week to discuss a potential fit?',
      'Best,',
      '[My Name]'
    ]
  },
  {
    id: 'v2',
    title: 'Executive',
    subtitle: 'Strategic • Value-focused',
    matchScore: 85,
    icon: 'briefcase',
    content: [
      'Hello [Name],',
      "I'm reaching out because Nexus is expanding its leadership in the AI sector, and your strategic oversight at [Company] aligns with our trajectory.",
      "We are building infrastructure that solves [Specific Problem]. I'd value the opportunity to share our vision and explore if there's mutual interest.",
      'Are you available for an exploratory conversation next Tuesday?'
    ]
  },
  {
    id: 'v3',
    title: 'Friendly',
    subtitle: 'Casual • Community-driven',
    matchScore: 0,
    icon: 'hand',
    content: [
      'Hey [Name]! 👋',
      "Came across your profile while looking into the local tech scene and had to reach out. Really love what you've been building over at [Company].",
      "We're assembling a crew here at Nexus to tackle some fun data challenges. No pressure at all, but if you're ever open to grabbing a virtual coffee to talk shop, let me know!"
    ]
  },
  {
    id: 'v4',
    title: 'Follow-up',
    subtitle: 'Persistent • Polite',
    matchScore: 0,
    icon: 'corner-up-left',
    content: [
      'Hi [Name],',
      'Bumping this to the top of your inbox. I know things can get busy.',
      'Are you still the right person to speak with regarding engineering roles at [Company]? If not, could you point me in the right direction?',
      'Thanks again!'
    ]
  }
];
