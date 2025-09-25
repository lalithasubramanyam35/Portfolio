export interface Skill {
  name: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string[];
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  sourceUrl?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
}