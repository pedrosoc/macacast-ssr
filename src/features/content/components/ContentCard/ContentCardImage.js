import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import styles from "@/constants/styles";

const ContentCardImage = ({ className, src, title, spotlight }) => {
	return (
		<img className={className} src={src} alt={title} />
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
    width: 100%;
    height: 90vw;
    object-fit: cover;

    @media only screen and (min-width: ${styles.breakpoint_medium}) {
        height: ${props => props.spotlight ? "329px" : "215px"};
    }

    @media only screen and (min-width: ${styles.container_large}) {
        height: ${props => props.spotlight ? "564px" : "370px"};
    }
`;
