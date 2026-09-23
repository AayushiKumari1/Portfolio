export const PROFILE = {
  name: 'Aayushi Kumari',
  email: 'aayushi.kumari.0307@gmail.com',
  github: 'https://github.com/AayushiKumari1',
  linkedin: 'https://www.linkedin.com/in/aayushi-kumari-a52465302',
  // Your photo: put the image in the `public` folder (for example public/profile.jpg) and set photo: '/profile.jpg'
  photo: '/photo.jpg',
};

export const NAV = [
  { id: 'top', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export const ROLES = ['Full-Stack Developer', 'MERN Stack Developer', 'Problem Solver'];

export const HERO_CODE = `const aayushi = {
  role: "Full-Stack Developer",
  stack: ["MongoDB", "Express", "React", "Node.js"],
  builds: ["Stripe", "Gemini AI", "WebRTC"],
  education: "B.E. Computer Engineering, 2026",
  openTo: "SWE and full-stack roles",
};`;

export const FLOATING = ['react', 'nodejs', 'mongodb', 'stripe'];

export const MARQUEE = [
  ['java', 'Java'], ['python', 'Python'], ['javascript', 'JavaScript'], ['typescript', 'TypeScript'],
  ['react', 'React'], ['nodejs', 'Node.js'], ['express', 'Express.js'], ['mongodb', 'MongoDB'],
  ['mysql', 'MySQL'], ['tailwind', 'TailwindCSS'], ['html5', 'HTML5'], ['css3', 'CSS3'],
  ['mui', 'Material-UI'], ['vite', 'Vite'], ['postman', 'Postman'], ['github', 'GitHub'],
  ['socketio', 'Socket.io'], ['stripe', 'Stripe'], ['gemini', 'Gemini AI'], ['webrtc', 'WebRTC'],
];

export const ABOUT = [
  "I'm a Computer Engineering graduate who likes building whole products, from the screen a user sees to the API, database and billing logic behind it.",
  "My projects cover Stripe subscription billing, receipt scanning with Gemini AI and peer-to-peer video calls over WebRTC. I'm looking for my first software engineering role on a team that runs code reviews, mentors newer engineers, works in Agile sprints and gives me room to learn cloud and system design.",
];

export const STATS = [
  { value: 8.72, decimals: 2, label: 'CGPA out of 10' },
  { value: 300, suffix: '+', label: 'DSA problems solved' },
];

export const PROJECTS = [
  {
    id: 'finance',
    title: 'AI-Powered Finance SaaS Platform',
    kind: 'Full-stack SaaS with subscription billing',
    description:
      'A finance management platform for tracking income, expenses and recurring transactions, with AI receipt scanning and Stripe billing.',
    tech: [
      ['react', 'React'], ['typescript', 'TypeScript'], ['nodejs', 'Node.js'], ['mongodb', 'MongoDB'],
      ['gemini', 'Gemini AI'], ['stripe', 'Stripe'],
    ],
    highlights: [
      'Scans receipts with Gemini AI and extracts transaction details automatically, so entering an expense takes less typing and fewer mistakes.',
      'Built MongoDB aggregation pipelines and interactive charts for date-filtered analytics, spending breakdowns and income versus expense trends.',
      'Automated recurring transactions and monthly report emails with cron jobs.',
      'Added Stripe subscriptions with free trials, monthly and yearly plans, upgrades and webhook-based payment management.',
    ],
    file: 'financeService.ts',
    code: `import { gemini, db, stripe } from '@/core'

class FinanceService {
  async addReceipt(image: Buffer) {
    // Scan the receipt, then save the transaction
    const data = await gemini.extract(image);
    return db.transactions.create(data);
  }
}`,
  },
  {
    id: 'video',
    title: 'React Video Chat App',
    kind: 'Real-time peer-to-peer video calling',
    description:
      'A video calling app with real-time signaling and reliable call setup across different networks.',
    tech: [
      ['react', 'React'], ['nodejs', 'Node.js'], ['express', 'Express.js'], ['socketio', 'Socket.io'],
      ['webrtc', 'WebRTC'], ['mui', 'Material-UI'],
    ],
    highlights: [
      'Streams audio and video directly between connected users with WebRTC.',
      'Creates rooms and connects calls in real time using Socket.io signaling.',
      'Handles ICE candidate exchange and peer disconnects so calls set up reliably on different networks.',
      'Uses UUIDs to give every stored entry a unique ID and prevent collisions.',
    ],
    file: 'signaling.js',
    code: `io.on('connection', (socket) => {
  // Relay WebRTC offers between two peers
  socket.on('callUser', ({ to, offer }) => {
    io.to(to).emit('incomingCall', { offer });
  });
});`,
  },
];

export const SKILL_GROUPS = {
  Languages: [
    { icon: 'java', label: 'Java' }, { icon: 'python', label: 'Python' },
    { icon: 'javascript', label: 'JavaScript' }, { icon: 'typescript', label: 'TypeScript' },
  ],
  Frontend: [
    { icon: 'react', label: 'React' }, { icon: 'vite', label: 'Vite' }, { icon: 'tailwind', label: 'TailwindCSS' },
    { icon: 'html5', label: 'HTML5' }, { icon: 'css3', label: 'CSS3' }, { icon: 'mui', label: 'Material-UI' },
  ],
  Backend: [
    { icon: 'nodejs', label: 'Node.js' }, { icon: 'express', label: 'Express.js' }, { icon: 'rest', label: 'REST APIs' },
  ],
  Databases: [
    { icon: 'mongodb', label: 'MongoDB' }, { icon: 'mysql', label: 'MySQL' },
  ],
  Integrations: [
    { icon: 'stripe', label: 'Stripe' }, { icon: 'gemini', label: 'Gemini AI' },
    { icon: 'socketio', label: 'Socket.io' }, { icon: 'webrtc', label: 'WebRTC' },
  ],
  Tools: [
    { icon: 'vscode', label: 'VS Code' }, { icon: 'postman', label: 'Postman API' },
    { icon: 'mongodb', label: 'MongoDB Atlas' }, { icon: 'netbeans', label: 'Apache NetBeans' },
    { icon: 'terminal', label: 'Command Line' }, { icon: 'github', label: 'GitHub' },
  ],
  Core: [
    { glyph: 'OOP', label: 'Object-Oriented Programming' },
    { glyph: 'DSA', label: 'Data Structures and Algorithms' },
  ],
};

export const ACHIEVEMENTS = [
  {
    icon: 'code',
    title: '300+ problems solved',
    text: 'Practiced data structures and algorithms across LeetCode, GeeksforGeeks and Coding Ninjas.',
    meta: 'LeetCode: AayushiKumari1. GeeksforGeeks: aayushiz3fp. Coding Ninjas: Aayushi Kumari.',
  },
  {
    icon: 'postman',
    title: 'Postman API Fundamentals Student Expert',
    text: 'Certified by Postman for proficiency in API testing.',
  },
  {
    icon: 'java',
    title: 'Java Programming Certification',
    text: 'Completed a comprehensive Udemy course covering core Java concepts.',
  },
  {
    icon: 'grad',
    title: 'CGPA 8.72 / 10',
    text: 'Graduated in July 2026 with a B.E. in Computer Engineering.',
  },
];

export const EDUCATION = [
  {
    title: 'B.E. Computer Engineering',
    place: 'Sinhgad College of Engineering, Pune',
    when: 'Nov 2022 to July 2026',
    score: 'CGPA 8.72 / 10',
    current: true,
  },
  {
    title: 'Senior School Certificate, CBSE (12th)',
    place: 'Kendriya Vidyalaya AFS, Ojhar, Nashik',
    when: 'Completed 2022',
    score: '86.2%',
  },
  {
    title: 'Secondary School Examination, CBSE (10th)',
    place: 'Kendriya Vidyalaya AFS, Ojhar, Nashik',
    when: 'Completed 2020',
    score: '89%',
  },
];
