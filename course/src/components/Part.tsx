import type { PartProps } from "../types";

const Part = (props: PartProps) => {
  const assertNever = (param: never): never => {
    throw new Error(
      `Unhandled discriminated union member: ${JSON.stringify(param)}`,
    );
  };

  switch (props.coursePart.kind) {
    case "basic":
      return (
        <>
          <h3>
            {props.coursePart.name} {props.coursePart.exerciseCount}
          </h3>
          <em>{props.coursePart.description}</em>
        </>
      );
    case "background":
      return (
        <>
          <h3>
            {props.coursePart.name} {props.coursePart.exerciseCount}
          </h3>
          <em>{props.coursePart.description}</em>
          <p>submit to {props.coursePart.backgroundMaterial}</p>
        </>
      );
    case "group":
      return (
        <>
          <h3>
            {props.coursePart.name} {props.coursePart.exerciseCount}
          </h3>
          <p>project exercies {props.coursePart.groupProjectCount}</p>
        </>
      );
    case "special":
      return (
        <>
          <h3>
            {props.coursePart.name} {props.coursePart.exerciseCount}
          </h3>
          <em>{props.coursePart.description}</em>
          <p>required skills: {props.coursePart.requirements.join(", ")}</p>
        </>
      );
    default:
      return assertNever(props.coursePart);
  }
};

export default Part;
