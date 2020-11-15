import React from "react";
import { connect } from "react-redux";

import { StyledSearchResults } from "./search-results.styles";

import { fetchSearchResults } from "../../redux/api/api.actions";
import { getURL } from "../../redux/api/api.info";
import { selectSearchResults } from "../../redux/search/search.selectors";

import CardsList from "../../components/cards-list/cards-list";
import Spinner from "../../components/spinner/spinner";

class SearchResultsPage extends React.Component {
	state = {
		keyForUpdate: 1,
	};

	startTheSearch = () => {
		const { match, searchMode, fetchSearchResults } = this.props;

		this.query = match.params.query;
		let modeForURL;

		if (searchMode === "movies") {
			modeForURL = "movie";
		} else {
			modeForURL = "tv";
		}

		const url = getURL(modeForURL, 1, "search", this.query);

		fetchSearchResults(url);
	};

	componentDidMount() {
		this.startTheSearch();
	}

	componentDidUpdate(prevProps) {
		if (
			this.props.match.params.query !== prevProps.match.params.query ||
			this.props.searchMode !== prevProps.searchMode
		) {
			this.startTheSearch();
		}
	}

	render() {
		const { searchResults, fetching } = this.props;

		return (
			<StyledSearchResults>
				{fetching ? (
					<Spinner height="55vh" />
				) : (
					<CardsList
						list={searchResults}
						title={`search results for`}
						query={this.query}
						titleSize="smaller"
					/>
				)}
			</StyledSearchResults>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchSearchResults: (url) => {
			dispatch(fetchSearchResults(url));
		},
	};
};

const mapStateToProps = (state) => {
	return {
		searchMode: state.searchbar.searchMode,
		searchResults: selectSearchResults(state),
		fetching: state.search.fetching,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsPage);
