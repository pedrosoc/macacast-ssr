import React from "react";

import styled from "styled-components";
import PropTypes from "prop-types";

import { withTranslation } from "@i18n";

import styles from "@/constants/styles";

const HomeBannerTitle = ({ className, t }) => {
	return (
		<div className={className}>
			<h2>{t("home.title")}</h2>
			<p>{t("home.subtitle")}</p>
		</div>
	);
};

HomeBannerTitle.propTypes = {
	className: PropTypes.string,
    t: PropTypes.func
};

export default withTranslation("common")(styled(HomeBannerTitle)`
    display: flex;
    flex-direction: column;
    align-items: center;

    font-family: "Poppins", sans-serif;
    color: #fff;
    
    & h2 {
        font-size: 50px;
        line-height: 1em;
        margin: 40px 0 0;
    }

    & p {
        font-size: 16px;
        margin: 0;
    }

    @media only screen and (min-width: ${styles.breakpoint_medium}) {
        align-items: flex-start;
    }

    @media only screen and (min-width: ${styles.breakpoint_large}) {
        & h2 {
            font-size: 90px;
        }

        & p {
            font-size: 22px;
        }
    }

`);
