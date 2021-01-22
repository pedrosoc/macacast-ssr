import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

const ContentCardImage = ({ className, src, title, spotlight }) => {
	return (
		<img className={className} src={src} alt={title} width={"100%"} />
	);
}

ContentCardImage.propTypes = {
	className: PropTypes.string,
	src: PropTypes.string,
	title: PropTypes.string,
	spotlight: PropTypes.bool
};

export default styled(ContentCardImage)`
    border-radius:  5px 5px 0 0;
`;
