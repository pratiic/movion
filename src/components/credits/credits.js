import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import { StyledCredits } from "./credits.styles";

import { fetchCastAndCrew } from "../../redux/api/api.actions";
import { getURL } from "../../redux/api/api.info";
import { selectCast, selectCrew } from "../../redux/details/details.selectors";

import PersonCardsList from "../../components/person-cards-list/person-cards-list";
import CardsListToggler from "../../components/cards-list-toggler/cards-list-toggler";

const Credits = ({ fetchCastAndCrew, fetchingCastAndCrew, cast, crew }) => {
	const [showCast, setShowCast] = useState(false);
	const [showCrew, setShowCrew] = useState(false);

	const { id, type } = useParams();

	const startAsyncOp = () => {
		const mode = type;
		const castAndCrewURL = getURL(mode, null, "credits", null, id);
		fetchCastAndCrew(castAndCrewURL);
	};

	const handleTogglerClick = (trigger) => {
		if (trigger === "cast") {
			setShowCast(!showCast);
		} else {
			setShowCrew(!showCrew);
		}
	};

	useEffect(() => {
		startAsyncOp();
		// eslint-disable-next-line
	}, [id]);

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
