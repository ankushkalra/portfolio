export interface Project {
  id: number;
  stats: { value: string; label: string }[];
  tags: string[];
  title: string;
  image: string;
  description: string;
  short_description: string;
  bullet_points: string[];
}
