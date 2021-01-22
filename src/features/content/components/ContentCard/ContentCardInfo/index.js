import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import ContentCardInfoHeader from "./ContentCardInfoHeader";
import ContentCardInfoDescription from "./ContentCardInfoDescription";

const ContentCardInfo = ({ className, title, episode, description }) => {
	return (
		<div className={className}>
			<ContentCardInfoHeader title={title} episode={episode} />
			<ContentCardInfoDescription description={description} />
		</div>
	);
}

ContentCardInfo.propTypes = {
	className: PropTypes.string,
	title: PropTypes.string,
	episode: PropTypes.string,
	description: PropTypes.string
};

export default styled(ContentCardInfo)`
    padding: 20px;
    width: 100%;
`;
