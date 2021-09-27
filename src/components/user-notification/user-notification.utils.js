export const getNotificationMessage = (type, action, sourceUsername) => {
	switch (type) {
		case "review":
			switch (action) {
				case "like":
					return `${sourceUsername} liked your review on a content`;
				case "dislike":
					return `${sourceUsername} disliked your review on a content`;
				case "reply":
					return `${sourceUsername} replied to your review on a content`;
				default:
					return;
			}
		case "reply":
			switch (action) {
				case "like":
					return `${sourceUsername} liked your reply on a review`;
				case "dislike":
					return `${sourceUsername} disliked your reply on a review`;
				default:
					return;
			}
		case "chat-request":
			switch (action) {
				case "accept":
					return `${sourceUsername} accepted your chat request`;
				case "reject":
					return `${sourceUsername} rejected your chat request`;
				default:
					return;
			}
		default:
			return;
	}
};
	