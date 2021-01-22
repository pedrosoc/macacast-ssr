import React, { useState, useEffect, Fragment } from "react";

import PropTypes from "prop-types";

import api from "@api";
import { withTranslation } from "@i18n";

import ContentFeedSpotight from "./ContentFeedSpotight";
import ContentList from "../ContentList";

import { isEmpty } from "@/utils/list";

const ContentFeed = ({ t, content }) => {
	if (!content || isEmpty(content.data))
		return <Fragment />

	const [first, second, ...otherPosts] = content.data;
	return (
		<Fragment>
			<ContentFeedSpotight
				title={t("content.lastEpisodes")}
				first={first}
				second={second}
			/>

			<ContentList
				title={t("content.anotherEpisodes")}
				posts={otherPosts}
			/>
		</Fragment>
	);
}

ContentFeed.propTypes = {
	className: PropTypes.string,
	t: PropTypes.func,
	podcasts: PropTypes.array
};

export default withTranslation("common")(ContentFeed);
