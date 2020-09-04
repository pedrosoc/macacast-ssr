import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import { Link } from "@i18n";

const HeaderContent = ({ className }) => {
	return (
		<Link href="/">
			<a className={className}>
				<h2> MACACAST </h2>
			</a>
		</Link>
	);
};

HeaderContent.propTypes = {
	className: PropTypes.string
};

export default styled(HeaderContent)`
	color: #000;
	text-decoration: none;
`;
