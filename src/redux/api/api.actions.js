import { fetchMoviesStart, fetchMoviesSuccess } from "../movies/movies.actions";

import {
	fetchTvShowsStart,
	fetchTvShowsSuccess,
} from "../tv-shows/tv-shows.actions";

import {
	fetchSearchResultsStart,
	fetchSearchResultsSuccess,
} from "../search/search.actions";

import {
	fetchMainDetailsStart,
	fetchMainDetailsSuccess,
	fetchSimilarStart,
	fetchSimilarSuccess,
	fetchCastAndCrewStart,
	fetchCastAndCrewSuccess,
} from "../details/details.actions";

export const fetchData = (url, mode, dispatch, actionOne, actionTwo) => {
	fetch(url)
		.then((response) => {
			if (
				response.ok &&
				response.headers
					.get("Content-Type")
					.includes("application/json")
			) {
				return response.json();
			}
		})
		.then((data) => {
			if (mode) {
				if (mode === "movies") {
					dispatch(actionOne(data));
				} else {
					dispatch(actionTwo(data));
				}
			} else {
				dispatch(actionOne(data));
			}
		});
};

export const fetchMoviesOrTvShows = (url, mode, fetchingMore) => {
	return (dispatch) => {
		if (!fetchingMore) {
			if (mode === "movies") {
				dispatch(fetchMoviesStart());
			} else {
				dispatch(fetchTvShowsStart());
			}
		}

		fetchData(url, mode, dispatch, fetchMoviesSuccess, fetchTvShowsSuccess);
	};
};

export const fetchSearchResults = (url) => {
	return (dispatch) => {
		dispatch(fetchSearchResultsStart());

		fetchData(url, null, dispatch, fetchSearchResultsSuccess);
	};
};

export const fetchMainDetails = (url) => {
	return (dispatch) => {
		dispatch(fetchMainDetailsStart());

		fetchData(url, null, dispatch, fetchMainDetailsSuccess);
	};
};

export const fetchSimilar = (url, fetchingMore) => {
	return (dispatch) => {
		if (!fetchingMore) {
			dispatch(fetchSimilarStart());
		}

		fetchData(url, null, dispatch, fetchSimilarSuccess);
	};
};

export const fetchCastAndCrew = (url) => {
	return (dispatch) => {
		dispatch(fetchCastAndCrewStart());

		fetchData(url, null, dispatch, fetchCastAndCrewSuccess);
	};
};
