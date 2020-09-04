/* eslint-disable complexity */
import React, { useState } from "react";

import PropTypes from "prop-types";

import ModalTrigger from "./ModalTrigger";
import ModalContent from "./ModalContent";

const Modal = ({ trigger, content }) => {
	const [visible, setVisibility] = useState(false);

	const openModal = () => {
		setVisibility(true);
		window.scrollTo(0, 0);
	};

	const closeModal = () => {
		setVisibility(false);
	}

	if (!visible)
		return <ModalTrigger trigger={trigger} openModal={openModal} />;

	return (
		<ModalContent content={content} type={"menu"} closeModal={closeModal} />
	);
};

Modal.propTypes = {
	className: PropTypes.string,
	trigger: PropTypes.object,
	content: PropTypes.object
};

export default Modal;
