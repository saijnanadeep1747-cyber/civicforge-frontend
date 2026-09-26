export interface Challenge {
  id: string;
  title: string;
  department: string;
  description: string;
  status: string;
  confidenceScore: number;
  readinessIndex: number;
  upvotes: number;
}

export interface Institution {
  id: string;
  name: string;
  type: string;
  activeProjects: number;
  passportBadge: string;
}

export const mockChallenges: Challenge[] = [
  {
    id: '1',
    title: 'AI Smart Traffic Management',
    department: 'Transportation',
    description: 'Automated signal tuning reducing urban congestion using real-time camera telemetry.',
    status: 'Active',
    confidenceScore: 89,
    readinessIndex: 78,
    upvotes: 142,
  },
  {
    id: '2',
    title: 'Civic Water Leakage Sensor Net',
    department: 'Urban Infrastructure',
    description: 'IoT flow monitoring across municipal lines to isolate distribution losses.',
    status: 'In Review',
    confidenceScore: 94,
    readinessIndex: 85,
    upvotes: 98,
  },
  {
    id: '3',
    title: 'Primary Health Clinic Triage System',
    department: 'Healthcare',
    description: 'Predictive patient queuing for rural healthcare primary response units.',
    status: 'Graveyard',
    confidenceScore: 62,
    readinessIndex: 40,
    upvotes: 35,
  },
];

export const mockInstitutions: Institution[] = [
  {
    id: 'inst-1',
    name: 'Indian Institute of Technology (IIT)',
    type: 'Academic Partner',
    activeProjects: 12,
    passportBadge: 'Gold Innovation Partner',
  },
  {
    id: 'inst-2',
    name: 'National Urban Tech Hub',
    type: 'Government Accelerator',
    activeProjects: 8,
    passportBadge: 'Platinum Civic Validator',
  },
  {
    id: 'inst-3',
    name: 'Apex Smart Infra Lab',
    type: 'Industry Research',
    activeProjects: 5,
    passportBadge: 'Silver Technical Sponsor',
  },
];