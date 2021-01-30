import React from "react";
import { Link, Switch, useLocation } from "react-router-dom";
import instagramLogo from "../Assets/Svg/instagram.svg";
import StyledHeader from "../Styled/StyledHeader";
import StyledLink from "../Styled/StyledLink";

function Header() {
  let location = useLocation();

  return (
    <StyledHeader>
      <h1>
        <StyledLink to="/">Mara Marsal</StyledLink>
      </h1>
      <h2>1971</h2>
      <nav>
        <ul>
          <li>
            <StyledLink
              to={{
                pathname: "/contact",
                state: { background: location },
              }}
            >
              Contact
            </StyledLink>
          </li>
          <li>
            <StyledLink>
              <img src={instagramLogo} alt="instagram" />
            </StyledLink>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
}

export default Header;
