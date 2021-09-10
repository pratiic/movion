import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import { StyledError, StyledMessage } from "../../styles/styles.generic";
import { StyledTitle } from "../../styles/styles.title";
import { cssColors } from "../../styles/styles.variables";
import { StyledSearchResults, Query } from "./search-results.styles";

import { getURL } from "../../redux/api/api.info";

import { searchModeMap } from "../../utils/utils.components";

import MainCardsList from "../../components/main-cards-list/main-cards-list";
import Spinner from "../../components/spinner/spinner";

const SearchResultsPage = ({ searchMode, theme }) => {
	const [searchResults, setSearchResults] = useState([]);
	const [searchError, setSearchError] = useState("");
	const [searching, setSearching] = useState(false);

	const { query } = useParams();

	useEffect(() => {
		startSearch();
		// eslint-disable-next-line
	}, [query, searchMode]);

	useEffect(() => {
		document.title = `Search results for ${query}`;
	}, [query]);

	const startSearch = async () => {
		const mode = searchModeMap[searchMode];

		const url = getURL(mode, 1, "search", query);

		setSearching(true);
		setSearchResults([]);
		setSearchError("");

		try {
			const result = await fetch(url);
			const data = await result.json();

			if (data.results.length > 0) {
				return setSearchResults(data.results);
			}
		} catch (error) {
			setSearchError("something went wrong");
		} finally {
			setSearching(false);
		}
	};

	const renderSearchResults = () => {
		const queryStyles = {
			color: cssColors.orangePrimary,
			textTransform: "lowercase",
		};

		if (searchResults.length > 0) {
			return (
				<React.Fragment>
					<StyledTitle size="smaller">
						search results for <Query>{query}</Query>
					</StyledTitle>

					<MainCardsList list={searchResults} />
				</React.Fragment>
			);
		}

		if (searchError) {
			return <StyledError> {searchError} </StyledError>;
		}

		return (
			<StyledTitle size="smallest" transform="first-letter">
				Sorry, no {searchMode} found for <Query>{query}</Query>
			</StyledTitle>
		);
	};

	return (
		<StyledSearchResults>
			{searching ? (
				<Spinner message={`loading results for ${query}`} />
			) : (
				renderSearchResults()
			)}
		</StyledSearchResults>
	);
};

const mapStateToProps = (state) => {
	return {
		searchMode: state.searchbar.searchMode,
	};
};

export default connect(mapStateToProps)(SearchResultsPage);
