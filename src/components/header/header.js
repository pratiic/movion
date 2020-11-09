import React from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {
	StyledHeader,
	HeaderContainer,
	StyledLogo,
	HeaderUtils,
	HeaderLinks,
	StyledLink,
	StyledMovieIcon,
	StyledTvIcon,
	StyledLoginIcon,
	StyledSunIcon,
	StyledHeartIcon,
	StyledHamburgerIcon,
	StyledDeleteIcon,
	StyledSearchIcon,
} from "./header.styles";

import Searchbar from "../search-bar/search-bar";

import { toggleSidebar } from "../../redux/sidebar/sidebar.actions";
import { toggleSearchbar } from "../../redux/searchbar/searchbar.actions";

class Header extends React.Component {
	constructor() {
		super();

		this.state = {
			headerLinks: [
				{
					value: "movies",
					icon: <StyledMovieIcon />,
					to: "/",
					active: true,
				},

				{
					value: "tv shows",
					icon: <StyledTvIcon />,
					to: "/tvshows",
					active: false,
				},

				{
					value: "sign in",
					icon: <StyledLoginIcon />,
					to: "/signin",
					active: false,
				},
			],
		};
	}

	toggleActive = (value) => {
		this.setState({
			headerLinks: this.state.headerLinks.map((headerLink) => {
				if (headerLink.value === value) {
					return { ...headerLink, active: true };
				}
				return { ...headerLink, active: false };
			}),
		});
	};

	render() {
		const { toggleSidebar, showSidebar, toggleSearchbar } = this.props;

		return (
			<StyledHeader>
				<HeaderContainer>
					<Link to="/">
						<StyledLogo to="/" />
					</Link>

					<Searchbar />

					<HeaderUtils>
						<StyledHeartIcon smaller="true" />

						<StyledSunIcon smaller="true" />

						<StyledSearchIcon onClick={toggleSearchbar} />

						{showSidebar ? (
							<StyledDeleteIcon
								onClick={toggleSidebar}
							></StyledDeleteIcon>
						) : (
							<StyledHamburgerIcon onClick={toggleSidebar} />
						)}
					</HeaderUtils>

					<HeaderLinks show={showSidebar}>
						{this.state.headerLinks.map((headerLink) => {
							return (
								<StyledLink
									to={headerLink.to}
									key={headerLink.value}
									onClick={() => {
										this.toggleActive(headerLink.value);
									}}
									$isActive={headerLink.active}
								>
									{" "}
									{showSidebar ? headerLink.icon : null}
									{headerLink.value}
								</StyledLink>
							);
						})}
					</HeaderLinks>
				</HeaderContainer>
			</StyledHeader>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		showSidebar: state.sidebar.showSidebar,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		toggleSidebar: () => {
			dispatch(toggleSidebar());
		},
		toggleSearchbar: () => {
			dispatch(toggleSearchbar());
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
