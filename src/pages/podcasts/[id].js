import React, { Fragment } from "react";

import Head from "next/head";
import PropTypes from "prop-types";

import api from "@api";
import Section from "@/components/Section";
import { withTranslation } from "@i18n";

import PodcastDetails from "@/features/podcast/components/PodcastDetails";
import PodcastList from "@/features/podcast/components/PodcastList";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Podcast = ({ t, social, podcast, podcasts }) => {
	if (!podcast || !podcast.id)
		return <Fragment />

	return (
		<Fragment>
            <Head>
				<title>{`${podcast.title} | Podcasts | Macacast`}</title>
				<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
			
				<link rel="shortcut icon" type="image/png" href={`${env.baseUrl}/static/images/favicon.png`} />
				<link rel="shortcut icon" sizes="192x192" href={`${env.baseUrl}/static/images/favicon.png`} />
				<link rel="apple-touch-icon" href={`${env.baseUrl}/static/images/favicon.png`} />
				
				<meta name="description" content={`Macacast | Episódio #${podcast.episode} | ${podcast.title}`} />
				<meta name="keywords" content="Ponte Preta, Podcast, Campinas, Ponte, Macaca, Maior do Interior, Entrevista, Resenha" />

				<meta property="og:title" content={podcast.title} />
				<meta property="og:url" content={`${env.baseUrl}/podcasts/${podcast.episode}`} />
				<meta property="og:description" content={podcast.description} />
				<meta property="og:image" content={podcast.img} />
				<meta property="og:locale" content="pt_BR" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@macacastaapp" />
				<meta name="twitter:creator" content="@macacastaapp" />
				<meta name="twitter:title" content={podcast.title} />
				<meta name="twitter:description" content={podcast.description} />
				<meta name="twitter:image" content={podcast.img} />
			</Head>

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
    social: PropTypes.array,
    podcast: PropTypes.object,
    podcasts: PropTypes.array,
};

export const getStaticPaths = async () => {
    const podcasts = await api.podcast.data.getAll();
    const paths = podcasts.map(p => `/podcasts/${p.episode}`)
    return { paths, fallback: true }
}

export const getStaticProps = async ({ params }) => {
    const social = await api.me.data.getSocial();
    const podcast = await api.podcast.data.getByEpisode(params.id);
    const podcasts = await api.podcast.data.getSomeDifferent(params.id, 3);

	return { props: { social, podcast: podcast[0], podcasts }, revalidate: 600 };
}

export default withTranslation("common")(Podcast);
