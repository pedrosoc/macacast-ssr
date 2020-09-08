import React, { Fragment } from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import MetaHeader from "@/components/MetaHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";

import containerTypes from "@/constants/containerTypes";
import { withTranslation } from "@i18n";

import routes from "@/constants/routes";
import social from "@/features/me/constants/social";

const Error = ({ className, t }) => {
	return (
		<Fragment>
			<MetaHeader meta={routes.error.meta} />
            <Header social={social} />

			<Section first type={containerTypes.text}>
				<div className={className}>
                    <h5>{t("error.title")}</h5>
                    <p>{t("error.description")}</p>
				</div>
			</Section>

			<Footer />
		</Fragment>
	);
};

Error.propTypes = {
	className: PropTypes.string,
	t: PropTypes.func
}

export default withTranslation("common")(styled(Error)`
	& h5 {
		font-size: 35px;
	}
`);
