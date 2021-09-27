export const getHowLongAgo = (fullDate, shortForm) => {
	const createdTimeMilliseconds = new Date(fullDate).getTime();
	const millisecondsNow = Date.now();

	const difference = millisecondsNow - createdTimeMilliseconds;
	const differenceInSeconds = Math.round(difference / 1000);

	if (differenceInSeconds < 60) {
		return shortForm ? `${differenceInSeconds} sec` : "few moments";
	} else if (differenceInSeconds < 3600) {
		return `${Math.round(differenceInSeconds / 60)} min`;
	} else if (differenceInSeconds < 86400) {
		return `${Math.round(differenceInSeconds / 3600)} hr`;
	} else if (differenceInSeconds < 604800) {
		return `${Math.round(differenceInSeconds / 86400)}d`;
	} else {
		return `${Math.round(differenceInSeconds / 604800)}w`;
	}
};
