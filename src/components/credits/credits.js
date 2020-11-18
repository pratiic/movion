import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

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

		return (
			<div>
				{fetchingCastAndCrew ? (
					<Spinner height="5rem" />
				) : (
					<div className="cast-and-crew">
						<PersonCardsList list={cast} title={`cast`} />

						<PersonCardsList list={crew} title={`crew`} />
					</div>
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
