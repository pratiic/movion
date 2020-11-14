import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import {
	StyledHeader,
	HeaderContainer,
	StyledLogo,
	StyledMovieIcon,
	StyledTvIcon,
	StyledLoginIcon,
} from "./header.styles";

import { toggleSearchMode } from "../../redux/searchbar/searchbar.actions";

import Searchbar from "../search-bar/search-bar";
import HeaderUtils from "../header-utils/header-utils";
import HeaderLinks from "../header-links/header-links";

class Header extends React.Component {
	constructor() {
		super();

		this.state = {
			headerLinks: [
				{
					value: "movies",
					icon: <StyledMovieIcon />,
					pathname: "movies",
					to: "/movies",
					active: true,
				},

				{
					value: "tv shows",
					icon: <StyledTvIcon />,
					pathname: "tvshows",
					to: "/tvshows",
					active: false,
				},

				{
					value: "sign in",
					icon: <StyledLoginIcon />,
					pathname: "signin",
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

	getSearchInputRef = (inputRef) => {
		this.searchInputRef = inputRef;
	};

	focusSearchInput = () => {
		this.searchInputRef.current.focus();
	};

	componentDidMount() {
		const { location } = this.props;

		this.setState({
			headerLinks: this.state.headerLinks.map((headerLink) => {
				if (location.pathname.includes(headerLink.pathname)) {
					return { ...headerLink, active: true };
				}

				return { ...headerLink, active: false };
			}),
		});
	}

	render() {
		return (
			<StyledHeader>
				<HeaderContainer>
					<Link to="/">
						<StyledLogo
							onClick={() => {
								this.toggleActive("movies");
							}}
						/>
					</Link>

					<Searchbar getSearchInputRef={this.getSearchInputRef} />

					<HeaderUtils focusSearchInput={this.focusSearchInput} />

					<HeaderLinks
						headerLinks={this.state.headerLinks}
						toggleActive={this.toggleActive}
					/>
				</HeaderContainer>
			</StyledHeader>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		showSidebar: state.sidebar.showSidebar,
		showSearchbarOnSmallScreens:
			state.searchbar.showSearchbarOnSmallScreens,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		toggleSearchMode: (newSearchMode) => {
			dispatch(toggleSearchMode(newSearchMode));
		},
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
