import styled, { keyframes } from "styled-components";
import photo1 from "../Assets/Photos/photo-1.jpg";
import photo2 from "../Assets/Photos/photo-2.jpg";
import photo3 from "../Assets/Photos/photo-3.jpg";
import illustration1 from "../Assets/Photos/photo-1.png";
import illustration2 from "../Assets/Photos/photo-2.png";
import illustration3 from "../Assets/Photos/photo-3.png";

const ShowIllustration1 = keyframes`
from {
opacity: 0.8;
}
to {
opacity: 1;
background-image: url(${illustration1});
}
`;

const ShowIllustration2 = keyframes`
from {
opacity: 0.8;
}
to {
opacity: 1;
background-image: url(${illustration2});
}
`;

const ShowIllustration3 = keyframes`
from {
opacity: 0.8;
}
to {
opacity: 1;
background-image: url(${illustration3});
}
`;

const StyledEnterGallery = styled.div`
  display: flex;
  margin: 0 100px;
  justify-content: center;
  height: 100vh;
  max-height: calc(100vh - 170px);

  & > div {
    flex: 1;
    overflow: hidden;
    transition: 0.5s;
    margin: 0 10px;
    line-height: 0;
    background-size: cover;
    width: 100%;
    min-height: 100%;
    object-fit: cover;

    &:hover {
      flex: 2 2 300px;
    }

    &:nth-child(1) {
      background-image: url(${photo1});

      &:hover {
        animation: ${ShowIllustration1} 2.5s ease-in-out 1s forwards;
      }
    }

    &:nth-child(2) {
      background-image: url(${photo2});

      &:hover {
        animation: ${ShowIllustration2} 2.5s ease-in-out 1s forwards;
      }
    }

    &:nth-child(3) {
      background-image: url(${photo3});
      background-position: 0 15%;

      &:hover {
        animation: ${ShowIllustration3} 2.5s ease-in-out 1s forwards;
      }
    }
  }
`;

export default StyledEnterGallery;
