import React from "react";

import {
	StyledPersonCardsList,
	PersonCardsListWrapper,
} from "./person-cards-list.styles";
import { StyledMessage } from "../../styles/styles.generic";

import PersonCard from "../person-card/person-card";

const PersonCardsList = ({ list, show, type }) => {
	return (
		<StyledPersonCardsList show={show}>
			<PersonCardsListWrapper>
				{list.length > 0 ? (
					list.map(({ name, profile_path, character, job, id }) => {
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
						}
					})
				) : (
					<StyledMessage>no {type} found</StyledMessage>
				)}
			</PersonCardsListWrapper>
		</StyledPersonCardsList>
	);
};

export default PersonCardsList;
