import React from "react";

import styled from "styled-components";
import PropTypes from "prop-types";

import styles from "@/constants/styles";
import routes from "@/constants/routes";

import HeaderItem from "./HeaderItem";
import { withTranslation } from "@i18n";

const HeaderItems = ({ className, t, closeModal }) => {
	return (
		<div className={className}>
			<HeaderItem closeModal={closeModal} to={routes.home.url} title={routes.home.title(t)} />
			<HeaderItem closeModal={closeModal} to={routes.podcasts.url} title={routes.podcasts.title(t)} />
			<HeaderItem closeModal={closeModal} to={routes.about.url} title={routes.about.title(t)} />
		</div>
	);
};

HeaderItems.propTypes = {
	className: PropTypes.string,
	t: PropTypes.func,
	closeModal: PropTypes.func
};

export default withTranslation("common")(styled(HeaderItems)`
	display: flex;
	flex-direction: column;
	padding-top: ${styles.container_margin_medium};

	@media only screen and (min-width: ${styles.breakpoint_medium}) {
		flex-direction: row;
		border-right: 2px solid #000;

		margin: 0;
		padding-top: 0;
	}
`);
