import React, { Fragment } from "react";
import PropTypes from "prop-types";

import api from "@api";

import MetaHeader from "@/components/MetaHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";

import ContentFeed from "@/features/content/components/ContentFeed";

import routes from "@/constants/routes";
import social from "@/features/me/constants/social";
import contents from "@/constants/contents";

import { firebaseDatabase } from "@firebaseApi";

const Podcasts = ({ content }) => {
    return (
        <Fragment>
			<MetaHeader meta={routes.content.meta} content={content} />
            <Header social={social} />

            <Section first>
                <ContentFeed content={content} />
            </Section>

            <Footer />
        </Fragment>
	);
};

Podcasts.propTypes = {
	podcasts: PropTypes.array,
};

export const getStaticPaths = async () => {
    return { paths: contents.map(c => ({ params: { content: c.route.replace("/", "") }})), fallback: true }
}

export const getStaticProps = async ({ params }) => {
    const content = contents.find(c => c.route === `/${params.content}`);
    const data = await api.content.data.getCategoryById(content.id);
    // const podcasts = await api.content.data.getSomeDifferent(params.id, 3);
	return { props: { content: data,  }, revalidate: 600 };
}

export default Podcasts;
