import styled from "@emotion/styled/macro";
import { keyframes, css } from "@emotion/react";

import { Props } from "./type";

const pulseKeyframes = keyframes`
    0% {
        opacity: 1;
    }

    50% {
        opacity: 0.4;
    }

    100% {
        opacity: 1;
    }
`;

export const pulseAnimation = css`
  animation: ${pulseKeyframes} 1.5s ease-in-out infinite;
`;

export const Base = styled.span<Props>`
  ${({ color }) => color && `background-color: ${color}`};
  ${({ rounded }) => rounded && "border-radius: 8px"};
  ${({ circle }) => circle && "border-radius: 50%"};
  ${({ width, height }) => (width || height) && "display: block"};
  ${({ animation }) => animation && pulseAnimation};
  width: ${({ width, unit }) => width && unit && `${width}${unit}`};
  height: ${({ height, unit }) => height && unit && `${height}${unit}`};
`;

export const Content = styled.span`
  opacity: 0;
`;
