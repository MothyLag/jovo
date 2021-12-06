import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  background: linear-gradient(to right, #F8ED99, #FFFF,#FFFF, #F8ED99  );
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Roboto";
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
`;
