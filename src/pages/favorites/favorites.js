import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { StyledFavoritesPage } from "./favorites.styles";
import { StyledTitle } from "../../styles/styles.generic";
import { cssColors } from "../../styles/styles.variables";

import {
	selectFavoriteMovies,
	selectFavoriteTvShows,
} from "../../redux/favorites/favorites.selectors";

import {
	getFavoritesCollectionRef,
	getAllFavoriteDocuments,
} from "../../firebase/firebase.utils";

import MainCardsList from "../../components/main-cards-list/main-cards-list";
import Spinner from "../../components/spinner/spinner";

const FavoritesPage = ({ currentUser }) => {
	const [fetchingFavorites, setFetchingFavorites] = useState(false);
	const [favoriteMovies, setFavoriteMovies] = useState([]);
	const [favoriteTvShows, setFavoriteTvShows] = useState([]);

	useEffect(() => {
		setFetchingFavorites(true);

		getFavoritesCollectionRef(currentUser.id).then((collectionRef) => {
			collectionRef.onSnapshot(async (snapShot) => {
				const favorites = await getAllFavoriteDocuments(currentUser.id);

				setFavoriteMovies(separateIntoTwo(favorites, "movie"));
				setFavoriteTvShows(separateIntoTwo(favorites, "tv"));
			});
		});
		setFetchingFavorites(false);
		//eslint-disable-next-line
	}, []);

	const separateIntoTwo = (list, label) => {
		const requiredList = list.filter((listItem) => listItem.type === label);
		return requiredList;
	};

	const mutedTextStyles = {
		color: cssColors.greyLighter,
	};

	const renderList = (list, errorMessage) => {
		return list.length > 0 ? (
			<MainCardsList list={list} forComponent="favorites" />
		) : null;
	};

	return (
		<StyledFavoritesPage>
			{/* <StyledTitle marginbt="2.5rem">your favorites</StyledTitle> */}
			{!fetchingFavorites ? (
				<React.Fragment>
					<StyledTitle size="smaller" align="center">
						favorite movies{" "}
						<span style={mutedTextStyles}>
							({favoriteMovies.length})
						</span>
					</StyledTitle>
					{/* rendering favorite movies */}
					{renderList(
						favoriteMovies,
						"you do not have any favorite movies"
					)}

					<StyledTitle size="smaller" align="center">
						favorite tv shows{" "}
						<span style={mutedTextStyles}>
							({favoriteTvShows.length})
						</span>
					</StyledTitle>
					{/* rendering favorite tv shows */}
					{renderList(
						favoriteTvShows,
						"you do not have any favorite tv shows"
					)}
				</React.Fragment>
			) : (
				<Spinner height="80vh" />
			)}
		</StyledFavoritesPage>
	);
};

const mapStateToProps = (state) => {
	return {
		currentUser: state.currentUser.currentUser,
		favoriteMovies: selectFavoriteMovies(state),
		favoriteTvShows: selectFavoriteTvShows(state),
	};
};

export default connect(mapStateToProps)(FavoritesPage);
