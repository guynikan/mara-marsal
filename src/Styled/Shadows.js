import styled, { keyframes } from "styled-components";
import { ReactComponent as ShadowsSVG } from "../Assets/Svg/Shadows.svg";

const showShadow = keyframes`
from {
opacity: 0;
}
to {
opacity: 1;
}
`;

const Shadows = styled(ShadowsSVG)`
  #rose {
    opacity: 0;
  }

  &:hover #rose {
    animation: ${showShadow} 2s ease-out 1s forwards;
  }

  #green {
    opacity: 0;
  }

  &:hover #green {
    animation: ${showShadow} 2s ease-out 1.5s forwards;
  }

  #blue {
    opacity: 0;
  }

  &:hover #blue {
    animation: ${showShadow} 2s ease-out 2.5s forwards;
  }

  #purple {
    opacity: 0;
  }

  &:hover #purple {
    animation: ${showShadow} 2s ease-out 3.5s forwards;
  }
`;

export default Shadows;
