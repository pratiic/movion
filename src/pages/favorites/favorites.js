import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { StyledFavoritesPage, VerticalDivider } from "./favorites.styles";
import { StyledTitle } from "../../styles/styles.title";
import { StyledMessage } from "../../styles/styles.generic";

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
		document.title = "Favorites";
	}, []);

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

	const renderList = (list, errorMessage) => {
		return list.length > 0 ? (
			<MainCardsList list={list} forComponent="favorites" />
		) : (
			<StyledMessage> {errorMessage} </StyledMessage>
		);
	};

	return (
		<StyledFavoritesPage>
			{!fetchingFavorites ? (
				<React.Fragment>
					<StyledTitle
						size="smaller"
						align="center"
						marginbt="1.5rem"
					>
						favorite movies <span>({favoriteMovies.length})</span>
					</StyledTitle>
					{/* rendering favorite movies */}
					{renderList(
						favoriteMovies,
						"you do not have any favorite movies"
					)}

					<VerticalDivider></VerticalDivider>

					<StyledTitle
						size="smaller"
						align="center"
						marginbt="1.5rem"
					>
						favorite tv shows{" "}
						<span>({favoriteTvShows.length})</span>
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
