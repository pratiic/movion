import React from "react";
import { connect } from "react-redux";
import { withRouter, useHistory } from "react-router-dom";

import { StyledGenericButton } from "./generic-button.styles";

import { fetchThePopulars, fetchSimilar } from "../../redux/api/api.actions";
import { getURL } from "../../redux/api/api.info";

import {
	incrementPopularMoviesFetchPage,
	fetchMorePopularMoviesStart,
} from "../../redux/movies/movies.actions";
import {
	incrementPopularTvShowsFetchPage,
	fetchMorePopularTvShowsStart,
} from "../../redux/tv-shows/tv-shows.actions";
import {
	fetchMoreSimilarStart,
	incrementSimilarFetchPage,
} from "../../redux/details/details.actions";

const GenericButton = ({
	value,
	func,
	outlined,
	bigger,
	type,
	fetchThePopulars,
	popularMoviesFetchPage,
	popularTvShowsFetchPage,
	incrementPopularMoviesFetchPage,
	incrementPopularTvShowsFetchPage,
	fetchMorePopularMoviesStart,
	fetchMorePopularTvShowsStart,
	detailFetchId,
	currentSimilarFetchPage,
	fetchSimilar,
	fetchMoreSimilarStart,
	incrementSimilarFetchPage,
	detailId,
	similarFetchType,
}) => {
	const history = useHistory();

	const handleButtonClick = () => {
		if (func === "load more movies") {
			fetchMorePopularMoviesStart();

			fetchThePopulars(
				getURL("movie", popularMoviesFetchPage + 1, "popular"),
				"movies"
			);

			incrementPopularMoviesFetchPage();
		}

		if (func === "load more tv shows") {
			fetchMorePopularTvShowsStart();

			fetchThePopulars(
				getURL("tv", popularTvShowsFetchPage + 1, "popular"),
				"tv shows"
			);

			incrementPopularTvShowsFetchPage();
		}

		if (func === "view more") {
			history.push(`/details/${type}/${detailFetchId}`);
		}

		if (func === "load more similar") {
			fetchMoreSimilarStart();

			const similarURL = getURL(
				similarFetchType,
				currentSimilarFetchPage + 1,
				"similar",
				null,
				Number(detailId)
			);

			fetchSimilar(similarURL, true);

			incrementSimilarFetchPage();
		}
	};

	return (
		<StyledGenericButton
			outlined={outlined}
			bigger={bigger}
			onClick={handleButtonClick}
		>
			{value}
		</StyledGenericButton>
	);
};

const mapStateToProps = (state) => {
	return {
		popularMoviesFetchPage: state.movies.popularMoviesFetchPage,
		popularTvShowsFetchPage: state.tvShows.popularTvShowsFetchPage,
		currentSimilarFetchPage: state.details.currentSimilarFetchPage,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchThePopulars: (url, mode, initial) => {
			dispatch(fetchThePopulars(url, mode, initial));
		},
		incrementPopularMoviesFetchPage: () => {
			dispatch(incrementPopularMoviesFetchPage());
		},
		incrementPopularTvShowsFetchPage: () => {
			dispatch(incrementPopularTvShowsFetchPage());
		},
		fetchMorePopularMoviesStart: () => {
			dispatch(fetchMorePopularMoviesStart());
		},
		fetchMorePopularTvShowsStart: () => {
			dispatch(fetchMorePopularTvShowsStart());
		},
		fetchSimilar: (url) => {
			dispatch(fetchSimilar(url));
		},
		fetchMoreSimilarStart: () => {
			dispatch(fetchMoreSimilarStart());
		},
		incrementSimilarFetchPage: () => {
			dispatch(incrementSimilarFetchPage());
		},
	};
};

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(GenericButton)
);
