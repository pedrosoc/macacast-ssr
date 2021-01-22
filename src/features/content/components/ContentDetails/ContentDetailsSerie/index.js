import React, { Fragment } from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import styles from "@/constants/styles";

import ContentDetailsInfo from "./ContentDetailsInfo";
import ContentDetailsPlayer from "./ContentDetailsPlayer";

const ContentDetailsSerie = ({ className, post }) => {
	return (
        <div className={className}>
            <ContentDetailsInfo post={post} />
            <ContentDetailsPlayer url={post.player} />
        </div>
    );
};

ContentDetailsSerie.propTypes = {
	className: PropTypes.string,
	post: PropTypes.object
};

export default styled(ContentDetailsSerie)`
	display: flex;
	flex-direction: column;
	color: #fff;

	@media only screen and (min-width: ${styles.breakpoint_large}) {
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
`;
