import { apiActionTypes } from "./api.types";

import { fetchPopularMoviesSuccess } from "../movies/movies.actions";

export const fetchThePopulars = (url, mode) => {
	return (dispatch) => {
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
				if (mode === "movies") {
					dispatch(fetchPopularMoviesSuccess(data));
				}
			});
	};
};
