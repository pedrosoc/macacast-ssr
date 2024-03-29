import React from "react";

import styled from "styled-components";
import PropTypes from "prop-types";

import styles from "@/constants/styles";

import HeaderMenuMobileTitle from "./HeaderMenuMobileTitle";
import HeaderItems from "../components/HeaderItems";
import HeaderSocial from "../components/HeaderSocial";

const HeaderMenuMobile = ({ className, closeModal, social, contents }) => {
	return (
		<div className={className}>
			<HeaderMenuMobileTitle closeModal={closeModal} />
			<HeaderItems closeModal={closeModal} contents={contents} />
			<HeaderSocial social={social} />
		</div>
	);
};

HeaderMenuMobile.propTypes = {
	className: PropTypes.string,
	closeModal: PropTypes.func,
	social: PropTypes.array,
	contents: PropTypes.array
};

export default styled(HeaderMenuMobile)`
	width: 300px;
    height: 100%;
	padding: 0 ${styles.container_margin_medium};

    background-color: #fff;
`;
