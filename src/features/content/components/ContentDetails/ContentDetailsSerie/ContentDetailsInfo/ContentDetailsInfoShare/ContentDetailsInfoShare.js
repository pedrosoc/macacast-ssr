import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

import SocialShare from "@/components/SocialShare";

import styles from "@/constants/styles";

const ContentDetailsInfoShare = ({ className, title, url }) => {
	const isMobile = useMediaQuery({
		query: `(max-device-width: ${styles.breakpoint_small_max})`
	});
    
    return (
		<div className={className}>
            <h4> Compartilhe em: </h4>
			<SocialShare title={title} url={url} iconSize={isMobile ? 36 : 40} />
		</div>
	);
};

ContentDetailsInfoShare.propTypes = {
	className: PropTypes.string,
	title: PropTypes.string,
	url: PropTypes.string
};

export default styled(ContentDetailsInfoShare)`
    & > * {
        margin-right: 10px;
    }

    & > h4 {
        margin-bottom: 20px;
    }
`;
