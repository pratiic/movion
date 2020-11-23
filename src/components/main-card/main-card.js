import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { StyledMainCard, StyledDotMenuIcon } from "./main-card.styles";

import { cssColors } from "../../styles/styles.variables";

import { resetSimilarFetchPage } from "../../redux/details/details.actions";
import { toggleNotification } from "../../redux/notification/notification.actions";

import {
	selectFavoriteMovies,
	selectFavoriteTvShows,
} from "../../redux/favorites/favorites.selectors";

import { renderReleaseDate, toggleDropdown } from "../utils/utils.components";
import { apiInfo } from "../../redux/api/api.info";
import {
	createFavoriteDocument,
	deleteFavoriteDocument,
} from "../../firebase/firebase.utils";

import { renderDetailsController } from "../utils/utils.components";

import Dropdown from "../../components/dropdown/dropdown";
import GenericButton from "../../components/generic-button/generic-button";

class MainCard extends React.Component {
	constructor() {
		super();

		this.state = {
			showDropdown: false,
		};

		this.toggleDropdown = toggleDropdown.bind(this);

		this.renderDetailsController = renderDetailsController.bind(this);
	}

	handleCardImageClick = () => {
		const { history, id, type, resetSimilarFetchPage } = this.props;

		resetSimilarFetchPage();
		history.push(`/details/${type}/${id}`);
	};

	addToFavorites = async () => {
		const {
			title,
			releaseDate,
			posterPath,
			id,
			type,
			currentUser,
			toggleNotification,
		} = this.props;

		const status = await createFavoriteDocument({
			title,
			posterPath,
			releaseDate,
			id,
			type,
			currentUserId: currentUser.id,
		});

		if (status === "success") {
			toggleNotification("added to favorites", "success");
		}
	};

	removeFromFavorites = async () => {
		const { id, currentUser, toggleNotification } = this.props;
		const status = await deleteFavoriteDocument(id, currentUser.id);

		if (status === "success") {
			toggleNotification("removed from favorites", "success");
		}
	};

	render() {
		const {
			title,
			id,
			releaseDate,
			posterPath,
			favoriteMovies,
			favoriteTvShows,
			type,
			forComponent,
		} = this.props;

		return (
			<StyledMainCard>
				<div
					className="card-image-container"
					onClick={this.handleCardImageClick}
				>
					<img
						src={`${apiInfo.baseURLs.images}/${posterPath}`}
						alt="poster not available"
					/>
				</div>

				<div className="content-info">
					<StyledDotMenuIcon
						onClick={() => {
							this.toggleDropdown();
						}}
					/>
					<Dropdown
						show={this.state.showDropdown}
						forComponent="card"
					>
						{this.renderDetailsController(
							id,
							favoriteMovies,
							favoriteTvShows,
							type,
							"card"
						)}
					</Dropdown>
					<p className="content-name">{title}</p>
					<p className="content-release-date">
						{releaseDate
							? renderReleaseDate(releaseDate)
							: "not available"}
					</p>
				</div>

				{forComponent === "favorites" ? (
					<GenericButton
						value="remove"
						func="remove from favorites"
						outlined
						bg={cssColors.dangerRed}
						darkBg={cssColors.dangerRedDark}
						color={cssColors.dangerRed}
						iconClassName="fas fa-times"
						removeFromFavorites={this.removeFromFavorites}
					/>
				) : null}
			</StyledMainCard>
		);
	}
}

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

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(MainCard)
);
