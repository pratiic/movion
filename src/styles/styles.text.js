import { css } from "styled-components";

import { WrapperStyles } from "./styles.wrapper";

export const TextStyles = css`
	text-align: ${({ align }) => align || "center"};
	font-weight: 300;
	margin: 0 auto;
	color: white;
`;
