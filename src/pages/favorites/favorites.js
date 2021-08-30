import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";

import { StyledFavoritesPage, VerticalDivider } from "./favorites.styles";
import { StyledTitle } from "../../styles/styles.title";
import { StyledMessage } from "../../styles/styles.generic";

import { setFavorites } from "../../redux/favorites/favorites.actions";

import { getFavoritesCollectionRef } from "../../firebase/firebase.utils";

import MainCardsList from "../../components/main-cards-list/main-cards-list";
import Spinner from "../../components/spinner/spinner";

const FavoritesPage = ({ currentUser, favoriteMovies, favoriteTvShows }) => {
	const [fetchingFavorites, setFetchingFavorites] = useState(false);

	const dispatch = useDispatch();

	useEffect(() => {
		document.title = "Favorites";
	}, []);

	useEffect(() => {
		setFetchingFavorites(true);

		getFavoritesCollectionRef(currentUser.id).then((collectionRef) => {
			collectionRef.onSnapshot(async (snapshot) => {
				setFetchingFavorites(false);

				const favorites = snapshot.docs.map((doc) => doc.data());

				dispatch(setFavorites(favorites));
			});
		});
		//eslint-disable-next-line
	}, []);

	const renderList = (list, type) => {
		if (list.length > 0) {
			return <MainCardsList list={list} forComponent="favorites" />;
		}

		return <StyledMessage> you have no favorite {type} </StyledMessage>;
	};

	return (
		<StyledFavoritesPage>
			{!fetchingFavorites ? (
				<React.Fragment>
					<StyledTitle size="smaller" align="center" marginbt="1rem">
						favorite movies <span>({favoriteMovies.length})</span>
					</StyledTitle>
					{renderList(favoriteMovies, "movies")}

					<VerticalDivider></VerticalDivider>

					<StyledTitle size="smaller" align="center" marginbt="1rem">
						favorite tv shows{" "}
						<span>({favoriteTvShows.length})</span>
					</StyledTitle>
					{renderList(favoriteTvShows, "tv shows")}
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
		favoriteMovies: state.favorites.favoriteMovies,
		favoriteTvShows: state.favorites.favoriteTvShows,
	};
};

export default connect(mapStateToProps)(FavoritesPage);
