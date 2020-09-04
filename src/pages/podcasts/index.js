import React, { Fragment } from "react";

import Head from "next/head";
import PropTypes from "prop-types";

import api from "@api";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";

import PodcastFeed from "@/features/podcast/components/PodcastFeed";

import env from "@/constants/env";

const Podcasts = ({ social, podcasts }) => {
	return (
        <Fragment>
			<Head>
				<title>Podcasts | Macacast</title>
				<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />

				<link rel="shortcut icon" type="image/png" href={`${env.baseUrl}/static/images/favicon.png`} />
				<link rel="shortcut icon" sizes="192x192" href={`${env.baseUrl}/static/images/favicon.png`} />
				<link rel="apple-touch-icon" href={`${env.baseUrl}/static/images/favicon.png`} />
				
				<meta name="description" content="O podcast da maior do Interior. Pré-jogo, Pós-jogo, Resenhas, Entrevistas e muito mais da Ponte Preta, a nossa Macaca Querida de Campinas." />
				<meta name="keywords" content="Ponte Preta, Podcast, Campinas, Ponte, Macaca, Maior do Interior, Entrevista, Resenha" />

				<meta property="og:title" content="Podcasts | Macacast" />
				<meta property="og:url" content={`${env.baseUrl}/podcasts`} />
				<meta property="og:description" content="O podcast da maior do Interior. Pré-jogo, Pós-jogo, Resenhas, Entrevistas e muito mais da Ponte Preta, a nossa Macaca Querida de Campinas." />
				<meta property="og:image" content={`${env.baseUrl}/static/images/macacast_macaco.png`} />
				<meta property="og:locale" content="pt_BR" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@macacastaapp" />
				<meta name="twitter:creator" content="@macacastaapp" />
				<meta name="twitter:title" content="Podcasts | Macacast" />
				<meta name="twitter:description" content="O podcast da maior do Interior. Pré-jogo, Pós-jogo, Resenhas, Entrevistas e muito mais da Ponte Preta, a nossa Macaca Querida de Campinas." />
				<meta name="twitter:image" content={`${env.baseUrl}/static/images/macacast_macaco.png`} />
			</Head>

            <Header social={social} />

            <Section first>
                <PodcastFeed podcasts={podcasts} />
            </Section>

            <Footer />
        </Fragment>
	);
};

Podcasts.propTypes = {
	social: PropTypes.array,
	podcasts: PropTypes.array,
};

export const getStaticProps = async () => {
    const social = await api.me.data.getSocial();
	const podcasts = await api.podcast.data.getAll();

	return { props: { social, podcasts }, revalidate: 600 };
}

export default Podcasts;
