import React from "react";

import styled from "styled-components";
import PropTypes from "prop-types";

import { withTranslation } from "@i18n";

import images from "@/constants/images";

const HomeBannerImage = ({ className, t }) => {
	return (
		<img
			src={images.newLogo}
			alt={t("home.altImage")}
			className={className}
		/>
	);
};

HomeBannerImage.propTypes = {
	className: PropTypes.string,
	t: PropTypes.func
};

export default withTranslation("common")(styled(HomeBannerImage)`
	min-width: 250px;
	max-width: 50%;
`);
