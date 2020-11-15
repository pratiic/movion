import { fetchPopularMoviesSuccess } from "../movies/movies.actions";
import { fetchPopularTvShowsSuccess } from "../tv-shows/tv-shows.actions";
import {
	fetchSearchResultsStart,
	fetchSearchResultsSuccess,
	fetchSearchResultsFailure,
} from "../search/search.actions";

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

		fetchData(url, null, dispatch, fetchSearchResultsSuccess, null);
	};
};
