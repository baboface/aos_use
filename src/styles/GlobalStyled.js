import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainStyled = {
  padding: "0 150px",
};

export const GlobalStyled = createGlobalStyle`
    ${reset}

    *{
    box-sizing: border-box;
    }
`;
