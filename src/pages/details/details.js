import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import { StyledDetails } from "./details.styles";
import { StyledMessage } from "../../styles/styles.generic";
import { StyledTitle } from "../../styles/styles.title";
import { WrapperSmall } from "../../styles/styles.wrapper";

import { fetchSimilar } from "../../redux/api/api.actions";
import { getURL } from "../../redux/api/api.info";
import { selectSimilar } from "../../redux/details/details.selectors";
import {
	fetchMoreSimilarStart,
	incrementSimilarFetchPage,
	resetSimilarFetchPage,
} from "../../redux/details/details.actions";

import { renderGenericButton } from "../../utils/utils.components";

import Spinner from "../../components/spinner/spinner";
import MainCardsList from "../../components/main-cards-list/main-cards-list";
import DetailsMain from "../../components/details-main/details-main";
import Credits from "../../components/credits/credits";
import GenericButton from "../../components/generic-button/generic-button";
import ReviewsContainer from "../../components/reviews-container/reviews-container";

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
			similarError,
		} = props;

		if (similarError) {
			return (
				<StyledMessage marginTop="7rem">{similarError}</StyledMessage>
			);
		}

		return fetchingSimilar ? null : (
			<React.Fragment>
				<StyledTitle size="smaller" marginbt="1rem">
					similar {getSearchMode()}
				</StyledTitle>
				{similar.length > 0 ? (
					<React.Fragment>
						<MainCardsList list={similar} />

						{renderGenericButton(
							currentSimilarFetchPage,
							totalSimilarPages,
							<Spinner height="5rem" />,
							<GenericButton
								size="bigger"
								marginbt
								justify="center"
								handleButtonClick={handleButtonClick}
							>
								load more
							</GenericButton>,
							fetchingMoreSimilar
						)}
					</React.Fragment>
				) : (
					<StyledMessage align="center" marginbt>
						Sorry, no similar {getSearchMode()} available right now
					</StyledMessage>
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
				<WrapperSmall>
					<Credits />
					<ReviewsContainer />
				</WrapperSmall>
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
		similarError: state.details.similarError,
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
