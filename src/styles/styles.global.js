import { createGlobalStyle } from "styled-components";

import { cssFonts } from "./styles.variables";

export const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        min-height: 100vh;
        font-size: 1.7rem;
        font-family: ${cssFonts.fontStackPrimary};
        background-color: ${({ theme }) => theme.bodyBg};
        color: ${({ theme }) => theme.greyText};
        line-height: 1.45;
    }

    a {
        text-decoration: none;
        color: white;
    }

    li {
        list-style-type: none;
    }
`;
