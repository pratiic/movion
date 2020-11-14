import React from "react";
import { connect } from "react-redux";

import { StyledGenericButton } from "./generic-button.styles";

import { fetchThePopulars } from "../../redux/api/api.actions";
import { apiInfo } from "../../redux/api/api.info";

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
		const { baseURLs, apiKey, language } = apiInfo;

		if (func === "load more movies") {
			fetchMorePopularMoviesStart();

			fetchThePopulars(
				`${
					baseURLs.tmdb
				}/movie/popular?api_key=${apiKey}&language=${language}&page=${
					popularMoviesFetchPage + 1
				}`,
				"movies",
				false
			);

			incrementPopularMoviesFetchPage();
		}

		if (func === "load more tv shows") {
			fetchMorePopularTvShowsStart();

			fetchThePopulars(
				`${
					baseURLs.tmdb
				}/tv/popular?api_key=${apiKey}&language=${language}&page=${
					popularTvShowsFetchPage + 1
				}`,
				"tv shows",
				false
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
