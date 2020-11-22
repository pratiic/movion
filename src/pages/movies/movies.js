import React from "react";
import { connect } from "react-redux";

import { StyledMoviesPage } from "./movies.styles";

import { StyledTitle } from "../../styles/styles.generic";

import { getURL } from "../../redux/api/api.info";
import { fetchThePopulars } from "../../redux/api/api.actions";
import { selectPopularMovies } from "../../redux/movies/movies.selectors";

import { renderGenericButton } from "../../components/utils/utils.components";

import Featured from "../../components/featured/featured";
import MainCardsList from "../../components/main-cards-list/main-cards-list";
import GenericButton from "../../components/generic-button/generic-button";
import Spinner from "../../components/spinner/spinner";

class MoviesPage extends React.Component {
	componentDidMount() {
		const { fetchThePopulars, popularMoviesFetchPage } = this.props;

		fetchThePopulars(
			getURL("movie", popularMoviesFetchPage, "popular"),
			"movies"
		);
	}

	render() {
		const {
			popularMovies,
			fetchingMorePopularMovies,
			popularMoviesTotalPages,
			popularMoviesFetchPage,
		} = this.props;

		return (
			<StyledMoviesPage>
				<Featured featured={popularMovies[0]} />
				{popularMovies.length > 0 ? (
					<React.Fragment>
						<StyledTitle>popular movies</StyledTitle>
						<MainCardsList
							marginsmall={fetchingMorePopularMovies}
							list={popularMovies}
							title="popular movies"
						/>
					</React.Fragment>
				) : (
					<Spinner />
				)}

				{renderGenericButton(
					popularMoviesFetchPage,
					popularMoviesTotalPages,
					<Spinner height="3.5rem" />,
					<GenericButton
						value="load more"
						func="load more movies"
						bigger
						marginbt
						centered
					/>,
					fetchingMorePopularMovies
				)}
			</StyledMoviesPage>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		popularMoviesFetchPage: state.movies.popularMoviesFetchPage,
		popularMovies: selectPopularMovies(state),
		fetchingMorePopularMovies: state.movies.fetchingMorePopularMovies,
		popularMoviesTotalPages: state.movies.popularMoviesTotalPages,
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
