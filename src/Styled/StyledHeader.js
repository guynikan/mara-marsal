import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 50px;

  h1 {
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  h2 {
    font-family: Royalacid_o;
    font-size: 3rem;
  }

  ul {
    display: flex;
  }

  ul li a {
    padding: 20px;
    color: #252525;
    text-decoration: none;
  }
`;

export default StyledHeader;
