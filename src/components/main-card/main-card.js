import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import { StyledMainCard } from "./main-card.styles";
import { cssColors } from "../../styles/styles.variables";
import { StyledDeleteIcon, StyledDotMenuIcon } from "../../styles/styles.icons";

import { resetSimilarFetchPage } from "../../redux/details/details.actions";
import { toggleNotification } from "../../redux/notification/notification.actions";
import {
	selectFavoriteMovies,
	selectFavoriteTvShows,
} from "../../redux/favorites/favorites.selectors";
import { apiInfo } from "../../redux/api/api.info";

import { renderReleaseDate } from "../../utils/utils.components";
import {
	addToFavorites,
	showAddedToFavoritesNotification,
} from "../../utils/utils.favorites";
import { renderDetailsController } from "../../utils/utils.details-controller";

import { deleteFavoriteDocument } from "../../firebase/firebase.utils";

import Dropdown from "../../components/dropdown/dropdown";
import GenericButton from "../../components/generic-button/generic-button";

//this is the card for movies and tv shows
const MainCard = (props) => {
	const [showDropdown, setShowDropdown] = useState(false);

	const history = useHistory();

	const handleButtonClick = () => {
		removeFromFavorites();
	};

	const handleCardImageClick = () => {
		const { id, type, resetSimilarFetchPage } = props;

		//this is called here to reset the current fetch page for similar movies or tv shows to 1
		//before navigating to the details page
		resetSimilarFetchPage();
		history.push(`/details/${type}/${id}`);
	};

	const handleDetailsControllerClick = async () => {
		const {
			id,
			currentUser,
			title,
			releaseDate,
			posterPath,
			type,
			toggleNotification,
		} = props;

		const status = await addToFavorites({
			id,
			currentUserId: currentUser.id,
			title,
			release_date: releaseDate,
			poster_path: posterPath,
			type,
		});

		showAddedToFavoritesNotification(status, toggleNotification);
	};

	const removeFromFavorites = async () => {
		const { id, currentUser, toggleNotification } = props;
		const status = await deleteFavoriteDocument(id, currentUser.id);

		if (status === "success") {
			toggleNotification("removed from favorites", "success");
		}
	};

	const toggleDropdown = () => {
		setShowDropdown(!showDropdown);
	};

	const {
		title,
		id,
		releaseDate,
		posterPath,
		favoriteMovies,
		favoriteTvShows,
		type,
		forComponent,
	} = props;

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
				{/* {forComponent !== "favorites" ? (
					<React.Fragment>
						<StyledDotMenuIcon
							onClick={() => {
								toggleDropdown();
							}}
						/>
						<Dropdown show={showDropdown} forComponent="card">
							{renderDetailsController(
								id,
								favoriteMovies,
								favoriteTvShows,
								type,
								"card",
								handleDetailsControllerClick,
								toggleDropdown
							)}
						</Dropdown>
					</React.Fragment>
				) : null} */}
				<p className="content-name">{title}</p>
				<p className="content-release-date">
					{releaseDate
						? renderReleaseDate(releaseDate)
						: "not available"}
				</p>
			</div>

			{forComponent === "favorites" ? (
				<GenericButton
					btnType="outlined"
					size="smaller"
					width="full"
					bg={cssColors.dangerRed}
					darkBg={cssColors.dangerRedDark}
					color={cssColors.dangerRed}
					hoverColor="white"
					handleButtonClick={handleButtonClick}
				>
					<StyledDeleteIcon $smallest /> remove
				</GenericButton>
			) : null}
		</StyledMainCard>
	);
};

const mapStateToProps = (state) => {
	return {
		currentUser: state.currentUser.currentUser,
		favoriteMovies: selectFavoriteMovies(state),
		favoriteTvShows: selectFavoriteTvShows(state),
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
