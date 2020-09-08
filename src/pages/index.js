import React, { Fragment } from "react";
import PropTypes from "prop-types";

import api from "@api";
import { withTranslation } from "@i18n";

import MetaHeader from "@/components/MetaHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";

import PodcastList from "@/features/podcast/components/PodcastList";
import HomeBanner from "@/features/me/components/HomeBanner";

import routes from "@/constants/routes";
import social from "@/features/me/constants/social";

const Home = ({ t, podcasts }) => {
	return (
		<Fragment>
			<MetaHeader meta={routes.home.meta} />
            <Header social={social} />

			<Section first colored="#000">
				<HomeBanner />
			</Section>

			<Section>
				<PodcastList
					showLink
					title={t("podcasts.lastEpisodes")}
					podcasts={podcasts}
				/>
			</Section>

			<Footer />
		</Fragment>
	);
};

Home.propTypes = {
	t: PropTypes.func,
	podcasts: PropTypes.array,
};

export const getStaticProps = async () => {
	const podcasts = await api.podcast.data.getSome(3);
	return { props: { podcasts }, revalidate: 600 };
}

export default withTranslation("common")(Home);
