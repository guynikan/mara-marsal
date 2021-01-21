import React from "react";
import { Link, useLocation } from "react-router-dom";
import instagramLogo from "../Assets/Svg/instagram.svg";
import StyledHeader from "../Styled/StyledHeader";
import Contact from "./Contact";

function Header() {
  let location = useLocation();

  return (
    <StyledHeader>
      <h1>Mara Marsal</h1>
      <h2>1971</h2>
      <nav>
        <ul>
          <Link to={{ pathname: "/contact", state: { background: location } }}>
            Contact
          </Link>
          <li>
            <a href="#">
              <img src={instagramLogo} alt="instagram" />
            </a>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
}

export default Header;
