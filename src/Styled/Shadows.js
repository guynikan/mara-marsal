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
  #Rose {
    opacity: 0;
  }

  &:hover #Rose {
    animation: ${showShadow} 2s ease-out 1s forwards;
  }

  #Green {
    opacity: 0;
  }

  &:hover #Green {
    animation: ${showShadow} 2s ease-out 1.5s forwards;
  }

  #Blue {
    opacity: 0;
  }

  &:hover #Blue {
    animation: ${showShadow} 2s ease-out 2.5s forwards;
  }

  #Purple {
    opacity: 0;
  }

  &:hover #Purple {
    animation: ${showShadow} 2s ease-out 3.5s forwards;
  }
`;

export default Shadows;
