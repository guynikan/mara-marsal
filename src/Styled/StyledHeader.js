import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 50px 0;
  margin: 0 10%;

  h1, h2 {
  text-align: center;
  }


  h2 {
    font-family: Royalacid_o;
    font-size: 3rem;
    margin: 0 10px;
  }

  nav {
  display: flex;
  justify-content: center;
  }

  ul {
    display: flex;
  }

  ul li {
    margin: 0 5px;
    & a {
      display: block;
      position: relative;
      line-height: 1.4;
      padding-bottom: 3px;
    }
    & img {
      width: auto;
      height: auto;
    }
  }

  @media (max-width: 515px) {
    & {
      justify-content: center;
    }

    h2 {
      margin-top: 10px;
      margin:bottom: 10px;
    }

  h1, h2, nav {
  flex: 1 0 100%;
  }
  }
`;

export default StyledHeader;
