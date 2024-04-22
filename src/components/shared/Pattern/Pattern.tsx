import { FC } from "react";
import { generatePattern } from "../../../../utils/generatePattern";

type PatternProps = {
  title: string;
};

export const Pattern: FC<PatternProps> = ({ title }): JSX.Element => {
  return (
    <div
      className={`time-tracking__list-item-pattern ${generatePattern(title)}`}
    ></div>
  );
};
