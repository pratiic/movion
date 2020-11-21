import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { apiInfo } from "../../redux/api/api.info";

import { StyledMainCard, StyledDotMenuIcon } from "./main-card.styles";

import { StyledHeartIcon } from "../header-utils/header-utils.styles";

import { resetSimilarFetchPage } from "../../redux/details/details.actions";

import { renderReleaseDate, toggleDropdown } from "../utils/utils.components";

import Dropdown from "../../components/dropdown/dropdown";

class MainCard extends React.Component {
	constructor() {
		super();

		this.state = {
			showDropdown: false,
		};

		this.toggleDropdown = toggleDropdown.bind(this);
	}

	handleCardImageClick = () => {
		const { history, id, type, resetSimilarFetchPage } = this.props;

		resetSimilarFetchPage();
		history.push(`/details/${type}/${id}`);
	};

	render() {
		const { title, releaseDate, posterPath } = this.props;

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
							console.log("pratiic");
							this.toggleDropdown();
						}}
					/>
					<Dropdown
						dropdownItems={[
							{
								value: "add to favorites",
								icon: <StyledHeartIcon />,
							},
						]}
						show={this.state.showDropdown}
						forComponent="card"
						toggleDropdown={this.toggleDropdown}
					/>
					<p className="content-name">{title}</p>
					<p className="content-release-date">
						{releaseDate
							? renderReleaseDate(releaseDate)
							: "not available"}
					</p>
				</div>
			</StyledMainCard>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		resetSimilarFetchPage: () => {
			dispatch(resetSimilarFetchPage());
		},
	};
};

export default withRouter(connect(null, mapDispatchToProps)(MainCard));
