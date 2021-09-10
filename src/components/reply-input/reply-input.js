import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";

import { showErrorNotification } from "../../redux/notification/notification.actions";

import { replyToReview } from "../../firebase/firebase.reviews.utils";

import CustomTextarea from "../custom-textarea/custom-textarea";

const ReplyInput = ({ reviewRef, passNotificationInfo, currentUser }) => {
	const [reply, setReply] = useState("");
	const [replying, setReplying] = useState(false);

	const dispatch = useDispatch();

	const handleInputChange = (event) => {
		setReply(event.target.value);
	};

	const handleFormSubmit = async (event) => {
		event.preventDefault();

		if (!reply) {
			return;
		}

		setReplying(true);

		const result = await replyToReview(
			{
				text: reply,
				user: {
					userID: currentUser.id,
					username: currentUser.username,
					photoURL: currentUser.photoURL,
				},
				createdAt: Date.now(),
			},
			reviewRef
		);

		setReplying(false);

		if (result.error) {
			return dispatch(showErrorNotification());
		}

		setReply("");
		passNotificationInfo("reply");
	};

	return (
		<CustomTextarea
			placeholder="Reply to this review..."
			value={reply}
			size="smaller"
			showSubmitButton={reply.length > 0}
			submitButtonValue={replying ? "replying..." : "reply"}
			changeHandler={handleInputChange}
			submitHandler={handleFormSubmit}
		/>
	);
};

const mapStateToProps = (state) => {
	return {
		currentUser: state.currentUser.currentUser,
	};
};

export default connect(mapStateToProps)(ReplyInput);
