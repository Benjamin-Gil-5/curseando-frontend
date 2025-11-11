export interface Course {
  id: number;
  title: string;
  instructor: string;
  durationHours: number;
  difficulty: string;
  capacity: number;
  enrolledCount: number;
  description: string;
  modules?: string;
}
