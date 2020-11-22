export const separateIntoTwo = (list, label) => {
	const requiredList = list.filter((listItem) => listItem.type === label);
	return requiredList;
};
