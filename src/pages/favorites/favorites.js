import React from "react";
import { connect } from "react-redux";

import { StyledFavoritesPage } from "./favorites.styles";

import { StyledTitle, StyledError } from "../../styles/styles.generic";

import { cssColors } from "../../styles/styles.variables";

import {
	selectFavoriteMovies,
	selectFavoriteTvShows,
} from "../../redux/favorites/favorites.selectors";

import MainCardsList from "../../components/main-cards-list/main-cards-list";

class FavoritesPage extends React.Component {
	mutedTextStyles = {
		color: cssColors.greyLighter,
	};

	renderList = (list, errorMessage) => {
		return list.length > 0 ? <MainCardsList list={list} /> : null;
	};

	render() {
		const { favoriteMovies, favoriteTvShows } = this.props;

		return (
			<StyledFavoritesPage>
				{/* <StyledTitle marginbt="2.5rem">your favorites</StyledTitle> */}
				<StyledTitle size="smaller" align="center">
					favorite movies{" "}
					<span style={this.mutedTextStyles}>
						({favoriteMovies.length})
					</span>
				</StyledTitle>
				{this.renderList(
					favoriteMovies,
					"you do not have any favorite movies"
				)}
				<StyledTitle size="smaller" align="center">
					favorite tv shows{" "}
					<span style={this.mutedTextStyles}>
						({favoriteTvShows.length})
					</span>
				</StyledTitle>
				{this.renderList(
					favoriteTvShows,
					"you do not have any favorite tv shows"
				)}
			</StyledFavoritesPage>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		favoriteMovies: selectFavoriteMovies(state),
		favoriteTvShows: selectFavoriteTvShows(state),
	};
};

export default connect(mapStateToProps)(FavoritesPage);
