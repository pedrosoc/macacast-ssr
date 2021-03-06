import React from "react";

import styled from "styled-components";
import PropTypes from "prop-types";

import styles from "@/constants/styles";

import HomeBannerImage from "./HomeBannerImage";
import HomeBannerTitle from "./HomeBannerTitle";

const Home = ({ className }) => {
	return (
		<div className={className}>
			<HomeBannerImage />
		</div>
	);
};

Home.propTypes = {
	className: PropTypes.string
};

export default styled(Home)`
	display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

	@media only screen and (min-width: ${styles.breakpoint_medium}) {
        flex-direction: row;
    }
`;
