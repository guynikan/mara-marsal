import React from "react";
import instagramLogo from "../Assets/Svg/instagram.svg";
import StyledHeader from "../Styled/StyledHeader";

function Header() {
  return (
    <StyledHeader>
      <h1>Mara Marsal</h1>
      <h2>1971</h2>
      <nav>
        <ul>
          <li>
            <a href="#">CONTACT</a>
          </li>
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
