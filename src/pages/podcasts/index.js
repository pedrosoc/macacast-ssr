import React, { Fragment } from "react";
import PropTypes from "prop-types";

import api from "@api";

import MetaHeader from "@/components/MetaHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";

import PodcastFeed from "@/features/podcast/components/PodcastFeed";

import routes from "@/constants/routes";
import social from "@/features/me/constants/social";

const Podcasts = ({ podcasts }) => {
	return (
        <Fragment>
			<MetaHeader meta={routes.podcasts.meta} />
            <Header social={social} />

            <Section first>
                <PodcastFeed podcasts={podcasts} />
            </Section>

            <Footer />
        </Fragment>
	);
};

Podcasts.propTypes = {
	podcasts: PropTypes.array,
};

export const getStaticProps = async () => {
	const podcasts = await api.podcast.data.getAll();
	return { props: { podcasts }, revalidate: 600 };
}

export default Podcasts;
