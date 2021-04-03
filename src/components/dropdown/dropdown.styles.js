import styled, { css } from "styled-components";

export const dropdownHeaderStyles = css`
	${({ theme }) =>
		theme &&
		css`
			color: ${theme.textIconBlur};

			&:hover {
				color: ${theme.textFocused};

				svg {
					path {
						fill: ${theme.iconFocused};
					}
				}
			}

			&:active {
				color: ${theme.textIconBlur};

				svg {
					path {
						fill: ${theme.textIconBlur};
					}
				}
			}
		`}
`;

export const StyledDropdown = styled.div`
	position: absolute;
	z-index: 7;
	background-color: ${({ theme }) => theme.bodyBg};
	border-radius: 5px;
	text-transform: lowercase;
	white-space: nowrap;
	box-shadow: 0 0 1.3rem 0 rgba(0, 0, 0, 0.5);

	${({ forComponent }) => {
		if (forComponent === "profile") {
			return css`
				right: 0;
				top: 4rem;
			`;
		} else if (forComponent === "searchbar") {
			return css`
				left: 0.2rem;
				bottom: -8rem;
			`;
		} else if (forComponent === "card") {
			return css`
				bottom: 3.75rem;
				right: 0.7rem;
			`;
		} else if (forComponent === "movieAndTv") {
			return css`
				top: 4rem;
				right: 0;

				& > *:not(:last-child) {
					border-bottom: 1px solid ${({ theme }) => theme.bgFocused};
				}
			`;
		} else if (forComponent === "review") {
			return css`
				top: 3rem;
				right: 1rem;
			`;
		}
	}}

	${({ show }) => {
		if (show) {
			return css`
				display: block;
			`;
		} else {
			return css`
				display: none;
			`;
		}
	}}
`;
