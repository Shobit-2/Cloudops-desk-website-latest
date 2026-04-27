export interface NavLink {
  label: string;
  href: string;
}

export enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}

export interface EngagementCardProps {
  title: string;
  description: string;
  features: string[];
  isHighlighted?: boolean;
}

export enum ServiceType {
  DEVOPS = 'DevOps Implementation',
  CLOUD_MIGRATION = 'Cloud Migration',
  K8S_MANAGEMENT = 'Kubernetes Management',
  SECURITY_AUDIT = 'Security Audit',
  CI_CD_PIPELINE = 'CI/CD Pipelines',
  TRAINING = 'Corporate Training',
  INTERVIEW_PREP = 'Interview Preparation',
  JOB_SUPPORT = 'On-Job Support',
  PROFILE_MARKETING = 'Profile Marketing (Resume + LinkedIn)',
  CAREER_SWITCH = 'Career Switch & Growth Training',
  INTERVIEW_SUPPORT = 'Interview Support Services',
}
