import styled from "styled-components";
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
        font-size: 1.7rem;
        font-family: ${cssFonts.fontStackPrimary};
        background-color: ${({ theme }) => theme.bodyBg};
        color: ${({ theme }) => theme.greyText};
        line-height: 1.45;

        &::-webkit-scrollbar {
            width: 1rem;
        }

        &::-webkit-scrollbar-thumb {
            background-color: ${cssColors.greyText};
        }
    }

    a {
        text-decoration: none;
        color: white;
    }

    li {
        list-style-type: none;
    }

    textarea {
        &::-webkit-scrollbar {
		    width: 0.3rem;
	    }

	    &::-webkit-scrollbar-thumb {
		    background-color: ${cssColors.greyText};
	    }      
    }
`;

export const StyledApp = styled.div`
	/* display: grid;
	grid-template-rows: auto 1fr; */
`;
