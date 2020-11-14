export const validateForFreshness = (oldList, newList) => {
	const existingItem = oldList.find(
		(oldListElement) => oldListElement.id === newList[0].id
	);

	if (existingItem) {
		return oldList;
	}

	return [...oldList, ...newList];
};
