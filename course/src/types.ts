export interface HeaderProps {
  name: string;
}

interface CoursePartBase {
  name: string;
  exerciseCount: number;
}

interface CoursePartDescription extends CoursePartBase {
  description: string;
}

interface CoursePartBasic extends CoursePartDescription {
  kind: "basic";
}

interface CoursePartBackground extends CoursePartDescription {
  backgroundMaterial: string;
  kind: "background";
}

interface CoursePartRequirement extends CoursePartDescription {
  requirements: string[];
  kind: "special";
}

interface CoursePartGroup extends CoursePartBase {
  groupProjectCount: number;
  kind: "group";
}

export type CoursePart =
  | CoursePartBasic
  | CoursePartGroup
  | CoursePartBackground
  | CoursePartRequirement;

export interface ContentProps {
  courseParts: CoursePart[];
}

export interface PartProps {
  coursePart: CoursePart;
}

export interface TotalProps {
  totalExercises: number;
}
