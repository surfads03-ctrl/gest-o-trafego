export interface DiagnosisAnswers {
  segment: string;
  investment: string;
  platform: string;
  goal: string;
  painPoint: string;
}

export interface DiagnosisResult {
  score: number;
  strengths: string[];
  weaknesses: string[];
  recommendation: string;
}

export interface LeadInfo {
  name: string;
  email: string;
  whatsapp: string;
}

export enum ServiceType {
  SALES = 'SALES',
  CPL = 'CPL',
  SCALE = 'SCALE',
  START = 'START'
}