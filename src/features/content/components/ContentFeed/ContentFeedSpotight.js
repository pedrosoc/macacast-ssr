import React, { Fragment } from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import ContentCard from "../ContentCard";

const ContentFeedSpotight = ({ className, title, first, second }) => {
	if (!first)
		return <Fragment />

	return (
		<div className={className}>
			<h4>{title}</h4>
			<div>
				<ContentCard spotlight post={first} />
				<ContentCard spotlight post={second} />
			</div>
		</div>
	);
}

ContentFeedSpotight.propTypes = {
	className: PropTypes.string,
	title: PropTypes.string,
	first: PropTypes.object,
	second: PropTypes.object
};

export default styled(ContentFeedSpotight)`
	& > h4 {
		margin-bottom: 30px;
	}

	& > div {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
`;
