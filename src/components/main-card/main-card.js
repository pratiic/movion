import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { connect, useDispatch } from "react-redux";

import { StyledMainCard } from "./main-card.styles";
import { StyledDeleteIcon } from "../../styles/styles.icons";

import { resetSimilarFetchPage } from "../../redux/details/details.actions";
import { toggleNotification } from "../../redux/notification/notification.actions";
import { apiInfo } from "../../redux/api/api.info";
import {
	resetModal,
	setHasOptions,
	setModal,
} from "../../redux/modal/modal.actions";

import { renderReleaseDate } from "../../utils/utils.components";
import { deleteFavoriteDocument } from "../../firebase/firebase.utils";

import GenericButton from "../../components/generic-button/generic-button";

//this is the card for movies and tv shows
const MainCard = ({
	id,
	type,
	resetSimilarFetchPage,
	currentUser,
	toggleNotification,
	title,
	releaseDate,
	posterPath,
}) => {
	const history = useHistory();
	const location = useLocation();

	const dispatch = useDispatch();

	const handleRemoveClick = async () => {
		dispatch(
			setModal(
				"are you sure you want to remove this from favorites ?",
				handleFavoriteRemoval
			)
		);
	};

	const handleFavoriteRemoval = async () => {
		dispatch(setHasOptions(false));

		const status = await deleteFavoriteDocument(id, currentUser.id);
		dispatch(resetModal());

		if (status === "success") {
			toggleNotification("removed from favorites", "success");
		}
	};

	const handleCardImageClick = () => {
		//this is called here to reset the current fetch page for similar movies or tv shows to 1
		//before navigating to the details page
		resetSimilarFetchPage();
		history.push(`/details/${type}/${id}`);
	};

	return (
		<StyledMainCard>
			<div
				className="card-image-container"
				onClick={handleCardImageClick}
			>
				<img
					src={`${apiInfo.baseURLs.images}/${posterPath}`}
					alt="poster not available"
				/>
			</div>

			<div className="content-info">
				<p className="content-name">{title}</p>
				<p className="content-release-date">
					{releaseDate
						? renderReleaseDate(releaseDate)
						: "not available"}
				</p>
			</div>

			{location.pathname.includes("favorites") && (
				<GenericButton
					btnType="outlined"
					color="red"
					size="smaller"
					width="full"
					handleButtonClick={handleRemoveClick}
				>
					<StyledDeleteIcon $smallest /> remove
				</GenericButton>
			)}
		</StyledMainCard>
	);
};

const mapStateToProps = (state) => {
	return {
		currentUser: state.currentUser.currentUser,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		resetSimilarFetchPage: () => {
			dispatch(resetSimilarFetchPage());
		},
		toggleNotification: (notificationMessage, notificationType) => {
			dispatch(toggleNotification(notificationMessage, notificationType));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MainCard);
