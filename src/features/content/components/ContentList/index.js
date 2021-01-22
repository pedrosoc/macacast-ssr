import React, { Fragment } from "react";

import PropTypes from "prop-types";

import { isEmpty } from "@/utils/list";

import ContentListHeader from "./ContentListHeader";
import ContentListContent from "./ContentListContent";

const PodcastList = ({ title, podcasts, showLink }) => {
	if (isEmpty(podcasts))
		return <Fragment />

	return (
		<Fragment>
			<ContentListHeader title={title} showLink={showLink} />
			<ContentListContent podcasts={podcasts} />
		</Fragment>
	);
}

PodcastList.propTypes = {
	title: PropTypes.string,
	podcasts: PropTypes.array,
	showLink: PropTypes.bool
};

export default PodcastList;
