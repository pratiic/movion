import React from "react";
import { connect } from "react-redux";

import { StyledGenericButton } from "./generic-button.styles";

import { fetchThePopulars } from "../../redux/api/api.actions";
import { getURL } from "../../redux/api/api.info";

import {
	incrementPopularMoviesFetchPage,
	fetchMorePopularMoviesStart,
} from "../../redux/movies/movies.actions";
import {
	incrementPopularTvShowsFetchPage,
	fetchMorePopularTvShowsStart,
} from "../../redux/tv-shows/tv-shows.actions";

const GenericButton = ({
	value,
	func,
	outlined,
	bigger,
	fetchThePopulars,
	popularMoviesFetchPage,
	popularTvShowsFetchPage,
	incrementPopularMoviesFetchPage,
	incrementPopularTvShowsFetchPage,
	fetchMorePopularMoviesStart,
	fetchMorePopularTvShowsStart,
}) => {
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
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(GenericButton);
