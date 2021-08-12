import styled, { css } from "styled-components";

export const StyledProfilePreview = styled.div`
	display: flex;
	align-items: center;
`;

export const Username = styled.p`
	color: ${({ theme }) => theme.textIconBlur};
	font-size: 1.75rem;
	margin-left: 0.75rem;

	${({ size }) =>
		size === "bigger" &&
		css`
			font-size: 1.85rem;
		`}
`;
