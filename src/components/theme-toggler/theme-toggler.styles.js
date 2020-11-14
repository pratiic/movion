import styled from "styled-components";

import { ReactComponent as SunIcon } from "../../assets/icons/sun.svg";
import { ReactComponent as MoonIcon } from "../../assets/icons/moon.svg";

import { HeaderElementStyles, HeaderIconStyles } from "../header/header.styles";

export const StyledSunIcon = styled(SunIcon)`
	${HeaderElementStyles};
	${HeaderIconStyles};
`;

export const StyledMoonIcon = styled(MoonIcon)`
	${HeaderElementStyles};
	${HeaderIconStyles};
`;
