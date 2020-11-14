import React from "react";
import { connect } from "react-redux";

import { StyledHeaderLinks, StyledLink } from "./header-links.styles";

import { toggleSearchMode } from "../../redux/searchbar/searchbar.actions";
import { toggleSidebar } from "../../redux/sidebar/sidebar.actions";

const HeaderLinks = ({
	headerLinks,
	showSidebar,
	toggleSearchMode,
	toggleSidebar,
	toggleActive,
}) => {
	const handleLinkClick = (event, linkValue) => {
		toggleActive(linkValue);

		if (linkValue === "movies" || linkValue === "tv shows") {
			toggleSearchMode(linkValue);
		}

		toggleSidebar();
	};

	return (
		<StyledHeaderLinks show={showSidebar}>
			{headerLinks.map((headerLink) => {
				return (
					<StyledLink
						to={headerLink.to}
						key={headerLink.value}
						onClick={(event) => {
							handleLinkClick(event, headerLink.value);
						}}
						$isActive={headerLink.active}
					>
						{" "}
						{showSidebar ? headerLink.icon : null}
						{headerLink.value}
					</StyledLink>
				);
			})}
		</StyledHeaderLinks>
	);
};

const mapStateToProps = (state) => {
	return {
		showSidebar: state.sidebar.showSidebar,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		toggleSearchMode: (newSearchMode) => {
			dispatch(toggleSearchMode(newSearchMode));
		},
		toggleSidebar: () => {
			dispatch(toggleSidebar());
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderLinks);
