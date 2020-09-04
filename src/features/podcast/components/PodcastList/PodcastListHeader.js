import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import { withTranslation, Link } from "@i18n";

import routes from "@/constants/routes";
import styles from "@/constants/styles";

const PodcastListHeader = ({ className, t, title, showLink }) => {
	if (showLink)
		return (
			<div className={className}>
				<h4>{title}</h4>
				<Link href={routes.podcasts.url}>
					<a>{t("podcasts.seeMore")}</a>
				</Link>
			</div>
		);
        
	return <h4 className={className}>{title}</h4>
}

PodcastListHeader.propTypes = {
	className: PropTypes.string,
    t: PropTypes.func,
	title: PropTypes.string,
	showLink: PropTypes.bool
};

export default withTranslation("common")(styled(PodcastListHeader)`
    display: flex;
    flex-direction: column;
	margin-bottom: 30px;

    & > a {
        margin-top: 10px;
    }

    @media only screen and (min-width: ${styles.breakpoint_medium}) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
`);
