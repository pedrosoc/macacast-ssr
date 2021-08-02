import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

const ContentCardInfoHeader = ({ className, author, title, episode }) => {
    const subtitle = episode 
        ? `Macacast #${episode}` 
        : author ? `Por ${author}` : "";
    
    return (
		<div className={className}>
			<h3>{title}</h3>
			<span>{subtitle}</span>
		</div>
	);
}

ContentCardInfoHeader.propTypes = {
	className: PropTypes.string,
	title: PropTypes.string,
	author: PropTypes.string,
	episode: PropTypes.string
};

export default styled(ContentCardInfoHeader)`
    display: flex;
    flex-direction: column;
    color: #000;
    height: 74px;

    & h3 {
        font-size: 18px;
        margin: 0;

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    & span {
        font-size: 16px;
        color: rgba(0, 0, 0, .54);
        margin-top: 10px;
    }
`;
