import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import { StyledDetails } from "./details.styles";
import { StyledError, StyledTitle } from "../../styles/styles.generic";

import { fetchSimilar } from "../../redux/api/api.actions";
import { getURL } from "../../redux/api/api.info";
import { selectSimilar } from "../../redux/details/details.selectors";
import {
	fetchMoreSimilarStart,
	incrementSimilarFetchPage,
	resetSimilarFetchPage,
} from "../../redux/details/details.actions";

import { renderGenericButton } from "../../components/utils/utils.components";

import Spinner from "../../components/spinner/spinner";
import MainCardsList from "../../components/main-cards-list/main-cards-list";
import DetailsMain from "../../components/details-main/details-main";
import Credits from "../../components/credits/credits";
import GenericButton from "../../components/generic-button/generic-button";

const DetailsPage = (props) => {
	const { id, type } = useParams();

	const startAsyncOp = () => {
		const { fetchSimilar, currentSimilarFetchPage } = props;
		const mode = type;
		const similarURL = getURL(
			mode,
			currentSimilarFetchPage,
			"similar",
			null,
			id
		);
		console.log(similarURL);
		fetchSimilar(similarURL);
	};

	const handleButtonClick = () => {
		const {
			fetchMoreSimilarStart,
			currentSimilarFetchPage,
			fetchSimilar,
			incrementSimilarFetchPage,
		} = props;

		fetchMoreSimilarStart();
		const similarURL = getURL(
			type,
			currentSimilarFetchPage + 1,
			"similar",
			null,
			id
		);
		fetchSimilar(similarURL, true);
		incrementSimilarFetchPage();
	};

	const getSearchMode = () => {
		return type === "movie" ? "movies" : "tv shows";
	};

	const renderSimilar = () => {
		const {
			similar,
			fetchingMoreSimilar,
			totalSimilarPages,
			currentSimilarFetchPage,
			fetchingSimilar,
		} = props;

		return fetchingSimilar ? null : (
			<React.Fragment>
				<StyledTitle size="smaller">
					similar {getSearchMode()}
				</StyledTitle>
				{similar.length > 0 ? (
					<React.Fragment>
						<MainCardsList list={similar} />

						{renderGenericButton(
							currentSimilarFetchPage,
							totalSimilarPages,
							<Spinner height="3.5rem" />,
							<GenericButton
								value="load more"
								size="bigger"
								marginbt
								justify="center"
								handleButtonClick={handleButtonClick}
							/>,
							fetchingMoreSimilar
						)}
					</React.Fragment>
				) : (
					<StyledError align="left" marginbt>
						Sorry, no similar {getSearchMode()} available right now
					</StyledError>
				)}
			</React.Fragment>
		);
	};

	useEffect(() => {
		startAsyncOp();
		// eslint-disable-next-line
	}, [id]);

	return (
		<StyledDetails>
			<React.Fragment>
				<DetailsMain />
				<Credits />
				{renderSimilar()}
			</React.Fragment>
		</StyledDetails>
	);
};

const mapStateToProps = (state) => {
	return {
		similar: selectSimilar(state),
		fetchingSimilar: state.details.fetchingSimilar,
		currentSimilarFetchPage: state.details.currentSimilarFetchPage,
		fetchingMoreSimilar: state.details.fetchingMoreSimilar,
		totalSimilarPages: state.details.totalSimilarPages,
		fetchingMainDetails: state.details.fetchingMainDetails,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchSimilar: (url, fetchingMore) => {
			dispatch(fetchSimilar(url, fetchingMore));
		},
		fetchMoreSimilarStart: () => {
			dispatch(fetchMoreSimilarStart());
		},
		incrementSimilarFetchPage: () => {
			dispatch(incrementSimilarFetchPage());
		},
		resetSimilarFetchPage: () => {
			dispatch(resetSimilarFetchPage());
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);
