import React, { Fragment } from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import ContentDetailsSerie from "./ContentDetailsSerie";
import ContentDetailsText from "./ContentDetailsText";

const ContentDetails = ({ className, post }) => {
	if (!post.id)
		return <Fragment />

    if (post.contentType === "serie")
        return (
            <ContentDetailsSerie post={post} />
        );
    
    return (
        <ContentDetailsText post={post} />
    );
};

ContentDetails.propTypes = {
	className: PropTypes.string,
	post: PropTypes.object
};

export default styled(ContentDetails)`
`;
