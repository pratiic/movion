import { fetchPopularMoviesSuccess } from "../movies/movies.actions";

import { fetchPopularTvShowsSuccess } from "../tv-shows/tv-shows.actions";

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

export const fetchThePopulars = (url, mode) => {
	return (dispatch) => {
		fetchData(
			url,
			mode,
			dispatch,
			fetchPopularMoviesSuccess,
			fetchPopularTvShowsSuccess
		);
	};
};

export const fetchSearchResults = (url) => {
	return (dispatch) => {
		dispatch(fetchSearchResultsStart());

		fetchData(url, null, dispatch, fetchSearchResultsSuccess);
	};
};

export const fetchDetails = (url) => {
	return (dispatch) => {
		dispatch(fetchMainDetailsStart());

		fetchData(url, null, dispatch, fetchMainDetailsSuccess);
	};
};

export const fetchSimilar = (url) => {
	return (dispatch) => {
		dispatch(fetchSimilarStart());

		fetchData(url, null, dispatch, fetchSimilarSuccess);
	};
};

export const fetchCastAndCrew = (url) => {
	return (dispatch) => {
		dispatch(fetchCastAndCrewStart());

		fetchData(url, null, dispatch, fetchCastAndCrewSuccess);
	};
};
