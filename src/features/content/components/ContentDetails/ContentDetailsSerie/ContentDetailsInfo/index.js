import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

import styles from "@/constants/styles";

import ContentDetailsInfoTitle from "./ContentDetailsInfoTitle";
import ContentDetailsInfoBiography from "./ContentDetailsInfoBiography";
import ContentDetailsInfoSocial from "./ContentDetailsInfoSocial";

const ContentDetailsInfo = ({ className, post }) => {
    return (
		<div className={className}>
			<ContentDetailsInfoTitle title={post.title} description={post.description} />
			<ContentDetailsInfoBiography profile={post.profile} />
			<ContentDetailsInfoSocial post={post} />
		</div>
	);
};

ContentDetailsInfo.propTypes = {
	className: PropTypes.string,
	post: PropTypes.object
};

export default styled(ContentDetailsInfo)`
	width: 100%;
	margin-bottom: ${styles.container_margin_medium};

	@media only screen and (min-width: ${styles.breakpoint_medium}) {
		margin-bottom: ${styles.container_margin_large};
	}

	@media only screen and (min-width: ${styles.breakpoint_large}) {
		width: 50%;
		margin-bottom: 0;
	}
`;
