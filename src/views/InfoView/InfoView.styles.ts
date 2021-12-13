import styled, { keyframes } from "styled-components";

const AppearFromTop = keyframes`
  from{
    opacity: 0;
    transform: translateY(-150px);
  }
  to{
    opaciti:1;
    transform: translateY(0px);
  }
`;

export const AppearFromLeft = keyframes`
    from{
    opacity: 0;
    transform: translateX(-150px);
  }
  to{
    opaciti:1;
    transform: translateX(0px);
  }
`;

export const ParagraphGold = styled.p`
  text-align: center;
  color: #938749;
  margin-top: 2px;
  max-width: 200px;
  font-size: 10px;
  animation: ${AppearFromLeft} 2s ease normal;
`;

export const Title = styled.h1`
  color: #938749;
  font-family: "GreatVibes";
  font-weight: lighter;
  animation: ${AppearFromTop} 2s ease normal;
`;

export const InfoViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;
