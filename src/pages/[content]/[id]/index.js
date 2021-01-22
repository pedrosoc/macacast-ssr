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

import routes from "@/constants/routes";
import social from "@/features/me/constants/social";
import contents from "@/constants/contents";
import containerTypes from "@/constants/containerTypes";

const ContentPost = ({ t, post, posts }) => {
    const router = useRouter();
    if (router.isFallback)
		return <Fragment />

	if (!post || !post.id)
		return <Error />

    const props = post.contentType === "serie"
        ? { colored: "#000" }
        : { colored: "#fff", type: containerTypes.text };

	return (
		<Fragment>
            <MetaHeader meta={routes.contentPost.meta} content={post} />
            <Header social={social} />

			<Section first {...props}>
				<ContentDetails post={post} />
			</Section>

			<Section>
				<ContentList
					showLink
					title={t("podcasts.lastEpisodes")}
					podcasts={posts}
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
};

export const getStaticPaths = async () => {
    const contents = await api.content.data.getAllPromise();
    const paths = contents.map(c => c.data.map(d => ({ params: { content: c.baseRoute.replace("/", ""), id: d.id }}))).flat();
    return { paths, fallback: true }
}

export const getStaticProps = async ({ params }) => {
    const content = contents.find(c => c.route === `/${params.content}`);
    const post = await api.content.data.getPostById(params.id, content);

    return { props: { post, posts: [] }, revalidate: 600 };
}

export default withTranslation("common")(ContentPost);