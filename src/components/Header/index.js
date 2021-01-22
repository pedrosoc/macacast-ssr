import React from "react";

import styled from "styled-components";
import PropTypes from "prop-types";

import HeaderContainer from "./HeaderContainer";
import HeaderLogo from "./HeaderLogo";
import HeaderMenu from "./HeaderMenu";

import contents from "@/constants/contents";

const Header = ({ className, social }) => {
	return (
		<div className={className}>
			<HeaderContainer>
				<HeaderLogo />
				<HeaderMenu social={social} contents={contents} />
			</HeaderContainer>
		</div>
	);
};

Header.propTypes = {
	className: PropTypes.string,
	social: PropTypes.array
};

export default styled(Header)`
	font-family: "Poppins", sans-serif;
	box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
`;
