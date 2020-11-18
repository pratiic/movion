export const filterRedundant = (list) => {
	let newList = [];
	list.forEach((listElement) => {
		const redundantItem = newList.find(
			(newListElement) => newListElement.name === listElement.name
		);

		if (!redundantItem) {
			newList = [...newList, listElement];
		} else {
			if (redundantItem.character) {
				redundantItem.character += `, ${listElement.character}`;
			} else if (redundantItem.job) {
				redundantItem.job += `, ${listElement.job}`;
			}
		}
	});
	return newList;
};
