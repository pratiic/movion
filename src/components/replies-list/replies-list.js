import React, { useState, useEffect } from "react";

import { StyledRepliesList } from "./replies-list.styles";
import { StyledMessage } from "../../styles/styles.generic";

import Reply from "../reply/reply";

const RepliesList = ({ reviewRef }) => {
	const [replies, setReplies] = useState([]);
	const [repliesMessage, setRepliesMessage] = useState("");

	useEffect(() => {
		fetchReplies();
	}, []);

	const fetchReplies = async () => {
		setRepliesMessage("loading replies...");

		reviewRef
			.collection("replies")
			.orderBy("createdAt", "desc")
			.onSnapshot((snapshot) => {
				if (snapshot.docs.length > 0) {
					return setReplies(
						snapshot.docs.map((doc) => {
							return { ...doc.data(), replyID: doc.id };
						})
					);
				}

				setRepliesMessage("no replies");
			});
	};

	return (
		<StyledRepliesList>
			{replies.length > 0 ? (
				replies.map((reply) => (
					<Reply
						{...reply}
						reviewRef={reviewRef}
						key={reply.replyID}
					/>
				))
			) : (
				<StyledMessage size="smaller">{repliesMessage}</StyledMessage>
			)}
		</StyledRepliesList>
	);
};

export default RepliesList;
