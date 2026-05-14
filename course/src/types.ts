export interface HeaderProps {
  name: string;
}

interface CoursePart {
  name: string;
  exerciseCount: number;
}

export interface ContentProps {
  courseParts: CoursePart[];
}

export interface TotalProps {
  totalExercises: number;
}
