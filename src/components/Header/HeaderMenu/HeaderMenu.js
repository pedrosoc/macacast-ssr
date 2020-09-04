import React, { Fragment } from "react";

import MediaQuery from "react-responsive";
import PropTypes from "prop-types";

import styles from "@/constants/styles";

import HeaderMenuMobile from "./mobile/HeaderMenuMobile";
import HeaderMenuDesktop from "./desktop/HeaderMenuDesktop";

const HeaderMenu = ({ social }) => {
	return (
		<Fragment>
			<MediaQuery maxDeviceWidth={styles.breakpoint_medium_max}>
				<HeaderMenuMobile social={social} />
			</MediaQuery>
			<MediaQuery minDeviceWidth={styles.breakpoint_medium}>
				<HeaderMenuDesktop social={social}  />
			</MediaQuery>
		</Fragment>
	);
};

HeaderMenu.propTypes = {
	social: PropTypes.array
};

export default HeaderMenu;
