import React from "react";
import { connect } from "react-redux";

import { StyledMoviesPage } from "./movies.styles";

import { getURL } from "../../redux/api/api.info";
import { fetchThePopulars } from "../../redux/api/api.actions";
import { selectPopularMovies } from "../../redux/movies/movies.selectors";

import Featured from "../../components/featured/featured";
import CardsList from "../../components/cards-list/cards-list";
import GenericButton from "../../components/generic-button/generic-button";
import Spinner from "../../components/spinner/spinner";

class MoviesPage extends React.Component {
	componentDidMount() {
		const { fetchThePopulars, fetchPage } = this.props;

		fetchThePopulars(getURL("movie", fetchPage, "popular"), "movies");
	}

	render() {
		const { popularMovies, fetchingMorePopularMovies } = this.props;

		return (
			<StyledMoviesPage>
				<Featured featured={popularMovies[1]} />

				{popularMovies ? (
					<CardsList
						marginsmall={fetchingMorePopularMovies}
						list={popularMovies}
						title="popular movies"
					/>
				) : (
					<Spinner />
				)}

				{fetchingMorePopularMovies ? (
					<Spinner height="3.5rem" />
				) : (
					<GenericButton
						value="load more"
						func="load more movies"
						bigger
					/>
				)}
			</StyledMoviesPage>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		fetchPage: state.movies.popularMoviesFetchPage,
		popularMovies: selectPopularMovies(state),
		fetchingMorePopularMovies: state.movies.fetchingMorePopularMovies,
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
