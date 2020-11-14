import React from "react";
import { connect } from "react-redux";

import { apiInfo } from "../../redux/api/api.info";
import { fetchThePopulars } from "../../redux/api/api.actions";
import { selectPopularMovies } from "../../redux/movies/movies.selectors";

import CardsList from "../../components/cards-list/cards-list";

class MoviesPage extends React.Component {
	componentDidMount() {
		const { fetchThePopulars, fetchPage } = this.props;
		const { baseURLs, language, apiKey } = apiInfo;

		fetchThePopulars(
			`${baseURLs.tmdb}/movie/popular?api_key=${apiKey}&language=${language}&page=${fetchPage}`,
			"movies"
		);
	}

	render() {
		const { popularMovies } = this.props;

		return <CardsList list={popularMovies} title="popular movies" />;
	}
}

const mapStateToProps = (state) => {
	return {
		fetchPage: state.movies.fetchPage,
		popularMovies: selectPopularMovies(state),
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchThePopulars: (url, mode) => {
			dispatch(fetchThePopulars(url, mode));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage);
