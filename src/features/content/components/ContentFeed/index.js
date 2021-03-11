import React, { Fragment } from "react";

import PropTypes from "prop-types";

import { withTranslation } from "@i18n";

import ContentFeedSpotight from "./ContentFeedSpotight";
import ContentList from "../ContentList";

import { isEmptyList } from "@/utils/list";

const ContentFeed = ({ t, content }) => {
	if (!content || isEmptyList(content.data))
		return <span>{t("content.emptyCategory")}</span>

        
	const [first, second, third, ...otherPosts] = content.data;
	return (
		<Fragment>
			<ContentFeedSpotight
				title={t("content.lastEpisodes")}
				first={first}
				second={second}
                third={third}
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
	content: PropTypes.object
};

export default withTranslation("common")(ContentFeed);
