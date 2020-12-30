import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { StyledDetailsController } from "./details-controller.styles";

import { toggleNotification } from "../../redux/notification/notification.actions";

const DetailsController = ({
	icon,
	value,
	forComponent,
	currentUser,
	toggleNotification,
	jobDone,
	handleDetailsControllerClick,
	toggleDropdown,
}) => {
	const history = useHistory();

	return (
		<StyledDetailsController
			forComponent={forComponent}
			jobDone={jobDone}
			onClick={() => {
				if (handleDetailsControllerClick) {
					if (!currentUser) {
						history.push("/signin");
						toggleNotification(
							"you need to sign in first",
							"failure"
						);
					} else {
						handleDetailsControllerClick();
					}
				}

				if (toggleDropdown) {
					toggleDropdown();
				}
			}}
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailsController);
