import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";

import api from "@api";

import Error from "../404";

import MetaHeader from "@/components/MetaHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";

import ContentFeed from "@/features/content/components/ContentFeed";

import routes from "@/constants/routes";
import social from "@/features/me/constants/social";

import contentsStatus from "@/constants/contentsStatus";

const Contents = ({ content, categories }) => {
    const router = useRouter();
    if (router.isFallback)
		return <Fragment />

	if (!content || !content.id)
		return <Error categories={categories} />

    return (
        <Fragment>
			<MetaHeader meta={routes.content.meta} content={content} />
            <Header social={social} categories={categories} />

            <Section first>
                <ContentFeed content={content} />
            </Section>

            <Footer />
        </Fragment>
	);
};

Contents.propTypes = {
	content: PropTypes.object,
	categories: PropTypes.array,
};

export const getStaticPaths = async () => {
    const categories = await api.me.data.getCategories();
    return { paths: categories.map(c => ({ params: { content: c.route.replace("/", "") }})), fallback: true }
}

export const getStaticProps = async ({ params }) => {
    const categories = await api.me.data.getCategories();
    const content = categories.find(c => c.route === `/${params.content}`);

    if (!content)
        return { props: { content: {}, categories }, revalidate: 1 };
    
    const data = await api.content.data.getCategoryById(content.id, contentsStatus.published);
    return { props: { content: data, categories }, revalidate: 1 };
}

export default Contents;
