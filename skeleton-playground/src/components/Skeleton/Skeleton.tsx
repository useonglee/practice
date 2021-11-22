import React, { useMemo } from "react";

import { Props } from "./type";
import { Base, Content } from "./style";

const Skeleton = ({
  width,
  height,
  circle,
  rounded,
  count,
  unit = "px",
  animation = true,
  color = "#F4F4F4",
  style,
}: Props): JSX.Element => {
  const content = useMemo(() => {
    return [...Array({ length: count })].map(() => "-").join("");
  }, [count]);

  return (
    <Base
      width={width}
      height={height}
      circle={circle}
      rounded={rounded}
      unit={unit}
      animation={animation}
      color={color}
      style={style}
    >
      <Content>{content}</Content>
    </Base>
  );
};

export default Skeleton;
