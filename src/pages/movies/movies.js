import React, { useEffect } from "react";
import { connect } from "react-redux";

import { StyledMoviesPage } from "./movies.styles";
import { StyledTitle } from "../../styles/styles.generic";

import { getURL } from "../../redux/api/api.info";
import { fetchMoviesOrTvShows } from "../../redux/api/api.actions";
import { selectMovies } from "../../redux/movies/movies.selectors";
import {
	incrementCurrentMoviesFetchPage,
	fetchMoreMoviesStart,
} from "../../redux/movies/movies.actions";

import { renderGenericButton } from "../../components/utils/utils.components";

import Featured from "../../components/featured/featured";
import MainCardsList from "../../components/main-cards-list/main-cards-list";
import GenericButton from "../../components/generic-button/generic-button";
import Spinner from "../../components/spinner/spinner";
import FetchTypeMenu from "../../components/fetch-type-menu/fetch-type-menu";

const MoviesPage = ({
	movies,
	fetchingMovies,
	moviesTotalPages,
	fetchingMoreMovies,
	fetchMoreMoviesStart,
	currentMoviesFetchPage,
	fetchMoviesOrTvShows,
	incrementCurrentMoviesFetchPage,
	moviesFetchType,
}) => {
	const handleButtonClick = () => {
		const url = getURL(
			"movie",
			currentMoviesFetchPage + 1,
			moviesFetchType
		);

		fetchMoreMoviesStart();
		fetchMoviesOrTvShows(url, "movies", true);
		incrementCurrentMoviesFetchPage();
	};

	const startAsyncOp = () => {
		fetchMoviesOrTvShows(
			getURL("movie", currentMoviesFetchPage, moviesFetchType),
			"movies"
		);
	};

	useEffect(() => {
		startAsyncOp();
		// eslint-disable-next-line
	}, [moviesFetchType]);

	return (
		<StyledMoviesPage>
			{fetchingMovies ? (
				<Spinner height="105vh" />
			) : (
				<React.Fragment>
					<Featured featured={movies[0]} />
					<React.Fragment>
						<FetchTypeMenu
							fetchType={moviesFetchType}
							mode="movies"
						/>
						<StyledTitle>{moviesFetchType} movies</StyledTitle>
						<MainCardsList
							marginsmall={fetchingMoreMovies}
							list={movies}
							title="popular movies"
						/>
					</React.Fragment>
					{renderGenericButton(
						currentMoviesFetchPage,
						moviesTotalPages,
						<Spinner height="3.5rem" />,
						<GenericButton
							value="load more"
							size="bigger"
							marginbt
							justify="center"
							handleButtonClick={handleButtonClick}
						/>,
						fetchingMoreMovies
					)}
				</React.Fragment>
			)}
		</StyledMoviesPage>
	);
};

const mapStateToProps = (state) => {
	return {
		currentMoviesFetchPage: state.movies.currentMoviesFetchPage,
		movies: selectMovies(state),
		fetchingMovies: state.movies.fetchingMovies,
		fetchingMoreMovies: state.movies.fetchingMoreMovies,
		moviesTotalPages: state.movies.moviesTotalPages,
		moviesFetchType: state.movies.moviesFetchType,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchMoviesOrTvShows: (url, mode, fetchingMore) => {
			dispatch(fetchMoviesOrTvShows(url, mode, fetchingMore));
		},
		incrementCurrentMoviesFetchPage: () => {
			dispatch(incrementCurrentMoviesFetchPage());
		},
		fetchMoreMoviesStart: () => {
			dispatch(fetchMoreMoviesStart());
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage);
