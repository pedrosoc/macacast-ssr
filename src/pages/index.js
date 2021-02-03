import React, { Fragment } from "react";
import PropTypes from "prop-types";

import api from "@api";
import { withTranslation } from "@i18n";

import MetaHeader from "@/components/MetaHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";

import HomeBanner from "@/features/me/components/HomeBanner";
import FullContentResume from "@/features/content/components/FullContentResume";

import routes from "@/constants/routes";
import social from "@/features/me/constants/social";

import contentsStatus from "@/constants/contentsStatus";

const Home = ({ t, contents }) => {
    return (
		<Fragment>
			<MetaHeader meta={routes.home.meta} />
            <Header social={social} />

			<Section first colored="#000">
				<HomeBanner />
			</Section>

			<Section>
				<FullContentResume contents={contents} />
			</Section>

			<Footer />
		</Fragment>
	);
};

Home.propTypes = {
	t: PropTypes.func,
	contents: PropTypes.array,
};

export const getStaticProps = async () => {
    const contents = await api.content.data.getAllByStatus(contentsStatus.published);
	return { props: { contents }, revalidate: 600 };
}

export default withTranslation("common")(Home);
