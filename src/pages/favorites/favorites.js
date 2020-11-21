import React from "react";

import { StyledFavoritesPage } from "./favorites.styles";

import { StyledTitle } from "../../styles/styles.generic";

class FavoritesPage extends React.Component {
	render() {
		return (
			<StyledFavoritesPage>
				<StyledTitle>favorites</StyledTitle>
			</StyledFavoritesPage>
		);
	}
}

export default FavoritesPage;
