import { createGlobalStyle } from "styled-components";

import { cssColors, cssFonts } from "./styles.variables";

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
        font-size: 1.8rem;
        font-family: ${cssFonts.fontStackPrimary};
        background-color: ${cssColors.greyDark};
        color: white;
    }

    a {
        text-decoration: none;
        color: white;
    }

    li {
        list-style-type: none;
    }
`;
