export interface WorkExperience {
  company: string;
  link: string;
  position: string;
  responsibilities: Responsability[];
  date: string;
}
export interface Responsability {
  responsibility: string;
  oneWordSummary: string;
}
