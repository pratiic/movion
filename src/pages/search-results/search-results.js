import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import { StyledError, StyledTitle } from "../../styles/styles.generic";
import { cssColors } from "../../styles/styles.variables";
import { StyledSearchResults } from "./search-results.styles";

import { fetchSearchResults } from "../../redux/api/api.actions";
import { getURL } from "../../redux/api/api.info";
import { selectSearchResults } from "../../redux/search/search.selectors";

import { searchModeMap } from "../../utils/utils.components";

import MainCardsList from "../../components/main-cards-list/main-cards-list";
import Spinner from "../../components/spinner/spinner";

const SearchResultsPage = (props) => {
	const { query } = useParams();

	const startTheSearch = () => {
		const { searchMode, fetchSearchResults } = props;

		const mode = searchModeMap[searchMode];

		const url = getURL(mode, 1, "search", query);

		fetchSearchResults(url);
	};

	const renderSearchResults = () => {
		const { searchResults, searchMode } = props;

		const queryStyles = {
			color: cssColors.orangePrimary,
			textTransform: "lowercase",
		};

		if (searchResults.length > 0) {
			return (
				<React.Fragment>
					<StyledTitle size="smaller">
						search results for{" "}
						<span style={queryStyles}>"{query}"</span>
					</StyledTitle>

					<MainCardsList list={searchResults} />
				</React.Fragment>
			);
		} else {
			return (
				<StyledError>
					Sorry, no {searchMode} found for{" "}
					<span style={queryStyles}>"{query}"</span>
				</StyledError>
			);
		}
	};

	useEffect(() => {
		document.title = `Search results for ${query}`;
	}, [query]);

	useEffect(() => {
		startTheSearch();
		// eslint-disable-next-line
	}, [query, props.searchMode]);

	const { fetchingSearchResults } = props;

	return (
		<StyledSearchResults>
			{fetchingSearchResults ? <Spinner /> : renderSearchResults()}
		</StyledSearchResults>
	);
};

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
