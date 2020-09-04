import React from "react";

import styled from "styled-components";
import PropTypes from "prop-types";

import { withTranslation } from "@i18n";

import SVG from "@/components/SVG";

const HeaderMenuMobileTitle = ({ className, t, closeModal }) => {
	return (
		<div className={className}>
			<h4>{t("header.title")}</h4>
			<SVG onClick={closeModal} name="close" width="15" />
		</div>
	);
};

HeaderMenuMobileTitle.propTypes = {
	className: PropTypes.string,
	t: PropTypes.func,
	closeModal: PropTypes.func
};

export default withTranslation("common")(styled(HeaderMenuMobileTitle)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 85px;
	border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`);
