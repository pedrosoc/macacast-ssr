import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

import SocialShare from "@/components/SocialShare";

const ContentDetailsInfoShare = ({ className, title, url }) => {
	return (
		<div className={className}>
            <h4> Compartilhe em: </h4>
			<SocialShare title={title} url={url} iconSize={50} />
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
