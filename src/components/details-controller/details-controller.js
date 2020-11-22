import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { StyledDetailsController } from "./details-controller.styles";

import { toggleNotification } from "../../redux/notification/notification.actions";

const DetailsController = ({
	icon,
	value,
	forComponent,
	func,
	addToFavorites,
	toggleDropdown,
	currentUser,
	history,
	toggleNotification,
	jobDone,
}) => {
	const handleDetailsControllerClick = () => {
		if (toggleDropdown) {
			toggleDropdown();
		}

		if (func === "add to favorites") {
			if (!currentUser) {
				history.push("/signin");
				toggleNotification("you need to sign in first", "failure");
			} else {
				addToFavorites();
			}
		}
	};

	return (
		<StyledDetailsController
			forComponent={forComponent}
			jobDone={jobDone}
			onClick={handleDetailsControllerClick}
		>
			{icon} {value}
		</StyledDetailsController>
	);
};

const mapStateToProps = (state) => {
	return {
		currentUser: state.currentUser.currentUser,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		toggleNotification: (notificationMessage, notificationType) => {
			dispatch(toggleNotification(notificationMessage, notificationType));
		},
	};
};

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(DetailsController)
);
