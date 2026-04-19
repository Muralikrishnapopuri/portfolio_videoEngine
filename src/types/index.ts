export type Project = {
  id: string;
  title: string;
  date: string;
  description: string;
  stack: string[];
  liveUrl: string;
  sourceUrl?: string;
  image: string;
};

export type Job = {
  id: string;
  company: string;
  role: string;
  duration: string;
  location?: string;
  type?: "full-time" | "internship" | "freelance";
  isPrimary?: boolean;
  project?: string;
  stack?: string[];
  achievements?: string[];
  highlights?: string;
  certificateUrl?: string;
};

export type Skill = {
  name: string;
  icon?: string;
  context: string;
  category: "frontend" | "backend" | "tools";
};

export type RestoSoftModule = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  image: string;
};