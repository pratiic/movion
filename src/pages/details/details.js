import React from "react";
import { connect } from "react-redux";

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

class DetailsPage extends React.Component {
	startAsyncOp = () => {
		const { match, fetchSimilar, currentSimilarFetchPage } = this.props;
		const id = match.params.id;
		const type = match.params.type;
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

	handleButtonClick = () => {
		const {
			fetchMoreSimilarStart,
			currentSimilarFetchPage,
			fetchSimilar,
			incrementSimilarFetchPage,
		} = this.props;

		fetchMoreSimilarStart();
		const similarURL = getURL(
			this.props.match.params.type,
			currentSimilarFetchPage + 1,
			"similar",
			null,
			this.props.match.params.id
		);
		fetchSimilar(similarURL, true);
		incrementSimilarFetchPage();
	};

	getSearchMode = () => {
		const { match } = this.props;
		return match.params.type === "movie" ? "movies" : "tv shows";
	};

	renderSimilar = () => {
		const {
			similar,
			fetchingMoreSimilar,
			totalSimilarPages,
			currentSimilarFetchPage,
		} = this.props;

		return (
			<React.Fragment>
				<StyledTitle size="smaller">
					similar {this.getSearchMode()}
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
								handleButtonClick={this.handleButtonClick}
							/>,
							fetchingMoreSimilar
						)}
					</React.Fragment>
				) : (
					<StyledError align="left" marginbt>
						Sorry, no similar {this.getSearchMode()} available right
						now
					</StyledError>
				)}
			</React.Fragment>
		);
	};

	componentDidMount() {
		this.startAsyncOp();
	}

	componentDidUpdate(prevProps) {
		if (this.props.match.params.id !== prevProps.match.params.id) {
			this.startAsyncOp();
		}
	}

	render() {
		const { fetchingSimilar } = this.props;

		return (
			<StyledDetails>
				<DetailsMain />

				<Credits />

				{fetchingSimilar ? (
					<Spinner height="7rem" />
				) : (
					this.renderSimilar()
				)}
			</StyledDetails>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		similar: selectSimilar(state),
		fetchingSimilar: state.details.fetchingSimilar,
		currentSimilarFetchPage: state.details.currentSimilarFetchPage,
		fetchingMoreSimilar: state.details.fetchingMoreSimilar,
		totalSimilarPages: state.details.totalSimilarPages,
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
