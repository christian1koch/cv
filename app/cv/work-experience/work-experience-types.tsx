export interface WorkExperience {
  company: string;
  id: string;
  position: string;
  responsibilities: Responsability[];
  date: string;
}
export interface Responsability {
  responsibility: string;
  oneWordSummary: string;
}
