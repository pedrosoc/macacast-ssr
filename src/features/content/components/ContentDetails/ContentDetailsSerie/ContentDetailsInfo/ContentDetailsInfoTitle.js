import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const ContentDetailsInfoTitle = ({ className, title, description }) => {
	return (
		<div className={className}>
			<h1>{title}</h1>
			<p>{description}</p>
		</div>
	);
};

ContentDetailsInfoTitle.propTypes = {
	className: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string
};

export default styled(ContentDetailsInfoTitle)`
    & h1 {
		font-family: "Poppins", sans-serif;
        font-size: 42px;
        margin: 0; 
    }

	& p {
        margin: 10px 0 0;
        font-size: 20px;
        line-height: 1.3em;
    }
`;
