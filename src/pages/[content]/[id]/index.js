import React, { Fragment } from "react";
import PropTypes from "prop-types";

import api from "@api";
import { withTranslation } from "@i18n";
import { useRouter } from "next/router";

import Error from "../../404";

import MetaHeader from "@/components/MetaHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";

import ContentDetails from "@/features/content/components/ContentDetails";
import ContentList from "@/features/content/components/ContentList";

import social from "@/features/me/constants/social";

import routes from "@/constants/routes";
import containerTypes from "@/constants/containerTypes";
import contentsStatus from "@/constants/contentsStatus";
import contentsConfig from "@/constants/contentsConfig";

const ContentPost = ({ t, post, posts, content, categories }) => {
    const router = useRouter();
    if (router.isFallback)
		return <Fragment />

	if (!post || !post.id)
		return <Error categories={categories} />

    const props = post.contentType === "serie"
        ? { colored: "#000" }
        : { colored: "#fff", type: containerTypes.text };

	return (
		<Fragment>
            <MetaHeader meta={routes.contentPost.meta} content={post} />
            <Header social={social} categories={categories} />

			<Section first {...props}>
				<ContentDetails post={post} />
			</Section>

			<Section>
				<ContentList
					link={content.route}
					title={t("content.lastEpisodes")}
					posts={posts}
				/>
			</Section>

            <Footer />
		</Fragment>
	);
};

ContentPost.propTypes = {
    t: PropTypes.func,
    post: PropTypes.object,
    posts: PropTypes.array,
    content: PropTypes.object,
    categories: PropTypes.array,
};

export const getStaticPaths = async () => {
    const contents = await api.content.data.getAllByStatus(contentsStatus.published);
    const paths = contents.map(c => c.data.map(d => ({ params: { content: c.baseRoute.replace("/", ""), id: d.id }}))).flat();
    return { paths, fallback: true }
}

export const getStaticProps = async ({ params }) => {
    const categories = await api.me.data.getCategories();
    const content = categories.find(c => c.route === `/${params.content}`);

    if (!content)
        return { props: { post: {}, posts: [], content: {}, categories }, revalidate: 1 };
        
    const apiPost = await api.content.data.getPostById(params.id, content);
    const post = (apiPost || {}).state === contentsStatus.published ? apiPost : {};
    
    if (!post)
        return { props: { post: {}, posts: [], content: {}, categories }, revalidate: 1 };
        
    const lastPosts = await api.content.data.getLastPostsByCategoryID(content, contentsConfig.limit, contentsStatus.published, post.id);

    return { props: { post, posts: lastPosts, content, categories }, revalidate: 1 };
}

export default withTranslation("common")(ContentPost);
