import type { ContentProps } from "../types";

const Content = (props: ContentProps) => {
  return (
    <>
      {props.courseParts.map(({ name, exerciseCount }) => (
        <p key={name}>
          {name} {exerciseCount}
        </p>
      ))}
    </>
  );
};

export default Content;
