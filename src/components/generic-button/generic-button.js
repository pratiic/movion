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
	resetSimilarFetchPage,
} from "../../redux/details/details.actions";

const GenericButton = (props) => {
	const {
		value,
		func,
		outlined,
		bigger,
		marginbt,
		centered,
		bg,
		color,
		iconClassName,
		darkBg,
		type,
	} = props;

	const history = useHistory();

	const handleButtonClick = () => {
		if (func === "load more movies") {
			const {
				fetchMorePopularMoviesStart,
				popularMoviesFetchPage,
				fetchThePopulars,
				incrementPopularMoviesFetchPage,
			} = props;

			fetchMorePopularMoviesStart();
			fetchThePopulars(
				getURL("movie", popularMoviesFetchPage + 1, "popular"),
				"movies"
			);
			incrementPopularMoviesFetchPage();
		}

		if (func === "load more tv shows") {
			const {
				fetchMorePopularTvShowsStart,
				popularTvShowsFetchPage,
				fetchThePopulars,
				incrementPopularTvShowsFetchPage,
			} = props;

			fetchMorePopularTvShowsStart();
			fetchThePopulars(
				getURL("tv", popularTvShowsFetchPage + 1, "popular"),
				"tv shows"
			);
			incrementPopularTvShowsFetchPage();
		}

		if (func === "view more") {
			const { resetSimilarFetchPage, detailFetchId, type } = props;

			resetSimilarFetchPage();
			history.push(`/details/${type}/${detailFetchId}`);
		}

		if (func === "load more similar") {
			const {
				fetchMoreSimilarStart,
				similarFetchType,
				currentSimilarFetchPage,
				detailId,
				fetchSimilar,
				incrementSimilarFetchPage,
			} = props;

			fetchMoreSimilarStart();
			const similarURL = getURL(
				similarFetchType,
				currentSimilarFetchPage + 1,
				"similar",
				null,
				detailId
			);
			fetchSimilar(similarURL, true);
			incrementSimilarFetchPage();
		}

		if (func === "sign in with google") {
			const { signInWithGoogle } = props;
			signInWithGoogle();
		}
	};

	return (
		<StyledGenericButton
			outlined={outlined}
			bigger={bigger}
			marginbt={marginbt}
			centered={centered}
			bg={bg}
			color={color}
			darkBg={darkBg}
			type={type}
			onClick={handleButtonClick}
		>
			{iconClassName && <i className={iconClassName}></i>} {value}
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
		fetchSimilar: (url, fetchingMore) => {
			dispatch(fetchSimilar(url, fetchingMore));
		},
		fetchMoreSimilarStart: () => {
			dispatch(fetchMoreSimilarStart());
		},
		incrementSimilarFetchPage: () => {
			dispatch(incrementSimilarFetchPage());
		},
		resetSimilarFetchPage: () => {
			dispatch(resetSimilarFetchPage());
		},
	};
};

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(GenericButton)
);
