export const capitalizeFirstLetter = (str) => {
	return str
		.split("")
		.map((character, index) => {
			if (index === 0) {
				return character.toUpperCase();
			}
			return character;
		})
		.join("");
};
