import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { StyledTitle } from "../../styles/styles.generic";
import { cssColors } from "../../styles/styles.variables";

import { fetchCastAndCrew } from "../../redux/api/api.actions";
import { getURL } from "../../redux/api/api.info";
import { selectCast, selectCrew } from "../../redux/details/details.selectors";

import Spinner from "../../components/spinner/spinner";
import PersonCardsList from "../../components/person-cards-list/person-cards-list";

class Credits extends React.Component {
	startAsyncOp = () => {
		const { match, fetchCastAndCrew } = this.props;
		const id = match.params.id;
		const type = match.params.type;
		const mode = type;
		const castAndCrewURL = getURL(mode, null, "credits", null, id);
		fetchCastAndCrew(castAndCrewURL);
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
		const { fetchingCastAndCrew, cast, crew } = this.props;

		const mutedStyles = {
			color: cssColors.greyLighter,
		};

		return (
			<div>
				{fetchingCastAndCrew ? (
					<Spinner height="5rem" />
				) : (
					<React.Fragment>
						<StyledTitle size="smaller" align="left">
							cast{" "}
							<span style={mutedStyles}>({cast.length})</span>
						</StyledTitle>
						<PersonCardsList list={cast} title={`cast`} />

						<StyledTitle size="smaller" align="left">
							crew{" "}
							<span style={mutedStyles}>({crew.length})</span>
						</StyledTitle>
						<PersonCardsList list={crew} title={`crew`} />
					</React.Fragment>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		fetchingCastAndCrew: state.details.fetchingCastAndCrew,
		cast: selectCast(state),
		crew: selectCrew(state),
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchCastAndCrew: (url) => {
			dispatch(fetchCastAndCrew(url));
		},
	};
};

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(Credits)
);