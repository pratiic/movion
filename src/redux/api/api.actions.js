import {
	fetchMoviesStart,
	fetchMoviesSuccess,
	fetchMoviesFailure,
} from "../movies/movies.actions";

import {
	fetchTvShowsStart,
	fetchTvShowsSuccess,
	fetchTvShowsFailure,
} from "../tv-shows/tv-shows.actions";

import {
	fetchMainDetailsStart,
	fetchMainDetailsSuccess,
	fetchMainDetailsFailure,
	fetchSimilarStart,
	fetchSimilarSuccess,
	fetchSimilarFailure,
	fetchCastAndCrewStart,
	fetchCastAndCrewSuccess,
	fetchCastAndCrewFailure,
} from "../details/details.actions";

export const fetchData = async (url, dispatch, action, failureAction) => {
	try {
		const result = await fetch(url);

		const data = await result.json();

		dispatch(action(data));
	} catch (error) {
		if (failureAction)
			dispatch(failureAction("something went wrong, try again"));
	}
};

export const fetchMoviesOrTvShows = (url, mode, fetchingMore) => {
	return (dispatch) => {
		if (mode === "movies") {
			if (!fetchingMore) {
				dispatch(fetchMoviesStart());
			}
			fetchData(url, dispatch, fetchMoviesSuccess, fetchMoviesFailure);
		} else {
			if (!fetchingMore) {
				dispatch(fetchTvShowsStart());
			}
			fetchData(url, dispatch, fetchTvShowsSuccess, fetchTvShowsFailure);
		}
	};
};

export const fetchMainDetails = (url) => {
	return (dispatch) => {
		dispatch(fetchMainDetailsStart());

		fetchData(
			url,
			dispatch,
			fetchMainDetailsSuccess,
			fetchMainDetailsFailure
		);
	};
};

export const fetchSimilar = (url, fetchingMore) => {
	return (dispatch) => {
		if (!fetchingMore) {
			dispatch(fetchSimilarStart());
		}

		fetchData(url, dispatch, fetchSimilarSuccess, fetchSimilarFailure);
	};
};

export const fetchCastAndCrew = (url) => {
	return (dispatch) => {
		dispatch(fetchCastAndCrewStart());

		fetchData(
			url,
			dispatch,
			fetchCastAndCrewSuccess,
			fetchCastAndCrewFailure
		);
	};
};
