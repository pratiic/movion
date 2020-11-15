import React from "react";
import { connect } from "react-redux";

import { getURL } from "../../redux/api/api.info";
import { fetchThePopulars } from "../../redux/api/api.actions";

import { selectPopularTvShows } from "../../redux/tv-shows/tv-shows.selectors";

import Featured from "../../components/featured/featured";
import CardsList from "../../components/cards-list/cards-list";
import GenericButton from "../../components/generic-button/generic-button";
import Spinner from "../../components/spinner/spinner";

class TvShowsPage extends React.Component {
	componentDidMount() {
		const { fetchThePopulars, fetchPage } = this.props;

		fetchThePopulars(getURL("tv", fetchPage, "popular"), "tv shows");
	}

	render() {
		const { popularTvShows, fetchingMorePopularTvShows } = this.props;

		return (
			<>
				<Featured featured={popularTvShows[1]} />
				<CardsList list={popularTvShows} title="popular tv shows" />
				{fetchingMorePopularTvShows ? (
					<Spinner height="3.5rem" />
				) : (
					<GenericButton
						value="load more"
						func="load more tv shows"
						bigger
					/>
				)}
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		fetchPage: state.tvShows.popularTvShowsFetchPage,
		popularTvShows: selectPopularTvShows(state),
		fetchingMorePopularTvShows: state.tvShows.fetchingMorePopularTvShows,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchThePopulars: (url, mode) => {
			dispatch(fetchThePopulars(url, mode));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TvShowsPage);
