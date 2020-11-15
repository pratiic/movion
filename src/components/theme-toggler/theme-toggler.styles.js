import styled from "styled-components";

import { ReactComponent as SunIcon } from "../../assets/icons/sun.svg";
import { ReactComponent as MoonIcon } from "../../assets/icons/moon.svg";

import { HeaderUtilStyles } from "../header-utils/header-utils.styles";

export const StyledSunIcon = styled(SunIcon)`
	${HeaderUtilStyles};
`;

export const StyledMoonIcon = styled(MoonIcon)`
	${HeaderUtilStyles};
`;
