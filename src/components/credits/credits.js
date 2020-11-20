import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { StyledCredits } from "./credits.styles";

import { fetchCastAndCrew } from "../../redux/api/api.actions";
import { getURL } from "../../redux/api/api.info";
import { selectCast, selectCrew } from "../../redux/details/details.selectors";

import Spinner from "../../components/spinner/spinner";
import PersonCardsList from "../../components/person-cards-list/person-cards-list";
import CardsListToggler from "../../components/cards-list-toggler/cards-list-toggler";

class Credits extends React.Component {
	constructor() {
		super();

		this.state = {
			showCast: false,
			showCrew: false,
		};
	}

	startAsyncOp = () => {
		const { match, fetchCastAndCrew } = this.props;
		const id = match.params.id;
		const type = match.params.type;
		const mode = type;
		const castAndCrewURL = getURL(mode, null, "credits", null, id);
		fetchCastAndCrew(castAndCrewURL);
	};

	handleTogglerClick = (trigger) => {
		// this.setState((prevState) => {
		// 	return {
		// 		[`show${trigger}`]: !prevState[`show${trigger}`],
		// 	};
		// });

		if (trigger === "cast") {
			this.setState((prevState) => {
				return {
					showCast: !prevState.showCast,
				};
			});
		} else {
			this.setState((prevState) => {
				return {
					showCrew: !prevState.showCrew,
				};
			});
		}
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
					<StyledCredits>
						<CardsListToggler
							title="cast"
							trigger="cast"
							rotateIconUp={this.state.showCast}
							handleTogglerClick={this.handleTogglerClick}
						/>
						<PersonCardsList
							list={cast}
							show={this.state.showCast}
						/>

						<CardsListToggler
							title="crew"
							trigger="crew"
							rotateIconUp={this.state.showCrew}
							handleTogglerClick={this.handleTogglerClick}
						/>
						<PersonCardsList
							list={crew}
							show={this.state.showCrew}
						/>
					</StyledCredits>
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
