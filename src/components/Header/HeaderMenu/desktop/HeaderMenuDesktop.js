import React from "react";

import styled from "styled-components";
import PropTypes from "prop-types";

import HeaderItems from "../components/HeaderItems";
import HeaderSocial from "../components/HeaderSocial";

const HeaderMenuDesktop = ({ className, contents, social }) => {
	return (
		<div className={className}>
			<HeaderItems contents={contents} />
			<HeaderSocial social={social} />
		</div>
	);
};

HeaderMenuDesktop.propTypes = {
	className: PropTypes.string,
	social: PropTypes.array,
	contents: PropTypes.array
};

export default styled(HeaderMenuDesktop)`
    display: flex;
    align-items: center;
`;
