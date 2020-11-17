import React from "react";
import { connect } from "react-redux";

import { StyledSearchResults } from "./search-results.styles";

import { fetchSearchResults } from "../../redux/api/api.actions";
import { getURL } from "../../redux/api/api.info";
import { selectSearchResults } from "../../redux/search/search.selectors";

import { searchModeMap } from "../../components/utils/utils.components";

import MainCardsList from "../../components/main-cards-list/main-cards-list";
import Spinner from "../../components/spinner/spinner";

class SearchResultsPage extends React.Component {
	startTheSearch = () => {
		const { match, searchMode, fetchSearchResults } = this.props;

		this.query = match.params.query;
		const mode = searchModeMap[searchMode];

		const url = getURL(mode, 1, "search", this.query);

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
		const { searchResults, fetchingSearchResults } = this.props;

		return (
			<StyledSearchResults>
				{fetchingSearchResults ? (
					<Spinner />
				) : (
					<MainCardsList
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
		fetchingSearchResults: state.search.fetchingSearchResults,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsPage);
