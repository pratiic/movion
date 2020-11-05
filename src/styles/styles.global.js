import { createGlobalStyle } from "styled-components";

import { cssFonts, cssColors } from "./styles.variables";

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
        color: white;
    }

    a {
        text-decoration: none;
    }

    li {
        list-style-type: none;
    }
`;
