import { StyledTickIcon, StyledHeartIcon } from "../../styles/styles.icons";
import DetailsController from "../../components/details-controller/details-controller";

export function renderDetailsController(
	id,
	favoriteMovies,
	favoriteTvShows,
	type,
	forComponent,
) {
	const listToBeFiltered =
		type === "movie" ? favoriteMovies : favoriteTvShows;

	const existing = listToBeFiltered.find((listItem) => listItem.id === id);

	if (existing) {
		return (
			<DetailsController
				icon={<StyledTickIcon $smaller $noColor />}
				value="already in favorites"
				jobDone
				forComponent={forComponent}
				toggleDropdown={
					forComponent === "card" ? this.toggleDropdown : null
				}
			/>
		);
	} else {
		return (
			<DetailsController
				icon={<StyledHeartIcon $smaller $noHoverActiveStyles />}
				value="add to favorites"
				forComponent={forComponent}
				func="add to favorites"
				toggleDropdown={
					forComponent === "card" ? this.toggleDropdown : null
				}
				handleDetailsControllerClick={this.handleDetailsControllerClick}
			/>
		);
	}
}
