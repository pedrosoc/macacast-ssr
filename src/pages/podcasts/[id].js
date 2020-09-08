import React, { Fragment } from "react";
import PropTypes from "prop-types";

import api from "@api";
import { withTranslation } from "@i18n";
import { useRouter } from "next/router";

import Error from "../404";

import MetaHeader from "@/components/MetaHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";

import PodcastDetails from "@/features/podcast/components/PodcastDetails";
import PodcastList from "@/features/podcast/components/PodcastList";

import routes from "@/constants/routes";
import social from "@/features/me/constants/social";

const Podcast = ({ t, podcast, podcasts }) => {
	const router = useRouter();
	if (router.isFallback)
		return <Fragment />

	if (!podcast || !podcast.id)
		return <Error />

	return (
		<Fragment>
            <MetaHeader meta={routes.podcastDetails.meta} podcast={podcast} />
            <Header social={social} />

			<Section first colored="#000">
				<PodcastDetails podcast={podcast} />
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

Podcast.propTypes = {
    t: PropTypes.func,
    podcast: PropTypes.object,
    podcasts: PropTypes.array,
};

export const getStaticPaths = async () => {
    const podcasts = await api.podcast.data.getAll();
    const paths = podcasts.map(p => ({ params: { id: p.episode }}))
    return { paths, fallback: true }
}

export const getStaticProps = async ({ params }) => {
    const podcast = await api.podcast.data.getByEpisode(params.id);
    const podcasts = await api.podcast.data.getSomeDifferent(params.id, 3);
	return { props: { podcast: podcast[0], podcasts }, revalidate: 600 };
}

export default withTranslation("common")(Podcast);
