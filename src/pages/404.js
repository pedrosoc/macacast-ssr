import React, { Fragment } from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import MetaHeader from "@/components/MetaHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";

import api from "@api";
import containerTypes from "@/constants/containerTypes";
import { withTranslation } from "@i18n";

import routes from "@/constants/routes";
import social from "@/features/me/constants/social";

const Error = ({ className, t, categories }) => {
    return (
		<Fragment>
			<MetaHeader meta={routes.error.meta} />
            <Header social={social} categories={categories} />

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
	t: PropTypes.func,
	categories: PropTypes.array
}

export const getStaticProps = async () => {
    const categories = await api.me.data.getCategories();
    return { props: { categories }, revalidate: 1 };
}

export default withTranslation("common")(styled(Error)`
	& h5 {
		font-size: 35px;
	}
`);
