import styled from "styled-components";

import { cssColors } from "../../styles/styles.variables";

export const StyledNotification = styled.div`
	font-size: 1.7rem;
	text-transform: capitalize;
	font-weight: 300;
	position: fixed;
	left: 50%;
	transform: translateX(-50%);
	top: 8rem;
	z-index: 10;
	padding: 0.4rem 1.2rem;
	background-color: ${cssColors.orangePrimary};
	border-radius: 5px;
	box-shadow: 0 0 0.8rem 0 rgba(0, 0, 0, 0.4);
`;
