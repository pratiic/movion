import React from "react";

import {
	StyledPersonCardsList,
	PersonCardsListWrapper,
} from "./person-cards-list.styles";

import PersonCard from "../person-card/person-card";
import { StyledTitle } from "../../styles/styles.generic";

const PersonCardsList = ({ list, title }) => {
	return (
		<StyledPersonCardsList>
			<StyledTitle titleSize="smaller" textAlign="left">
				{title}
			</StyledTitle>

			<PersonCardsListWrapper>
				{list.map(({ name, profile_path, character, job, id }) => {
					if (profile_path) {
						return (
							<PersonCard
								name={name}
								profilePath={profile_path}
								character={character}
								job={job}
								key={`${id}${character || job}`}
							/>
						);
					} else {
						return null;
					}
				})}
			</PersonCardsListWrapper>
		</StyledPersonCardsList>
	);
};

export default PersonCardsList;
