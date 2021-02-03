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

import contentsStatus from "@/constants/contentsStatus";

const Contents = ({ content }) => {
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

Contents.propTypes = {
	content: PropTypes.array,
};

export const getStaticPaths = async () => {
    return { paths: contents.map(c => ({ params: { content: c.route.replace("/", "") }})), fallback: true }
}

export const getStaticProps = async ({ params }) => {
    const content = contents.find(c => c.route === `/${params.content}`);
    const data = await api.content.data.getCategoryById(content.id, contentsStatus.published);
    return { props: { content: data,  }, revalidate: 600 };
}

export default Contents;
