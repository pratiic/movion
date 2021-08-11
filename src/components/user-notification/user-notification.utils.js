export const getNotificationMessage = (type, action, sourceUsername) => {
	switch (type) {
		case "review":
			switch (action) {
				case "like":
					return `${sourceUsername} liked your review on a content`;
				case "dislike":
					return `${sourceUsername} disliked your review on a content`;
				default:
					return;
			}
		default:
			return;
	}
};
