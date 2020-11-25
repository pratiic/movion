import React from "react";
import { connect } from "react-redux";

import { StyledError, StyledTitle } from "../../styles/styles.generic";
import { cssColors } from "../../styles/styles.variables";
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

	renderSearchResults = () => {
		const { searchResults, searchMode } = this.props;

		const queryStyles = {
			color: cssColors.orangePrimary,
			textTransform: "lowercase",
		};

		if (searchResults.length > 0) {
			return (
				<React.Fragment>
					<StyledTitle size="smaller">
						search results for{" "}
						<span style={queryStyles}>"{this.query}"</span>
					</StyledTitle>

					<MainCardsList list={searchResults} />
				</React.Fragment>
			);
		} else {
			return (
				<StyledError>
					Sorry, no {searchMode} found for{" "}
					<span style={queryStyles}>"{this.query}"</span>
				</StyledError>
			);
		}
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
		const { fetchingSearchResults } = this.props;

		return (
			<StyledSearchResults>
				{fetchingSearchResults ? (
					<Spinner />
				) : (
					this.renderSearchResults()
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
