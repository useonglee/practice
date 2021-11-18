import React from "react";

import { Container, TitleWrapper, BodyWrapper } from "../Item/style";
import Skeleton from "../Skeleton/Skeleton";

const Placeholder = (): JSX.Element => {
  return (
    <Container>
      <TitleWrapper>
        <Skeleton width={"100%"} height={"50px"} />
      </TitleWrapper>
      <BodyWrapper>
        <Skeleton width={"100%"} height={"50px"} />
      </BodyWrapper>
    </Container>
  );
};

export default Placeholder;
