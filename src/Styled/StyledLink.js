import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  color: #252525;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 5px;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    bottom: 0;
    left: 0;
    background: #252525;
    visibility: hidden;
    border-radius: 5px;
    transform: scaleX(0);
    transition: 0.25s linear;
  }

  &:hover:before {
    visibility: visible;
    transform: scaleX(1);
  }
`;

export default StyledLink;
