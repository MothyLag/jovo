import styled, { keyframes } from "styled-components";

export const AnimateBackground = keyframes`
    0%{background-position:0% 75%}
    50%{background-position:100% 0%}
    100%{background-position:0% 75%}
`;

export const SectionContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(270deg, #f5f0c9, #e0fff8);
  background-size: 400% 400%;
  animation: ${AnimateBackground} 20s ease infinite;
`;
