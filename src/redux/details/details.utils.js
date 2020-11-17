export const filterRedundant = (list) => {
	let newList = [];
	list.forEach((listElement) => {
		const redundantItem = newList.find(
			(newListElement) => newListElement.name === listElement.name
		);

		if (!redundantItem) {
			newList = [...newList, listElement];
		}
	});
	return newList;
};
