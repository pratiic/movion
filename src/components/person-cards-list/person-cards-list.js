import React from "react";

import {
	StyledPersonCardsList,
	PersonCardsListWrapper,
} from "./person-cards-list.styles";

import PersonCard from "../person-card/person-card";

const PersonCardsList = ({ list, title, show }) => {
	return (
		<StyledPersonCardsList show={show}>
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
