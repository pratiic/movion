import React from "react";
import { connect, useDispatch } from "react-redux";

import {
	Buttons,
	CloseModal,
	Header,
	Message,
	ModalOverlay,
	StyledModal,
	Title,
} from "./modal.styles";
import {
	StyledDeleteIcon,
	StyledStaticIndicatorIcon,
} from "../../styles/styles.icons";

import { resetModal } from "../../redux/modal/modal.actions";

import GenericButton from "../generic-button/generic-button";

const Modal = ({
	showModal,
	hasOptions,
	modalTitle,
	modalMessage,
	clickHandler,
}) => {
	const dispatch = useDispatch();

	if (!showModal) {
		return null;
	}

	const closeModal = () => {
		dispatch(resetModal());
	};

	const handleOverlayClick = (event) => {
		if (event.target.id === "modal-overlay") {
			closeModal();
		}
	};

	return (
		<ModalOverlay onClick={handleOverlayClick} id="modal-overlay">
			<StyledModal>
				{hasOptions ? (
					<React.Fragment>
						<Header>
							<Title>{modalTitle}</Title>
							<CloseModal>
								<StyledDeleteIcon
									$showBackground
									$smaller
									onClick={closeModal}
								/>
							</CloseModal>
						</Header>

						<Buttons>
							<GenericButton handleButtonClick={clickHandler}>
								yup
							</GenericButton>
							<GenericButton
								btnType="outlined"
								color="red"
								handleButtonClick={closeModal}
							>
								guess not
							</GenericButton>
						</Buttons>
					</React.Fragment>
				) : (
					<Message>
						{modalMessage} <StyledStaticIndicatorIcon $noColor />
					</Message>
				)}
			</StyledModal>
		</ModalOverlay>
	);
};

const mapStateToProps = (state) => {
	return {
		showModal: state.modal.showModal,
		hasOptions: state.modal.hasOptions,
		modalTitle: state.modal.modalTitle,
		modalMessage: state.modal.modalMessage,
		clickHandler: state.modal.clickHandler,
	};
};

export default connect(mapStateToProps)(Modal);
