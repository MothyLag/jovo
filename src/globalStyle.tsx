import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Roboto";
  width:100vw;
  height:100vh;
  overflow-y: hidden;
}
@font-face{
  font-family: 'Roboto';
  font-style: normal;
  font-weight: normal;
  src: url('${process.env.PUBLIC_URL}/Fonts/Roboto/Roboto-Regular.ttf');
}
@font-face{
  font-family: 'Roboto Bold';
  font-style: normal;
  font-weight: normal;
  src: url('${process.env.PUBLIC_URL}/fonts/Roboto/Roboto-Bold.ttf');
}
@font-face{
  font-family: 'Roboto Thin Italic';
  font-style: normal;
  font-weight: normal;
  src: url('${process.env.PUBLIC_URL}/fonts/Roboto/Roboto-ThinItalic.ttf');
}
@font-face{
  font-family: 'GreatVibes';
  font-style: normal;
  font-weight: normal;
  src: url('${process.env.PUBLIC_URL}/fonts/Great_Vibes/GreatVibes-Regular.ttf');
}
`;
