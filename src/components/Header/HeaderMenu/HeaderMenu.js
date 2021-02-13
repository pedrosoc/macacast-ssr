import React, { Fragment } from "react";

import MediaQuery from "react-responsive";
import PropTypes from "prop-types";

import styles from "@/constants/styles";

import HeaderMenuMobile from "./mobile/HeaderMenuMobile";
import HeaderMenuDesktop from "./desktop/HeaderMenuDesktop";

const HeaderMenu = ({ contents, social }) => {
	return (
		<Fragment>
			<MediaQuery maxDeviceWidth={styles.breakpoint_large_max}>
				<HeaderMenuMobile contents={contents} social={social} />
			</MediaQuery>
			<MediaQuery minDeviceWidth={styles.breakpoint_large}>
				<HeaderMenuDesktop contents={contents} social={social}  />
			</MediaQuery>
		</Fragment>
	);
};

HeaderMenu.propTypes = {
    social: PropTypes.array,
    contents: PropTypes.array
};

export default HeaderMenu;
