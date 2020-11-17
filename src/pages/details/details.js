import React from "react";
import { connect } from "react-redux";

import { StyledDetails } from "./details.styles";

import { fetchSimilar } from "../../redux/api/api.actions";
import { getURL } from "../../redux/api/api.info";
import { selectSimilar } from "../../redux/details/details.selectors";

import Spinner from "../../components/spinner/spinner";
import MainCardsList from "../../components/main-cards-list/main-cards-list";
import DetailsMain from "../../components/details-main/details-main";
import Credits from "../../components/credits/credits";

class DetailsPage extends React.Component {
	startAsyncOp = () => {
		const { match, fetchSimilar } = this.props;
		const id = match.params.id;
		const type = match.params.type;
		const mode = type;
		const similarURL = getURL(mode, null, "similar", null, id);
		fetchSimilar(similarURL);
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
		const { similar, fetchingSimilar, match } = this.props;

		return (
			<StyledDetails>
				<DetailsMain />

				<Credits />

				{fetchingSimilar ? (
					<Spinner height="7rem" />
				) : (
					<MainCardsList
						list={similar}
						title={`similar ${
							match.params.type === "movie"
								? "movies"
								: "tv shows"
						}`}
						titleSize="smaller"
						textAlign="left"
					/>
				)}
			</StyledDetails>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		similar: selectSimilar(state),
		fetchingSimilar: state.details.fetchingSimilar,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchSimilar: (url) => {
			dispatch(fetchSimilar(url));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);
