import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import { StyledCredits } from "./credits.styles";

import { fetchCastAndCrew } from "../../redux/api/api.actions";
import { getURL } from "../../redux/api/api.info";
import { selectCast, selectCrew } from "../../redux/details/details.selectors";

import Spinner from "../../components/spinner/spinner";
import PersonCardsList from "../../components/person-cards-list/person-cards-list";
import CardsListToggler from "../../components/cards-list-toggler/cards-list-toggler";

const Credits = (props) => {
	const [showCast, setShowCast] = useState(false);
	const [showCrew, setShowCrew] = useState(false);

	const { id, type } = useParams();

	const startAsyncOp = () => {
		const { fetchCastAndCrew } = props;
		const mode = type;
		const castAndCrewURL = getURL(mode, null, "credits", null, id);
		fetchCastAndCrew(castAndCrewURL);
	};

	const handleTogglerClick = (trigger) => {
		// setState((prevState) => {
		// 	return {
		// 		[`show${trigger}`]: !prevState[`show${trigger}`],
		// 	};
		// });

		if (trigger === "cast") {
			setShowCast(!showCast);
		} else {
			setShowCrew(!showCrew);
		}
	};

	useEffect(() => {
		startAsyncOp();
	}, [id]);

	const { fetchingCastAndCrew, cast, crew } = props;

	return (
		<div>
			{fetchingCastAndCrew ? null : (
				<StyledCredits>
					<CardsListToggler
						title="cast"
						trigger="cast"
						rotateIconUp={showCast}
						handleTogglerClick={handleTogglerClick}
					/>
					<PersonCardsList list={cast} show={showCast} />

					<CardsListToggler
						title="crew"
						trigger="crew"
						rotateIconUp={showCrew}
						handleTogglerClick={handleTogglerClick}
					/>
					<PersonCardsList list={crew} show={showCrew} />
				</StyledCredits>
			)}
		</div>
	);
};

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

export default connect(mapStateToProps, mapDispatchToProps)(Credits);
