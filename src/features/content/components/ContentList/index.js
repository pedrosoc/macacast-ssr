import React, { Fragment } from "react";

import PropTypes from "prop-types";

import { isEmpty } from "@/utils/list";

import ContentListHeader from "./ContentListHeader";
import ContentListContent from "./ContentListContent";

const ContentList = ({ title, posts, link }) => {
    if (isEmpty(posts))
		return <Fragment />

	return (
		<Fragment>
			<ContentListHeader title={title} link={link} />
			<ContentListContent posts={posts} />
		</Fragment>
	);
}

ContentList.propTypes = {
	title: PropTypes.string,
	posts: PropTypes.array,
	link: PropTypes.string
};

export default ContentList;
